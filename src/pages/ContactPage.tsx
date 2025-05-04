
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              We're here to answer any questions you may have about our programs, admission process, or campus facilities. Feel free to reach out using the contact form below or the contact information provided.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-college-primary focus:border-college-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-college-primary focus:border-college-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-college-primary focus:border-college-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-college-primary focus:border-college-primary"
                    placeholder="Enter subject"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-college-primary focus:border-college-primary"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <Button type="submit" className="bg-college-primary hover:bg-college-primary/90">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-college-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-college-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-700">123 College Road, Education District</p>
                    <p className="text-gray-700">Bhubaneswar, Odisha - 751001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-college-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-700">+91 1234567890</p>
                    <p className="text-gray-700">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-college-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-700">info@saradadeviinstitutions.edu.in</p>
                    <p className="text-gray-700">admissions@saradadeviinstitutions.edu.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-college-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-college-primary/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-college-primary">How to Reach Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>From Railway Station: 5 km (15 minutes by car)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>From Airport: 12 km (30 minutes by car)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>Public Bus Routes: 101, 203, 304</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>College Shuttle: Available from major locations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <div className="w-full h-80 bg-gray-200 rounded-lg">
            {/* Map will be embedded here - placeholder for now */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Google Map will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
