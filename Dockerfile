# Usa una imagen base de Node.js
FROM node:20-alpine

# Instala PNPM globalmente
RUN npm install -g pnpm

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y pnpm-lock.yaml al directorio de trabajo
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias usando PNPM
RUN pnpm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Establece la zona horaria de Monterrey
RUN apk --no-cache add tzdata
ENV TZ=America/Monterrey

# Compila la aplicación
RUN pnpm build

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["pnpm", "start"]
