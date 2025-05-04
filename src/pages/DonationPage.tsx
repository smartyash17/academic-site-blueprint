
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { HandHeart } from "lucide-react";

const DonationPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Support Our Mission"
        breadcrumbs={[
          { label: "Donations", href: "/donate" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-college-primary flex items-center gap-2">
                <HandHeart className="h-7 w-7" /> Make a Donation
              </h2>
              <p className="text-gray-700 mb-6">
                Your generous contributions help us provide quality education, improve our facilities, 
                and offer scholarships to deserving students. Every donation makes a difference in 
                shaping the future of healthcare professionals.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-college-primary">How Your Donation Helps</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-college-secondary rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <span>Upgrading laboratory equipment for practical training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-college-secondary rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <span>Providing scholarships to meritorious and underprivileged students</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-college-secondary rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <span>Enhancing library resources with latest medical literature</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-college-secondary rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <span>Supporting research initiatives and faculty development</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Card className="w-full md:w-[400px] shadow-lg">
              <CardHeader className="bg-college-primary text-white rounded-t-lg">
                <CardTitle>Donation Form</CardTitle>
                <CardDescription className="text-gray-200">Support our institution</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label>Donation Amount</Label>
                      <RadioGroup defaultValue="1000" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="500" id="r1" />
                          <Label htmlFor="r1">₹500</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1000" id="r2" />
                          <Label htmlFor="r2">₹1,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2500" id="r3" />
                          <Label htmlFor="r3">₹2,500</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5000" id="r4" />
                          <Label htmlFor="r4">₹5,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="r5" />
                          <Label htmlFor="r5">Other Amount</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="amount">Custom Amount (₹)</Label>
                      <Input id="amount" type="number" placeholder="Enter amount" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-college-secondary hover:bg-college-primary text-white">
                  Proceed to Payment
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-college-primary">Other Ways to Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Corporate Partnerships</h4>
                <p className="text-gray-600 mb-3">
                  Become a corporate partner and help us develop industry-ready healthcare professionals.
                </p>
                <Button variant="outline" className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white">
                  Learn More
                </Button>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Equipment Donations</h4>
                <p className="text-gray-600 mb-3">
                  Donate medical equipment, books, or laboratory supplies to support practical education.
                </p>
                <Button variant="outline" className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonationPage;
