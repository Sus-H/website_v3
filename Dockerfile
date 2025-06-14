# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --production

# Copy built assets from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY server.js ./

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 remix
RUN chown -R remix:nodejs /app

# Switch to non-root user
USER remix

# Expose the Unix socket directory
VOLUME /tmp

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the server
CMD ["node", "server.js"] 