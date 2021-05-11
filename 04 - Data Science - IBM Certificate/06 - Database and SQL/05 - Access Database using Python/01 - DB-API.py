# Connection methods
# .cursor()
# .commit()
# .rollback()
# .close()

# Cursor method
# .callproc()
# .execute()
# .executemany()
# .fetchone()
# .fetchmany()
# .fetchall()
# .nextset()
# .arraysize()
# .close()

from dbmodule import connect

# Create connection object
Connection = connect('db_name', 'username', 'password')

# Create a cursor object
Cursor = Connection.cursor()

# Run Queries
Cursor.execute('select * from mytable')
Results = cursor.fetchall()

# Free resources
Cursor.close()
Connection.close()