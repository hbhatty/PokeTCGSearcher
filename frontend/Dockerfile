# Use official node.js runtime as parent image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:1.23
WORKDIR /usr/share/nginx/html

# Copy the built app from the build stage to Nginx
COPY --from=build /usr/src/app/dist ./

# Use port 80
EXPOSE 80

# start nginx in the background
CMD ["nginx", "-g", "daemon off;"]
