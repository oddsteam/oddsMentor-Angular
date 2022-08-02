FROM trion/ng-cli-karma AS base
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
# RUN npm run test:ci
RUN npm run build:ssr

FROM node:alpine AS server-side-rendering
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/dist /usr/src/app/dist
EXPOSE 4000
CMD ["node", "dist/oddsMentor-Angular/server/main.js"]