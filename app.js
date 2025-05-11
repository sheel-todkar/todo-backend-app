const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: "your_secret_key",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/todo-app" }),
}));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(authRoutes);
app.use("/todos", todoRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/todos`);
});
