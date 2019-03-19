# 1. Ultima version de la imagen de node
FROM node:8.15.1-alpine 

# 2. Directorio de trabajo
WORKDIR /app

# 3. Agregar el .env
ADD .env /app

# 4. Exponer puertos
EXPOSE ${PORT}

# 5. Agregar package.json
ADD package.json /app

# 6. Instalar dependencias
RUN npm install

# 7. Copiar el resto en el directorio
COPY . /app

# 8. Iniciar app en el contenedor
CMD ["npm", "start"]
