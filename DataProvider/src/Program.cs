using DataProvider.Data;
using DataProvider.Handlers;
using DataProvider.Services;
using MassTransit;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container

builder.Logging.ClearProviders();
var logger = new LoggerConfiguration()
    .WriteTo.Console()
    .ReadFrom.Configuration(builder.Configuration)
    .CreateLogger();
builder.Logging.AddSerilog(logger);

builder.Services.AddSingleton<IRentRepository, RentRepository>();
builder.Services.AddSingleton<IRentService, RentService>();

builder.Services.AddMassTransit(x =>
{
    x.AddConsumer<RentMessageHandler>();

    x.UsingRabbitMq((context, cfg) =>
    {
        cfg.ReceiveEndpoint("RentEntries", e =>
        {
            e.ClearSerialization();
            e.UseRawJsonSerializer();

            e.DiscardFaultedMessages();
            e.DiscardSkippedMessages();

            e.ConfigureConsumer<RentMessageHandler>(context);
        });
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline

app.UseHttpsRedirection();

// Set up endpoints & other pre-run stuff

app.Run();
