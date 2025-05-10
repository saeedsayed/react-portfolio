// import { useEffect, useState } from "react";
import { useEffect } from "react";
import {
  Header,
  Hero,
  Projects,
  Contact,
  Footer,
  ToTop,
  Skills,
  Resume,
} from "./components";
import { useMainContext } from "./context/MainContext";

const App = () => {
  const {loading} = useMainContext()
  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  if (loading){
    return <section
    className="bg-primary-color h-screen flex items-center justify-center text-font-color"
    >Loading...</section>  // replace with your own loading component here.
    // This will prevent the app from crashing when the data is fetched.
    // It will also give a nice loading state to the user.
    // Note: This is just a placeholder, replace it with your own loading component.
  }
  return (
    <div className="bg-primary-color text-font-color">
      <div className="sm:w-10/12 m-auto px-4 sm:px-8 lg:px-14 bg-secondary-color border-x border-x-border-color">
        <Header />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-8 lg:-mx-14" />
        <Hero />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Skills />
        <div className="border-t border-border-color -mx-4 sm:-mx-8 my-12 lg:-mx-14" />
        <Projects />
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
