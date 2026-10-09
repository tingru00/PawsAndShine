# Build
FROM mcr.microsoft.com/dotnet/sdk:10.0-preview AS build
WORKDIR /src

# Kopiera projektfilerna för att återställa dependencies
COPY PawsAndShine.API/*.csproj ./PawsAndShine.API/
COPY PawsAndShine.Domain/*.csproj ./PawsAndShine.Domain/
COPY PawsAndShine.Infrastructure/*.csproj ./PawsAndShine.Infrastructure/
RUN dotnet restore PawsAndShine.API/PawsAndShine.API.csproj

# Kopiera hela källkoden o publicera
COPY . .
WORKDIR /src/PawsAndShine.API
RUN dotnet publish -c Release -o /app/publish

# Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0-preview AS final
WORKDIR /app

# Kopiera den färdigbyggda koden från Build
COPY --from=build /app/publish .

# Miljövariabel så .NET lyssnar på port 8080 internt
ENV ASPNETCORE_URLS=http://+:8080

# Körs som icke-root
USER app

EXPOSE 8080
ENTRYPOINT ["dotnet", "PawsAndShine.API.dll"]