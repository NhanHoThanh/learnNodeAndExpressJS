const { v4: uuid } = require("uuid");
let users = [];

const getUsers = (req, res) => {
  console.log(`User in database ${users}`);
  res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  console.log(`${user.username} added to the database`);
};

const getUser = (req, res) => {
  res.send(req.params.id);
};

const deleteUser = (req, res) => {
  console.log(`user id ${req.params.id} deleted`);
  users = users.filter((user) => user.id !== req.params.id);
};

const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  user.username = req.body.username;
  user.age = req.body.age;
  console.log(
    `username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`
  );
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
