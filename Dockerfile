# FROM trion/ng-cli-karma:13.3.1 AS base
FROM trion/ng-cli-karma:13.2.0 AS base
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@8.13.2
RUN npm install

FROM base AS builder
ARG environment
COPY . .
# RUN npm run test:ci
RUN npm run build


### STAGE 2: Run ###
FROM nginx:1.13.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/odds-mentor-angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
