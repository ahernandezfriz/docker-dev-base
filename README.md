# Proyecto Base con Docker (Frontend + Backend + PostgreSQL)

Este proyecto contiene un entorno completo para ejecutar una aplicación chatbot usando Node.js, Vite y PostgreSQL.

## 🚀 Servicios

- **Frontend:** Vite (puerto 5173)
- **Backend:** Node.js con Express (puerto 4000)
- **Base de datos:** PostgreSQL (puerto 5432)
- **Admin DB:** pgAdmin (puerto 5051)

## 🧩 Instrucciones

1. Clona el repositorio  
   `git clone https://github.com/TU_USUARIO/chatbot-docker-stack.git`

2. Inicia los contenedores  
   `docker compose up --build`

3. Abre en el navegador:  
   - Frontend → [http://localhost:5173](http://localhost:5173)
   - Backend → [http://localhost:4000](http://localhost:4000)
   - pgAdmin → [http://localhost:5051](http://localhost:5051)
