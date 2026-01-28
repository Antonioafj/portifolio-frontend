# Estágio 1: Build com Node 22 (LTS)
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Estágio 2: Servir com Nginx
FROM nginx:stable-alpine
# Altere a linha 12 para isso (funciona na maioria dos casos):
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
# Copiamos uma config do nginx para as rotas do Angular funcionarem
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80