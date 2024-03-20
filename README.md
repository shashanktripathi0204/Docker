 ## This file will contain the instruction for docker that we want to execute when we create our own image

#### FROM
`FROM -> build our own image on an existing image,here the name node is either a pre existing image or an img that is present on dockerhub`

FROM node

WORKDIR /app

#### COPY
`copy -> is responsible for moving files from local to inside the container
first "." -> path outside of the container/img where files live that shoule be copied into the img 
second "." -> path inside the container where the copied files should be stored`

COPY . /app

RUN npm install

`We want to let docker know that when this container is started we want to expose a certain port to pur local system(our ,achine here that will run the container) the below instruction is just for show, but is a good practice that EXPOSE 80 in the Dockerfile in the end is optional. It documents that a process in the container will expose this port. But you still need to then actually expose the port with -p when running docker run. So technically, -p is the only required part when it comes to listening on a port. Still, it is a best practice to also add EXPOSE in the Dockerfile to document this behavior.`

EXPOSE 80

`A command that should be executed when ever we run the container based on that image`

CMD ["node", "server.js"]
