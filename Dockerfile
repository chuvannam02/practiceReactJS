# ---------- BUILD STAGE ----------
FROM node:22.12.0-alpine AS builder

WORKDIR /app

# enable corepack và pin pnpm version
RUN corepack enable && corepack prepare pnpm@8 --activate

# copy dependency files trước để tận dụng cache
COPY package.json pnpm-lock.yaml ./

# pnpm store cache
RUN pnpm fetch

# install dependency offline (nhanh hơn nhiều)
RUN pnpm install --frozen-lockfile --offline

# copy source code
COPY . .

# build react
RUN pnpm run build


# ---------- PRODUCTION STAGE ----------
FROM nginx:alpine

# copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
