**Backend for Todo Management System**
This project serves as the backend for a Todo Management System. It provides endpoints to create, update, and retrieve todo tasks.

**Technologies Used**
Express.js: A fast, unopinionated, minimalist web framework for Node.js.
MongoDB: A NoSQL database used to store todo tasks.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
dotenv: A zero-dependency module that loads environment variables from a .env file.
cors: Middleware for Express.js to enable Cross-Origin Resource Sharing (CORS).
Installation
To set up the backend locally, follow these steps:

Clone the repository to your local machine:
```Typescript
git clone <repository-url>
Navigate to the backend directory:
cd <backend-directory>
Install dependencies:
npm install
Set up environment variables: Create a .env file in the root directory of the backend and define the following variables:
PORT= 1200
```
**API Endpoints**

**Create Todo Task**
**POST** `/api/todo/create`
Creates a new todo task

**Move Todo Task to Progress**
**PATCH** `/api/todo/progress/`:
id Moves a todo task to the "In Progress" state.

**Move Todo Task to Done**
**PATCH** `/api/todo/done/` :id Marks a todo task as "Done".

**Get All Tasks**
**GET** /api/todo/all : Retrieves all todo tasks.

**Get Combined Tasks**
**GET** /api/todo/combine : Retrieves todo tasks grouped by status (Todo, In Progress, Done).

**Contributing**
Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
