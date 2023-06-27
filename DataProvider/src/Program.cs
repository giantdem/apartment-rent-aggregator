using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container

builder.Logging.ClearProviders();
var logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();
builder.Logging.AddSerilog(logger);

var app = builder.Build();

// Configure the HTTP request pipeline

app.UseHttpsRedirection();

// Set up endpoints & other pre-run stuff

app.Run();
