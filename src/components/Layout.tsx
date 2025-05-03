
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>{`
        .group:hover .group-hover\\:visible {
          visibility: visible;
        }
        .group-hover\\/submenu:hover .group-hover\\/submenu\\:visible {
          visibility: visible;
        }
      `}</style>
      <Navbar />
      <main className="flex-grow pt-[104px] md:pt-[116px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
