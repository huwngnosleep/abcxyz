dsn_driver = "{IBM DB2 ODBC DRIVER}"
dsn_database = "BLUDB"
dsn_hostname = "yourDB2hostname"
dsn_port = "50000"
dsn_protocol = "TCPIP"
dsn_uid = "userid"
dsn_pwd = "password"

# Create database connection
dsn = (
    "DRIVER={{IBM DB2 ODBC DRIVER}};"
    "DATABAS{0};"
    "HOSTNAME={1};"
    "PORT={2};"
    "PROTOCOL=TCPIP;"
    "UID={3};"
    "PWD={4}"
).format(dsn_database, dsn_hostname, dsn_port, dsn_uid, dsn_pwd)

try:
    connection = ibm_db.connect(dsn, "", "")
    print("Connected")
except:
    print('Failed')

# Close connection
ibm_db.close(connection)