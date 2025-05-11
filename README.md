# Todo Backend App

This is a simple Todo application backend built with Node.js, Express, MongoDB, and EJS templating. It supports user authentication and CRUD operations for todos.

## Features

- User registration and login with session-based authentication
- Create, read, update, and delete todos
- Protected routes for authenticated users
- Simple and clean UI with EJS views
- Session management with express-session and connect-mongo

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sheel-todkar/todo-backend-app.git
cd todo-backend-app
```

2. Install dependencies:

```bash
npm install
```

3. Make sure MongoDB is running locally on `mongodb://localhost:27017`.

4. Start the application:

```bash
node app.js
```

5. Open your browser and navigate to `http://localhost:3000/login` to start using the app.

## Usage

- Register a new user at `/register`.
- Login at `/login`.
- After login, you will be redirected to `/todos` where you can manage your todos.
- Use the forms to add, update, or delete todos.
- Logout using the link in the header.

## Project Structure

- `app.js` - Main application entry point and route setup
- `routes/` - Express route definitions for auth and todos
- `controllers/` - Route handler logic for auth and todos
- `models/` - Mongoose schemas for User and Todo
- `middleware/` - Authentication middleware
- `views/` - EJS templates for UI
- `public/` - Static assets like CSS

## Notes

- Passwords are hashed using bcryptjs.
- Sessions are stored in MongoDB using connect-mongo.
- The app uses simple session-based authentication and is intended for learning/demo purposes.

## License

MIT License
