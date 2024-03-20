# from here we are downloding the image
FROM node
# this is the working directory in the container where all the code is present
WORKDIR /app
# putting the values/files here that are not likely to change
COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD [ "node" , "server.js"]