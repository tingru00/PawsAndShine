# Build
FROM node:18-alpine AS build
WORKDIR /app

# Kopiera package-filer o installera beroenden
COPY package*.json ./
RUN npm install

# Kopiera källkoden och bygg den statiska applikationen
COPY . .
RUN npm run build

# Runtime
# Använder nginxinc/nginx-unprivileged för non-root
FROM nginxinc/nginx-unprivileged:alpine AS final

# Kopiera byggda filer till Nginx standardmapp
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]