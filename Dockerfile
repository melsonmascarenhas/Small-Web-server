FROM node:14
RUN mkdir ~/server
WORKDIR /server
COPY . /server
CMD ["node", "index.js"]

