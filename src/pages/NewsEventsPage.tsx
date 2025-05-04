
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Newspaper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  isNew: boolean;
  category: string;
  summary: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Annual College Day Celebrations on June 15th",
    date: "May 30, 2025",
    isNew: true,
    category: "Events",
    summary: "Join us for the annual college day celebrations featuring cultural performances, awards ceremony, and more.",
    link: "/news/annual-college-day",
  },
  {
    id: 2,
    title: "New Pharmacy Research Lab Inauguration",
    date: "May 28, 2025",
    isNew: true,
    category: "Facility",
    summary: "State-of-the-art pharmacy research laboratory to be inaugurated by the Health Minister next week.",
    link: "/news/pharmacy-lab",
  },
  {
    id: 3,
    title: "MoU Signed with Community Health Centers",
    date: "May 25, 2025",
    isNew: false,
    category: "Partnership",
    summary: "Our institution has signed a Memorandum of Understanding with local Community Health Centers for internships and training.",
    link: "/news/health-center-mou",
  },
  {
    id: 4,
    title: "Students Win State-Level Medical Quiz",
    date: "May 20, 2025",
    isNew: false,
    category: "Achievement",
    summary: "Our pharmacy students secured first place in the state-level medical knowledge competition held at Central University.",
    link: "/news/medical-quiz-winners",
  },
  {
    id: 5,
    title: "New Nursing Course Approved by Regulatory Body",
    date: "May 18, 2025",
    isNew: false,
    category: "Academic",
    summary: "Our institution received approval to start a new advanced nursing program from the next academic year.",
    link: "/news/new-nursing-course",
  },
  {
    id: 6,
    title: "Health Camp Organized in Rural Areas",
    date: "May 15, 2025",
    isNew: false,
    category: "Community Service",
    summary: "Our students and faculty organized a successful health camp serving over 500 patients in nearby rural villages.",
    link: "/news/health-camp",
  },
  {
    id: 7,
    title: "Faculty Development Program Completed",
    date: "May 12, 2025",
    isNew: false,
    category: "Faculty",
    summary: "Week-long faculty development program on modern teaching methodologies successfully concluded.",
    link: "/news/faculty-development",
  },
  {
    id: 8,
    title: "Library Extended with New Digital Resources",
    date: "May 8, 2025",
    isNew: false,
    category: "Facility",
    summary: "Our institution's library now provides access to additional international medical journals and digital resources.",
    link: "/news/library-resources",
  }
];

const NewsEventsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="News & Events"
        breadcrumbs={[
          { label: "News & Events", href: "/news" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Newspaper className="h-6 w-6 text-college-primary mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-college-primary">
            Latest Updates
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="p-5 pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold">
                    <Link to={item.link} className="hover:text-college-primary transition-colors">
                      {item.title}
                    </Link>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-gray-100">
                      {item.category}
                    </Badge>
                    {item.isNew && (
                      <Badge className="bg-college-secondary text-white">New</Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="text-sm text-gray-500">
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="text-gray-700">{item.summary}</p>
                <Link 
                  to={item.link} 
                  className="mt-3 inline-block text-sm font-medium text-college-primary hover:underline"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsEventsPage;
