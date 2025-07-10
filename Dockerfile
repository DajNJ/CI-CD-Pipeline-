# Use official Nginx image
FROM nginx:alpine

# Copy static files to Nginx's default public directory
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx (default command)
CMD ["nginx", "-g", "daemon off;"]
