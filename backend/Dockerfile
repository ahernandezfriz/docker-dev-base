# Usa una imagen base de Node
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto del backend
EXPOSE 4000

# Comando para ejecutar la app
CMD ["npm", "start"]
