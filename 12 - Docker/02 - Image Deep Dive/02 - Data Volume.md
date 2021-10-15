### All file generated from container will be store on local machine, not on the container itself

### So deleting the container might not delete its data

#### Specify the volume to generate data to it by VOLUME command
`VOLUME path`

###### example:
create two container
`docker container run -d mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql`
`docker container run -d mysql2 -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql`

show volume
<!-- it should have 2 volume -->
`docker volume ls` 

remove all container
`docker container rm mysql mysql2`

show all volume
<!-- no thing change -->
`docker volume ls`

-> so the data is safe

### create container with specified volume
`docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql`
