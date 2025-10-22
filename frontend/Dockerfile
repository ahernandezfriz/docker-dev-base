FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Cambiamos para que Vite escuche en todas las interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
