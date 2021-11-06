create role readonly with login encrypted password 'readonly'

create user test_user with encrypted password 'password'

-- we can config the previlege of all users in pg_hba.conf
show hba_file