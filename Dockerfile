# FROM trion/ng-cli-karma:13.3.1 AS base
FROM trion/ng-cli-karma:13.2.0 AS base
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@latest
RUN npm config set legacy-peer-deps true
RUN npm install

FROM base AS builder
ARG environment
COPY . .
# RUN npm run test:ci
RUN npm run build:ssr


### STAGE 2: Run Client Browser ###
FROM nginx:1.13.12-alpine AS client-browser
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/oddsMentor-Angular/browser/ /usr/share/nginx/html

### STAGE 3: SSR Server ###
FROM base AS ssr-server
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist /usr/src/app/dist/
COPY ./package.json /usr/src/app/package.json

EXPOSE 4000
CMD ["npm", "run", "serve:ssr"]