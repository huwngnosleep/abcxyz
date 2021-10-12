### run container with a terminal inside it
<!-- docker container run [OPTIONS] IMAGE [COMMAND] [ARG...] -->
`docker container run -it --name proxy nginx bash` 

### get a shell in running container
`docker container exec -it mysql bash`