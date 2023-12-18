FROM node:latest
WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Run the application
CMD ["npm", "start"]

