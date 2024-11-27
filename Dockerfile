# Step 1: Build the React app using pnpm and Vite
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the source code to the container
COPY . .

# Build the React app with Vite
RUN pnpm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build folder from the previous step to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx is running on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

