# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Remove any existing build artifacts
RUN rm -rf .next

# Create production build
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application with host binding
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]