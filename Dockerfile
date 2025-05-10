# Instalar dependencias solo cuando sea necesario
FROM node:18-alpine3.15 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Construir la aplicación con caché de dependencias
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Imagen de producción, copiar los archivos necesarios y ejecutar la aplicación
FROM node:18-alpine3.15 AS runner

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --prod

COPY --from=builder /app/dist ./dist

# Ejecutar la aplicación
CMD ["node", "dist/main"]
