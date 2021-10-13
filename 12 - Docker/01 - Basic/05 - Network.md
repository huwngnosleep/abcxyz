### run container in a specific port
`docker container run -p 80:80 --name webhost -d nginx`

### view port where that container running
`docker container port webhost`

### view ip address of that container
`docker container inspect --format '{{ .NetworkSettings.IPAddress }}' webhost`

