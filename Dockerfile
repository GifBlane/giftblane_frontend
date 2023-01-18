FROM node:18-alpine AS builder

WORKDIR /usr/src

COPY ["package.json", "/usr/src/"]

# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
RUN npm install

COPY [".","/usr/src/"]

# Stage 2: build
# FROM node:18-alpine AS builder

# WORKDIR /usr/src

# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
RUN npm run build

EXPOSE 3001

# # Stage 3: run
# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./
CMD ["npm", "run", "start"]


# # Define una "stage" o fase llamada builder accesible para la siguiente fase
# FROM node:12 as builder
# # copiamos solo los archivos necesarios
# COPY ["package.json", "package-lock.json", "/usr/src/"]

# WORKDIR /usr/src
# # Instalamos solo las dependencias para Pro definidas en package.json
# RUN npm install --only=production

# COPY [".", "/usr/src/"]
# # instalamos dependencias de desarrollo
# RUN npm install --only=development

# # Pasamos los tests
# RUN npm run test
# ## Esta imagen esta creada solo para pasar los tests.

# # Productive image
# FROM node:12

# COPY ["package.json", "package-lock.json", "/usr/src/"]

# WORKDIR /usr/src
# # instar las dependencias de PRO
# RUN npm install --only=production

# # Copiar  el fichero de la imagen anterior.
# # De cada stage se reutilizan las capas que son iguales.
# COPY --from=builder ["/usr/src/index.js", "/usr/src/"]
# # Pone accesible el puerto
# EXPOSE 3000

# CMD ["node", "index.js"]
# ### En tiempo de build en caso de que algún paso falle, el build se detendrá por completo.