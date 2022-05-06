FROM node:13-alpine
RUN mkdir -p /home/app
COPY ./* /home/app/
EXPOSE 8081
WORKDIR /home/app
RUN npm install
CMD ["node", "server.js"]