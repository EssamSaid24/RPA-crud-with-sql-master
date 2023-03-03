# RPA-crud-with-sql-master
RPA Program Backend
This is the backend for an RPA (Robotic Process Automation) program built using Node.js and PostgreSQL database. The backend contains four tables, users, robots, machines, and processes.

Users Table
The users table contains the details of all the users that can access the RPA program. The table has the following columns:

id: unique id for each user.
username: username of the user.
email: email of the user.
password: password of the user.

Robots Table
The robots table contains the details of all the robots that are available to be used in the RPA program. The table has the following columns:

id: unique id for each robot.
robot_name: name of the robot.
robot_type: type of the robot.

The Machines Table
The machines table contains the details of all the machines that are available to be used in the RPA program. The table has the following columns:

id: unique id for each machine.
machine_name: name of the machine.
machine_type: type of the machine, either Standrad or Template.

Processes Table
The processes table contains the details of all the processes that can be executed by the RPA program. The table has the following columns:

id: unique id for each process.
process_name: name of the process.
package_name: name of the package used for the process.
package_version: version of the package used for the process.
process_priority: priority of the process, either high, medium, or low.
robot_id: id of the robot that can execute the process.

Installation
Clone the repository from Github.
Install Node.js and PostgreSQL.
Create a database with the name "rpa_db".
Run the command "npm install" to install all the dependencies.
Run the command "npm start" to start the server.

Endpoints
The following are the endpoints available for the RPA program backend:

Users
GET /users - get all users
GET /users/:id - get a user by id
POST /users - create a new user
PUT /users/:id - update a user by id
DELETE /users/:id - delete a user by id

Robots
GET /robots - get all robots
GET /robots/:id - get a robot by id
POST /robots - create a new robot
PUT /robots/:id - update a robot by id
DELETE /robots/:id - delete a robot by id

Machines
GET /machines - get all machines
POST /machines - create a new machine
DELETE /machines/:id - delete a machine by id

Processes
GET /processes - get all processes
POST /processes - create a new process
DELETE /processes/:id - delete a process by id

Acknowledgments
The developers of Node.js and PostgreSQL.
The community of developers on Stack
