FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS publish
WORKDIR /src
COPY ["DataProvider.csproj", "."]
RUN rm -rf ./bin ./obj
RUN dotnet restore "./DataProvider.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet publish "DataProvider.csproj" --no-restore -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DataProvider.dll"]
