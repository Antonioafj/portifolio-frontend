# ===== STAGE 1: Build do Angular =====
FROM node:22 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration=production


# ===== STAGE 2: Nginx =====
FROM nginx:stable-alpine

# Limpa o conteúdo default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build do Angular
COPY --from=build /app/dist/*/browser /usr/share/nginx/html

# Config do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
