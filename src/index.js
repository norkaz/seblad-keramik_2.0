import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Videos from "./routes/content/videos";
import About from "./routes/content/about";
import Instagram from "./routes/content/instagram";
import Products from "./routes/products/products";
import ProductPage from "./routes/products/product/product-page";
import OrderConfirmation from "./routes/order-confirmation";
import NotFound from "./routes/404";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/controls/scrollToTop/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/about" element={<About />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/products" element={<Products />} />
      <Route path={"/products/product/:id"} element={<ProductPage />} />
      <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
