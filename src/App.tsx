import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Welcome from "./routes/Home/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          {/*<Route path="product" element={<Product />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="book" element={<Book />} />
          <Route />
          <Route path="about" element={<AboutUs />} />
  <Route path="*" element={<NotFound />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
