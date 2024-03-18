# FROM node:20

# WORKDIR /app

# COPY . .

# RUN npm install
# RUN npm run build
# RUN npx prisma generate

# EXPOSE 3000

# CMD ["node", "dist/index.js"]

#old way not optimized

# new way cached
FROM node:20

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]