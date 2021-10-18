### Secrets is stored in secret database, inside manager node's hard disk
##### Services need to use will be granted access to that Secret. 
##### Storing all Secrets assembly will make managing multi service easily

### Create Secret
`echo "dbpass" | docker secret create db_pass -`

### View Secret list
`docker secret ls`

### Assign Secret to a service
`docker service create --name psql --secret psql_user --secret psql_pass -e POSTGRES_PASSWORD_FILE=/run/secrets/psql_pass -e POSTGRES_USER_FILE=/run/secrets/psql_user postgres`