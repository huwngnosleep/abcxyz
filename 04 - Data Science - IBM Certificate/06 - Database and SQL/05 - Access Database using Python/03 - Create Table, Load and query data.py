statement = ibm_db.exec_immediate(connection,
"""create table Trucks(
    serial varchar(20) PRIMARY KEY NOT NULL,
    model varchar(20) NOT NULL
)"""
)