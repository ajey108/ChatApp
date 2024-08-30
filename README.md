MERN Chat App
A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), featuring a modern UI with Tailwind CSS, secure authentication with JWT, real-time messaging with Socket.io, and more.
Features

Real-time messaging using Socket.io
User authentication and authorization with JWT
Responsive UI built with React and Tailwind CSS
Notification sounds for new messages
MongoDB for data persistence
Express.js backend with real-time capabilities
React frontend built with Vite for fast development and optimized production builds
Client-side routing with React Router DOM

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or later)
npm (v6 or later)
MongoDB (v4 or later)

Installation

Clone the repository:
```Copygit clone https://github.com/yourusername/mern-chat-app.git```

```cd mern-chat-app```

Install backend dependencies:
Copycd backend
```npm install```

Install frontend dependencies:

Copycd ../frontend

```npm install```


Configuration

Create a .env file in the backend directory with the following variables:
```CopyPORT=5000```

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create a .env file in the frontend directory with the following variables:

```CopyVITE_API_URL=http://localhost:5000```


Running the Application

Start the backend server:
Copycd backend
npm run dev
This will start the server using nodemon for automatic restarts on file changes.
Start the frontend development server:
Copycd frontend
npm run dev

Open your browser and navigate to http://localhost:5173 to use the application.

Building for Production

Build the frontend:
Copycd frontend

```npm run build```

Serve the built frontend using a static file server or integrate it with your backend.

Technologies Used

Frontend:

React (with Vite)
Tailwind CSS
Socket.io-client
React Router DOM


Backend:

Node.js
Express.js
MongoDB (with Mongoose)
Socket.io
JSON Web Tokens (JWT)



Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
This project is licensed under the MIT License.
