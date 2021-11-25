# Refresh processing
Refresh process is to integrate new data into current system

![refresh-processing](refresh-processing.png)

![refresh-workflow](refresh-workflow.png)

# Types of Data Source

![change-data-classification](change-data-classification.png)

### 1, Cooperative Change Data
When application make changes with data, the DBMS can trigger to immediately update those data into the Data Warehouse

![cooperative-change-data](cooperative-change-data.png)

### 2, Logged Change Data
Logged data can be used to track actions made in system

![logged-change-data](logged-change-data.png)

### 3, Queryable Change Data
![queryable-change-data](queryable-change-data.png)

### 4, 
Snapshot change data can track changes without any source requirement. But retrieving a source file can be intensive and also may be constraints about the time for doing it.

![snapshot-change-data](snapshot-change-data.png)