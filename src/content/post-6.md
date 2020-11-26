  ## <center> DBMS
  **Database:** Database is a collection of inter-related data which helps in efficient retrieval, insertion and deletion of data from database and organizes the data in the form of tables, views, schemas, reports
  **DDL** is short name of Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.
  EX -: CREATE, ALTER,DROP, COMMENT,RENAME,TRUNCATE
  **DML** is short name of Data Manipulation Language which deals with data manipulation and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE
  **Database Management System:** The software which is used to manage database is called Database Management System (DBMS).It allows users to define, update, retriev and administrate data
**Disadvatanges of file system : ** Redundacy,Inconsisstancy, difficult data access, unauthorized access,no concurrent access,no backup and recovery

**DBMS 3-tier Architecture**

DBMS 3-tier architecture divides the complete system into three inter-related but independent modules as shown below:
1)Physical Level - : The information about the location of database objects in the data store is kept.
2)Conceptual Level -: data is represented in the form of various database tables.
3)External level - : specifies a view of the data in terms of conceptual level tables![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/dbms-3tier.jpg) 

**Data Independence -:** Data independence means a change of data at one level should not affect another level
**Physical Data Independence:** Any change in the physical location of tables and indexes should not affect the conceptual level
**Conceptual Data Independence:**  Change in conceptual schema should not affect external schema

**Phases of database design**
