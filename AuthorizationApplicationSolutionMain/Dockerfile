FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["AuthorizationApplicationSolution.csproj", "."]
RUN dotnet restore "./AuthorizationApplicationSolution.csproj"
COPY . .
RUN dotnet build "AuthorizationApplicationSolution.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AuthorizationApplicationSolution.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
RUN mkdir /app/wwwroot/media
RUN mkdir /app/wwwroot/soap
EXPOSE 5100
ENTRYPOINT dotnet AuthorizationApplicationSolution.dll --urls "http://0.0.0.0:5100/"