
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image, Users, Building, Award, GraduationCap, BookOpen } from "lucide-react";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: Image },
    { id: "infrastructure", name: "Infrastructure", icon: Building },
    { id: "events", name: "Events", icon: Award },
    { id: "students", name: "Students", icon: Users },
    { id: "academics", name: "Academics", icon: GraduationCap },
    { id: "activities", name: "Activities", icon: BookOpen },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Campus Building",
      description: "Modern campus building with state-of-the-art facilities",
      image: "/lovable-uploads/photo-1493397212122-2b85dda8106b",
      category: "infrastructure",
      badge: "Infrastructure"
    },
    {
      id: 2,
      title: "Front View Campus",
      description: "Front view of our main academic building",
      image: "/lovable-uploads/photo-1487958449943-2429e8be8625",
      category: "infrastructure",
      badge: "Infrastructure"
    },
    {
      id: 3,
      title: "Award Ceremony",
      description: "Graduation ceremony with faculty and academic leadership",
      image: "/lovable-uploads/photo-1605810230434-7631ac76ec81",
      category: "events",
      badge: "Events"
    },
    {
      id: 4,
      title: "Achievement Recognition",
      description: "Award presentation to faculty members",
      image: "/lovable-uploads/photo-1466442929976-97f336a657be",
      category: "events",
      badge: "Events"
    },
    {
      id: 5,
      title: "Faculty Meeting",
      description: "Our dedicated faculty members in discussion",
      image: "/lovable-uploads/photo-1551038247-3d9af20df552",
      category: "academics",
      badge: "Academics"
    },
    {
      id: 6,
      title: "Nursing Students",
      description: "Our nursing program students in uniform",
      image: "/lovable-uploads/gallery3.jpg",
      category: "students",
      badge: "Students"
    },
    {
      id: 7,
      title: "Laboratory Facilities",
      description: "State-of-the-art laboratory equipment and facilities",
      image: "/lovable-uploads/0b7a1b09-0f0f-418a-a62c-93b60821d029.png",
      category: "infrastructure",
      badge: "Infrastructure"
    },
    {
      id: 8,
      title: "Medical Training",
      description: "Hands-on medical training sessions",
      image: "/lovable-uploads/2dd8aa3b-0d53-4414-a3b5-985908571507.png",
      category: "academics",
      badge: "Academics"
    },
    {
      id: 9,
      title: "Pharmacy Lab",
      description: "Modern pharmacy laboratory for practical training",
      image: "/lovable-uploads/30a552fc-5424-40b3-95e0-e3fefa67f587.png",
      category: "infrastructure",
      badge: "Infrastructure"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Gallery"
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-primary">
            Campus Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our campus life, events, and facilities through our comprehensive photo gallery. 
            Witness the vibrant academic environment and modern infrastructure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? "bg-college-primary hover:bg-college-primary/90" 
                    : "hover:bg-college-primary/10"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`
                      ${item.category === 'infrastructure' ? 'bg-blue-100 text-blue-800 border-blue-200' : ''}
                      ${item.category === 'events' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                      ${item.category === 'students' ? 'bg-purple-100 text-purple-800 border-purple-200' : ''}
                      ${item.category === 'academics' ? 'bg-orange-100 text-orange-800 border-orange-200' : ''}
                      ${item.category === 'activities' ? 'bg-pink-100 text-pink-800 border-pink-200' : ''}
                      font-medium
                    `}
                  >
                    {item.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-college-primary group-hover:text-college-primary/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full border-college-primary text-college-primary hover:bg-college-primary hover:text-white transition-all duration-300"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-college-primary/5 to-college-secondary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-college-primary">
            Experience Our Campus
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Want to see more? Schedule a campus visit and experience our facilities firsthand. 
            Our team will be happy to show you around.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-college-primary hover:bg-college-primary/90">
              Schedule Campus Visit
            </Button>
            <Button variant="outline" className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
