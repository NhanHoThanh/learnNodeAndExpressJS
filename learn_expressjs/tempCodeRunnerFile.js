app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "methods_public/index.html"));
});
