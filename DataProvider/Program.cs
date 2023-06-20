var builder = WebApplication.CreateBuilder(args);

// Add services to the container

var app = builder.Build();

// Configure the HTTP request pipeline

app.UseHttpsRedirection();

// Set up endpoints & other pre-run stuff

app.Run();
