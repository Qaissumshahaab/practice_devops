FROM node:24-alpine AS builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm ci

COPY frontend .

RUN npm run build


FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/frontend/dist/ /usr/share/nginx/html/

CMD ["nginx","-g","daemon off;"]