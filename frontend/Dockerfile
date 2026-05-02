FROM node:20-alpine AS builder

WORKDIR /app

# install deps
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# copy sources and build
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

# production deps
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
