# Use the official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (to leverage Docker cache)
COPY package.json ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the app
COPY . .

# Build the app
RUN yarn build

# Use a lightweight web server to serve the build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 and run Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
