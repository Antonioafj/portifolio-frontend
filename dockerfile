# Estágio 1: Build com Node 22 (Versão completa, mais estável)
FROM node:22 AS build 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Estágio 2: Servir com Nginx (Pode manter alpine aqui, o erro é no build)
FROM nginx:stable-alpine
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80