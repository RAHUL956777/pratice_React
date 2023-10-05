import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  console.log("Server at http://localhost:5000");
});

app.get("/api/data", (req, res) => {
  // write some random objects into an array and write some dummy address
  const data = [
    {
      id: "1",
      name: "John",
      address: "1234 Main Street",
      city: "Boston",
      state: "MA",
      zip: "02101",
      country: "USA",
    },
    {
      id: "2",
      name: "Jane",
      address: "5678 Main Street",
      city: "Boston",
      state: "MA",
      zip: "02101",
      country: "USA",
    },
    {
      id: "3",
      name: "Joe",
      address: "1234 Main Street",
      city: "Boston",
      state: "MA",
      zip: "02101",
      country: "USA",
    },
    {
      id: "4",
      name: "Jill",
      address: "5678 Main Street",
      city: "Boston",
      state: "MA",
      zip: "02101",
      country: "USA",
    },
  ];

  res.json(data);
});
