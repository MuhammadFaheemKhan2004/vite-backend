import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const products = [
  { img: 'http://localhost:3000/image.png', name: 'Laptop', price: 1000 },
  { img: 'http://localhost:3000/phone.png', name: 'Phone', price: 500 },
  { img: 'http://localhost:3000/tablet.png', name: 'Tablet', price: 300 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  console.log("New product received:", newProduct);

  products.push(newProduct);
  res.status(201).json({ message: "Product added", product: newProduct });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
