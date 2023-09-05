# Use an official Node.js runtime as the base image
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY build .

# Build the React app for production
# RUN npm run build

# Use an official Nginx runtime as the production server image
FROM nginx:alpine

# Copy the built React app from the build container to the Nginx server's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
