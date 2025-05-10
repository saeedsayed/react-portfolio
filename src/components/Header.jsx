import { useEffect, useRef, useState } from "react";
import { LightDarkM, sections } from "./index";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SocialNav from "./SocialNav";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [clock, setClock] = useState("00:00:00 AM");
  const header = useRef();

  // ========
  // set clock
  // ========
  useEffect(() => {
    let interval = setInterval(() => {
      let d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      let session = "AM";
      if (h > 12) {
        h = h - 12;
        session = "PM";
      }
      h = h == 0 ? 12 : h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      setClock(h + ":" + m + ":" + s + session);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  window.onscroll = () => {
    if (window.scrollY > 200) {
      header.current.classList.add("sticky", "top-0");
      header.current.classList.remove("-top-32");
    } else if (window.scrollY > 100) {
      header.current.classList.remove("top-0");
      header.current.classList.add("-top-32");
    } else {
      header.current.classList.remove("-top-32");
      header.current.classList.remove("sticky", "top-0");
    }
  };

  return (
    <header
      ref={header}
      className={`flex justify-evenly px-10d pt-4 gap-3 transition-all duration-500 z-50 `}
    >
      {/*============= 
        pc nav 👇
      ==============*/}
      <nav className="hidden sm:block sm:order-2">
        <ul
          className="gap-6 text-md border border-border-color shadow-lg font-medium bg-bg-nav
          px-6 py-3 rounded-full  flex"
        >
          {sections.map((sec, i) => (
            <li key={i}>
              <a
                href={`#${sec.to}`}
                className="opacity-90 hover:opacity-100 hover:scale-110 transition hover:text-hover-color  block"
              >
                {sec.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/*===========
        mobile nav 👇
      ============*/}
      <nav
        className={`sm:hidden fixed ${
          !openNav && "remove-nav"
        } duration-1000 inset-0
        bg-slate-500 backdrop-blur-md bg-opacity-50 z-50`}
        onClick={() => setOpenNav(false)}
      >
        <ul
          className={`bg-secondary-color w-10/12 m-auto relative mt-8
          pt-5 px-5 rounded-xl ${
            openNav ? "animate-openNav" : "animate-closeNav"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-3xl absolute right-5 top-1 duration-500  hover:rotate-180"
            onClick={() => setOpenNav(false)}
          >
            <IoMdClose />
          </button>
          {sections.map((sec, i) => (
            <li
              key={i}
              className="py-2 px-3 border-b border-border-color font-medium"
            >
              <a href={`#${sec.to}`} onClick={() => setOpenNav(false)}>
                {sec.name}
              </a>
            </li>
          ))}
          <li className="py-2 ">
            <SocialNav />
          </li>
        </ul>
      </nav>
      {/*==========
        button show mobile nav  👇
      =============*/}
      <button
        className="bg-bg-nav rounded-full  px-2 self-stretchf text-2xl flex justify-center items-center border
        border-border-color sm:hidden active:scale-90 hover:border-hover-color transition-all"
        onClick={() => setOpenNav(true)}
        title="open navigation"
        name="open navigation"
      >
        <FaBars />
      </button>
      {/* ==========
        clock section
      ============== */}
      <div className="flex sm:order-1 items-center text-hover-color clock-font text-lg tracking-widest w-32">
        {clock}
      </div>
      {/*===========
        light/dark button 👇 
      =============*/}
      <LightDarkM />
    </header>
  );
};

export default Header;
