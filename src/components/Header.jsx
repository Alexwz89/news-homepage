import React from "react";
import logo from "../assets/images/logo.svg";
import icon_menu from "../assets/images/icon-menu.svg";
import icon_close from "../assets/images/icon-menu-close.svg";
import clsx from "clsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="relative flex justify-between items-center">
      <div aria-label="logo image">
        <img src={logo} alt="Logo" />
      </div>
      <nav aria-label="main navaigation">
        {isMenuOpen && <div className="fixed inset-0 bg-black/70 z-2 md:hidden"></div>}
        <button className="md:hidden cursor-pointer z-10 relative " onClick={toggleMenu}>
          {!isMenuOpen ? (
            <img src={icon_menu} alt="Menu" className="md:hidden z-10" />
          ) : (
            <img src={icon_close} alt="Close" className="md:hidden z-10" />
          )}
        </button>
        <ul
          className={clsx("md:flex md:gap-10 text-base text-[#5E607A]", {
            hidden: !isMenuOpen,
            "absolute z-5 -top-4 -right-4 w-2/3 h-screen bg-white pl-6 flex flex-col gap-6 justify-center": isMenuOpen,
          })}
        >
          <li className="hover:text-soft-red">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-soft-red">
            <a href="#">New</a>
          </li>
          <li className="hover:text-soft-red">
            <a href="#">Popular</a>
          </li>
          <li className="hover:text-soft-red">
            <a href="#">Trending</a>
          </li>
          <li className="hover:text-soft-red">
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
