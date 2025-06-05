
import React from "react";
import { Link } from "react-router-dom";
import { HandHeart, MapPin, QrCode, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  // Sample coordinates for the college location (replace with actual coordinates)
  const collegeLocation = {
    lat: 28.6139,
    lng: 77.2090,
    address: "123 Education Street, Academic City, State 12345"
  };

  const googleMapsUrl = `https://www.google.com/maps?q=${collegeLocation.lat},${collegeLocation.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${collegeLocation.lat},${collegeLocation.lng}`;

  return (
    <footer className="bg-college-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Campus Location Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-college-secondary" />
            <h2 className="text-2xl font-bold text-white">Our Campus Location</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Google Maps Embed */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="relative h-64 lg:h-80">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5433!2d${collegeLocation.lng}!3d${collegeLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-4 right-4">
                      <Button
                        asChild
                        className="bg-white text-college-primary hover:bg-gray-100 shadow-lg"
                      >
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View on Google Maps
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* QR Code and Directions */}
            <div className="flex flex-col items-center justify-center">
              <Card className="bg-white p-6 shadow-xl border-0 text-center">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="w-32 h-32 mx-auto bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                      <QrCode className="h-24 w-24 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-college-primary mb-2">
                      Quick Directions
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Scan to get directions on your mobile device
                    </p>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-college-primary hover:bg-college-dark"
                  >
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 justify-center"
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">College of Pharmacy & Nursing</h3>
            <p className="mb-4 text-gray-300">
              Providing quality education in Pharmacy, Nursing, and Paramedical sciences since 2005.
            </p>
            <p className="text-sm text-gray-300">
              <strong>Address:</strong> {collegeLocation.address}
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
                  <a href="#" className="hover:text-college-secondary transition">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-college-secondary transition">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-college-secondary transition">
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
