To build the docker image for the node server

docker build -t myapp2 .

To run it and make it available on host port 8080 

docker run -p 3001:3001 myapp2
