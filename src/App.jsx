import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Library from "./pages/Library/Library";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <a href="/" className="logo">
            PerpusKu<span class="material-symbols-outlined"></span>
          </a>

          <nav className="navbar">
            <a href="/">Home</a>
            <a href="/library">Library</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
