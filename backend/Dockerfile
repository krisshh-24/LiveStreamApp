# Use an official Node.js image as the base
FROM node:18

# Install FFmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /home/app

# Copy package.json and package-lock.json to install dependencies first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy all backend files to the container
COPY . .

# Expose port 3000 for the backend
EXPOSE 3000

# Start the backend server
CMD ["node", "index.js"]
