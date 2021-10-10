import React from "react";
import GlobalStyle from "./theme/GlobalStyles";
import Home from "./pages/HomePage/Home";
import { Navbar, Footer } from "./components";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Element id="Footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;
