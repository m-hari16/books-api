FROM node:16.20-alpine
WORKDIR /app/api
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]
