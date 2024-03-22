import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Home/Product";
import Welcome from "./routes/Home/Welcome";
import Computers from "./routes/Home/Product/Computers";
import Electronics from "./routes/Home/Product/Electronics";
import Book from "./routes/Home/Product/Book";
import AboutUs from "./routes/AboutUs";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Welcome />} />
          <Route path="product" element={<Product />}>
            <Route index element={<Navigate to="/product/computers" />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="book" element={<Book />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
