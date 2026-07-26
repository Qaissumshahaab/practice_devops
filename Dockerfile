# syntax=docker/dockerfile:1


# Build stage

FROM node:24-alpine AS build

LABEL maintainer="Muhammad Qaissum Shahaab"
LABEL version="1.0"

WORKDIR /app

# Copy dependency files first (better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build the Vite application
RUN npm run build


# Runtime stage

FROM nginx:alpine

LABEL maintainer="Muhammad Qaissum Shahaab"
LABEL version="1.0"

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built application
COPY --from=build /app/dist /usr/share/nginx/html



# Start Nginx
CMD ["nginx", "-g", "daemon off;"]