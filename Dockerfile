# ---- Builder Stage ----
# Use a slim Node.js image for a good balance of size and functionality
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install all dependencies (including devDependencies for the build)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
# This runs 'build:server' (compiling server.ts) and 'remix vite:build' (client assets)
RUN npm run build:server

# ---- Runner Stage ----
# Start from a fresh slim image for the final container
FROM node:20-slim AS runner

WORKDIR /app

# Install socat for socket forwarding and clean up apt cache to keep image small
RUN apt-get update && \
    apt-get install -y socat && \
    rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy build artifacts from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./server.js

# Create a non-root user for better security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 remix
RUN chown -R remix:nodejs /app
USER remix

# Expose the port the app runs on (good practice)
EXPOSE 4000

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=4000

# Start Node server in the background and socat in the foreground.
# socat forwards the Unix socket to the Node server's TCP port.
# 'unlink-early' helps prevent "address in use" errors on restart.
CMD ["sh", "-c", "node server.js & socat UNIX-LISTEN:/tmp/susanne.sock,fork,reuseaddr,unlink-early TCP:localhost:4000"] 