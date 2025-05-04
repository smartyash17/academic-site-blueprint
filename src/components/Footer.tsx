
import React from "react";
import { Link } from "react-router-dom";
import { HandHeart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-college-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">College of Pharmacy & Nursing</h3>
            <p className="mb-4 text-gray-300">
              Providing quality education in Pharmacy, Nursing, and Paramedical sciences since 2005.
            </p>
            <p className="text-sm text-gray-300">
              <strong>Address:</strong> 123 Education Street, Academic City, State 12345
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculties" className="text-gray-300 hover:text-white transition">
                  Faculties
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-white transition">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/committees" className="text-gray-300 hover:text-white transition">
                  Committees
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition flex items-center gap-1">
                  <HandHeart className="h-4 w-4" /> Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/pharmacy" className="text-gray-300 hover:text-white transition">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/courses/nursing" className="text-gray-300 hover:text-white transition">
                  Nursing
                </Link>
              </li>
              <li>
                <Link to="/courses/paramedical" className="text-gray-300 hover:text-white transition">
                  Paramedical
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: +1-234-567-8901</li>
              <li>Email: info@college.edu</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-college-secondary">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-college-secondary">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-college-secondary">
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} College of Pharmacy & Nursing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
