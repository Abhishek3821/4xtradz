import React, { useState } from "react";
import { navItems } from "../assets/assets";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../assets/xz15.webp"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-30"
              />
            </NavLink>

            {/* ================= DESKTOP MENU ================= */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setHoveredSubItem(null);
                  }}
                >
                  {/* MAIN LABEL (CLICKABLE FIX) */}
                  <NavLink
                    to={item.link}
                    className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-black uppercase"
                  >
                    {item.label}
                    {item.subItems && <IoIosArrowDown size={14} />}
                  </NavLink>

                  {/* FIRST LEVEL DROPDOWN */}
                  {hoveredItem === index && item.subItems && (
                    <div
                      className={`absolute z-50 min-w-max bg-white rounded-2xl pb-4 pt-2 shadow-lg border ${
                        index >= navItems.length - 2 ? "right-0" : "left-0"
                      }`}
                      style={{ top: "100%" }}
                    >
                      {item.subItems.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredSubItem(subIndex)}
                          onMouseLeave={() => setHoveredSubItem(null)}
                        >
                          <NavLink
                            to={sub.link}
                            className={({ isActive }) =>
                              `px-8 py-2 text-[15px] whitespace-nowrap flex justify-between items-center ${
                                isActive
                                  ? "text-[#0066ff]"
                                  : "hover:bg-gray-100"
                              }`
                            }
                          >
                            {sub.label}
                            {sub.subSubItems && (
                              <IoIosArrowDown size={12} />
                            )}
                          </NavLink>

                          {/* SECOND LEVEL DROPDOWN */}
                          {hoveredSubItem === subIndex &&
                            sub.subSubItems && (
                              <div className="absolute top-0 left-full bg-white shadow-lg border rounded-xl min-w-max">
                                {sub.subSubItems.map((subSub, i) => (
                                  <NavLink
                                    key={i}
                                    to={subSub.link}
                                    className="block px-8 py-2 text-[15px] hover:bg-gray-100 whitespace-nowrap"
                                  >
                                    {subSub.label}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ================= RIGHT ACTIONS ================= */}
            <div className="hidden lg:flex items-center gap-6">
              <NavLink
                to="/login"
                className="text-[15px] font-medium text-gray-800 hover:text-black"
              >
                Login →
              </NavLink>

              <NavLink
                to="/register"
                className="bg-[#5B6CFF] text-white px-5 py-2.5 rounded-lg text-[15px] font-medium hover:bg-[#4a5bff] transition"
              >
                Get Started ↗
              </NavLink>
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-lg">Menu</span>
            <HiX size={26} onClick={() => setMobileMenuOpen(false)} />
          </div>

          {navItems.map((item, index) => (
            <div key={index} className="border-b py-3">
              <div
                className="flex justify-between items-center font-medium"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <NavLink
                  to={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>

                {item.subItems && (
                  <IoIosArrowDown
                    className={`transition ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {expandedIndex === index && item.subItems && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  {item.subItems.map((sub, i) => (
                    <NavLink
                      key={i}
                      to={sub.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block"
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-6 space-y-3">
            <NavLink
              to="/login"
              className="block text-center border rounded-lg py-3 font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="block text-center bg-[#5B6CFF] text-white rounded-lg py-3 font-medium"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
