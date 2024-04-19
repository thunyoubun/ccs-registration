# Use official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Set the command to start the Next.js application
CMD ["npm", "run", "dev"]
