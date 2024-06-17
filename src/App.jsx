// import { useEffect, useState } from "react";
import {
  Header,
  Hero,
  Main,
  Contact,
  Footer,
  ToTop,
  Skills,
  Resume,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary-color text-font-color">
      <div className="sm:w-10/12 m-auto px-4 sm:px-8 lg:px-14 bg-secondary-color border-x border-x-border-color">
        <Header />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-8 lg:-mx-14" />
        <Hero />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Skills />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Main />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Resume />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Contact />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Footer />
        <ToTop />
      </div>
    </div>
  );
};

export default App;
