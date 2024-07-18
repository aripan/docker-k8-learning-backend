# Dockerfile for Node.js application

# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install the dependencies
# Use 'yarn ci' instead of 'yarn install' to ensure a clean and reproducible install of dependencies
RUN yarn ci

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Define the command to run the application
CMD ["yarn", "start"]
