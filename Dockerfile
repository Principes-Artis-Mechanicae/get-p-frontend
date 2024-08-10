FROM node:22

WORKDIR /get-p-frontend

COPY package-lock.json ./
COPY package.json ./

RUN npm ci
RUN npm install -g serve

COPY . .

EXPOSE 5173

RUN npm run build

CMD ["npm", "run", "start"]