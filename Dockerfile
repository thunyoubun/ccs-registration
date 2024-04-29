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

# สร้าง production build
RUN npm run build

# ระบุพอร์ตที่แอปพลิเคชันจะใช้ในการเชื่อมต่อ
EXPOSE 3000

# เริ่มต้นแอปพลิเคชันในโหมด Production
CMD ["npm", "start"]
