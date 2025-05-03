
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const [openSubSubMenus, setOpenSubSubMenus] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const toggleSubMenu = (submenu: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  const toggleSubSubMenu = (subsubmenu: string) => {
    setOpenSubSubMenus((prev) => ({
      ...prev,
      [subsubmenu]: !prev[subsubmenu],
    }));
  };

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "About Us",
      path: "/about",
      submenu: [
        { name: "Chairman's Desk", path: "/about/chairmans-desk" },
        { name: "Board Members", path: "/about/board-members" },
        { name: "Service Rules", path: "/about/service-rules" },
      ],
    },
    {
      name: "Courses",
      path: "/courses",
      submenu: [
        { name: "Eligibility Criteria", path: "/courses/eligibility" },
        {
          name: "Pharmacy",
          path: "/courses/pharmacy",
          submenu: [
            { name: "D.Pharm.", path: "/courses/pharmacy/dpharm" },
            { name: "B.Pharm.", path: "/courses/pharmacy/bpharm" },
          ],
        },
        {
          name: "Nursing",
          path: "/courses/nursing",
          submenu: [
            { name: "ANM", path: "/courses/nursing/anm" },
            { name: "GNM", path: "/courses/nursing/gnm" },
            { name: "B.Sc. Nursing", path: "/courses/nursing/bsc" },
            { name: "P.B. B.Sc. Nursing", path: "/courses/nursing/pbsc" },
            { name: "M.Sc. Nursing", path: "/courses/nursing/msc" },
          ],
        },
        {
          name: "Paramedical",
          path: "/courses/paramedical",
          submenu: [{ name: "DMLT", path: "/courses/paramedical/dmlt" }],
        },
      ],
    },
    {
      name: "Syllabus",
      path: "/syllabus",
      submenu: [
        { name: "Pharmacy", path: "/syllabus/pharmacy" },
        { name: "Nursing", path: "/syllabus/nursing" },
        { name: "Paramedical", path: "/syllabus/paramedical" },
      ],
    },
    {
      name: "Fees Structure",
      path: "/fees",
      submenu: [
        { name: "Pharmacy", path: "/fees/pharmacy" },
        { name: "Nursing", path: "/fees/nursing" },
        { name: "Paramedical", path: "/fees/paramedical" },
      ],
    },
    {
      name: "Question Banks",
      path: "/question-banks",
      submenu: [
        { name: "Pharmacy", path: "/question-banks/pharmacy" },
        { name: "Nursing", path: "/question-banks/nursing" },
        { name: "DMLT", path: "/question-banks/dmlt" },
      ],
    },
    { name: "Committees", path: "/committees" },
    { name: "Faculties", path: "/faculties" },
    {
      name: "Facilities",
      path: "/facilities",
      submenu: [
        { name: "Laboratory", path: "/facilities/laboratory" },
        { name: "Equipment", path: "/facilities/equipment" },
        { name: "Library", path: "/facilities/library" },
        { name: "Transportation", path: "/facilities/transportation" },
        { name: "Hostel", path: "/facilities/hostel" },
      ],
    },
  ];

  return (
    <>
      <header className={cn(
        "fixed w-full bg-white top-0 z-40 transition-all duration-300",
        isScrolled ? "shadow-md" : ""
      )}>
        <div className="bg-college-primary py-2 md:py-3">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-white text-xs md:text-sm">
              <span className="mr-4">Email: info@college.edu</span>
              <span>Phone: +1-234-567-8901</span>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="bg-white text-college-primary hover:bg-college-secondary hover:text-white">Apply Now</Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-college-primary font-bold text-xl md:text-2xl">College of Pharmacy & Nursing</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={cn(
                  "nav-dropdown relative px-3 py-2 rounded-md font-medium text-sm hover:bg-gray-100"
                )}
              >
                <Link
                  to={item.path}
                  className="flex items-center text-gray-800"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
                  )}
                </Link>
                {item.submenu && (
                  <div className="nav-dropdown-content mt-1">
                    {item.submenu.map((subItem) => (
                      <div
                        key={subItem.name}
                        className="nav-dropdown-item relative"
                      >
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 whitespace-nowrap flex justify-between items-center"
                        >
                          {subItem.name}
                          {subItem.submenu && (
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          )}
                        </Link>
                        {subItem.submenu && (
                          <div className="submenu">
                            {subItem.submenu.map((subsubItem) => (
                              <Link
                                key={subsubItem.name}
                                to={subsubItem.path}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                              >
                                {subsubItem.name}
                              </Link>
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

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-800 hover:text-college-primary"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      ></div>
      <div className={`mobile-nav-menu ${mobileMenuOpen ? "open" : ""} p-4`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-college-primary">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-college-primary"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100">
              {item.submenu ? (
                <div
                  className={`${
                    openSubMenus[item.name] ? "mobile-submenu-open" : ""
                  }`}
                >
                  <div
                    className="flex justify-between items-center p-3 text-gray-800 cursor-pointer"
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transform transition-transform ${
                        openSubMenus[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div className="nav-dropdown-content">
                    {item.submenu.map((subItem) => (
                      <div
                        key={subItem.name}
                        className={`border-t border-gray-100 ${
                          openSubSubMenus[subItem.name]
                            ? "mobile-subsubmenu-open"
                            : ""
                        }`}
                      >
                        {subItem.submenu ? (
                          <>
                            <div
                              className="flex justify-between items-center p-3 pl-6 text-gray-800 cursor-pointer"
                              onClick={() => toggleSubSubMenu(subItem.name)}
                            >
                              <span>{subItem.name}</span>
                              <ChevronDown
                                className={`h-4 w-4 text-gray-500 transform transition-transform ${
                                  openSubSubMenus[subItem.name]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </div>
                            <div className="submenu">
                              {subItem.submenu.map((subsubItem) => (
                                <Link
                                  key={subsubItem.name}
                                  to={subsubItem.path}
                                  className="block p-3 pl-10 text-gray-800 border-t border-gray-100"
                                  onClick={toggleMobileMenu}
                                >
                                  {subsubItem.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={subItem.path}
                            className="block p-3 pl-6 text-gray-800"
                            onClick={toggleMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="block p-3 text-gray-800"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-college-primary hover:bg-college-dark text-white">Apply Now</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
