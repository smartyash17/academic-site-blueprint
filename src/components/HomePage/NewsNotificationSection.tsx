import React from "react";
import { Link } from "react-router-dom";
import { Newspaper, Bell } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  isNew: boolean;
  category: string;
  link: string;
}

interface NotificationItem {
  id: number;
  title: string;
  date: string;
  isNew: boolean;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Annual College Day Celebrations on June 15th",
    date: "May 30, 2025",
    isNew: true,
    category: "Events",
    link: "/news/annual-college-day",
  },
  {
    id: 2,
    title: "New Pharmacy Research Lab Inauguration",
    date: "May 28, 2025",
    isNew: true,
    category: "Facility",
    link: "/news/pharmacy-lab",
  },
  {
    id: 3,
    title: "MoU Signed with Community Health Centers",
    date: "May 25, 2025",
    isNew: false,
    category: "Partnership",
    link: "/news/health-center-mou",
  },
  {
    id: 4,
    title: "Students Win State-Level Medical Quiz",
    date: "May 20, 2025",
    isNew: false,
    category: "Achievement",
    link: "/news/medical-quiz-winners",
  },
];

const notificationItems: NotificationItem[] = [
  {
    id: 1,
    title: "Last date for scholarship applications extended to June 10th",
    date: "May 29, 2025",
    isNew: true,
    link: "/notifications/scholarship-extension",
  },
  {
    id: 2,
    title: "Summer vacation from June 20th to July 15th",
    date: "May 27, 2025",
    isNew: true,
    link: "/notifications/summer-vacation",
  },
  {
    id: 3,
    title: "Final semester exam schedule released",
    date: "May 24, 2025",
    isNew: false,
    link: "/notifications/exam-schedule",
  },
  {
    id: 4,
    title: "Campus interview by City Hospitals on June 5th",
    date: "May 22, 2025",
    isNew: false,
    link: "/notifications/campus-interview",
  },
];

const NewsNotificationSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-college-primary mb-3">
            News & Notifications
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Stay updated with announcements, events, and achievements at our medical college.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* News Column */}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-college-primary">
              <Newspaper className="h-5 w-5" />
              News & Events
            </h3>
            <div className="space-y-4">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-semibold">
                        <Link
                          to={item.link}
                          className="hover:text-college-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </CardTitle>
                      <div className="flex gap-2 items-center">
                        <Badge variant="outline" className="text-xs bg-gray-100 text-gray-800">
                          {item.category}
                        </Badge>
                        {item.isNew && (
                          <Badge className="bg-college-secondary text-white text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-xs text-gray-500 mt-1">
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
              <div className="text-center pt-4">
                <Button variant="outline" asChild>
                  <Link to="/news" className="flex items-center gap-2">
                    View All News <Newspaper className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Notifications Column */}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-college-primary">
              <Bell className="h-5 w-5" />
              Notifications
            </h3>
            <div className="space-y-4">
              {notificationItems.map((item) => (
                <Card
                  key={item.id}
                  className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-semibold">
                        <Link
                          to={item.link}
                          className="hover:text-college-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </CardTitle>
                      {item.isNew && (
                        <Badge className="bg-college-primary text-white text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-xs text-gray-500 mt-1">
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
              <div className="text-center pt-4">
                <Button variant="outline" asChild>
                  <Link to="/notifications" className="flex items-center gap-2">
                    View All Notifications <Bell className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNotificationSection;



































// import React from "react";
// import { Link } from "react-router-dom";
// import { Newspaper, Bell } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// interface NewsItem {
//   id: number;
//   title: string;
//   date: string;
//   isNew: boolean;
//   category: string;
//   link: string;
// }

// interface NotificationItem {
//   id: number;
//   title: string;
//   date: string;
//   isNew: boolean;
//   link: string;
// }

// const newsItems: NewsItem[] = [
//   {
//     id: 1,
//     title: "Annual College Day Celebrations on June 15th",
//     date: "May 30, 2025",
//     isNew: true,
//     category: "Events",
//     link: "/news/annual-college-day",
//   },
//   {
//     id: 2,
//     title: "New Pharmacy Research Lab Inauguration",
//     date: "May 28, 2025",
//     isNew: true,
//     category: "Facility",
//     link: "/news/pharmacy-lab",
//   },
//   {
//     id: 3,
//     title: "MoU Signed with Community Health Centers",
//     date: "May 25, 2025",
//     isNew: false,
//     category: "Partnership",
//     link: "/news/health-center-mou",
//   },
//   {
//     id: 4,
//     title: "Students Win State-Level Medical Quiz",
//     date: "May 20, 2025",
//     isNew: false,
//     category: "Achievement",
//     link: "/news/medical-quiz-winners",
//   },
// ];

// const notificationItems: NotificationItem[] = [
//   {
//     id: 1,
//     title: "Last date for scholarship applications extended to June 10th",
//     date: "May 29, 2025",
//     isNew: true,
//     link: "/notifications/scholarship-extension",
//   },
//   {
//     id: 2,
//     title: "Summer vacation from June 20th to July 15th",
//     date: "May 27, 2025",
//     isNew: true,
//     link: "/notifications/summer-vacation",
//   },
//   {
//     id: 3,
//     title: "Final semester exam schedule released",
//     date: "May 24, 2025",
//     isNew: false,
//     link: "/notifications/exam-schedule",
//   },
//   {
//     id: 4,
//     title: "Campus interview by City Hospitals on June 5th",
//     date: "May 22, 2025",
//     isNew: false,
//     link: "/notifications/campus-interview",
//   },
// ];

// const NewsNotificationSection = () => {
//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-college-primary mb-3">
//             News & Notifications
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
//             Stay updated with the latest announcements, achievements, and events from our medical college.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <Tabs defaultValue="news" className="w-full">
//             <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg mb-8">
//               <TabsTrigger
//                 value="news"
//                 className="flex items-center justify-center gap-2 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow text-sm font-medium"
//               >
//                 <Newspaper className="w-4 h-4" /> News & Events
//               </TabsTrigger>
//               <TabsTrigger
//                 value="notifications"
//                 className="flex items-center justify-center gap-2 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow text-sm font-medium"
//               >
//                 <Bell className="w-4 h-4" /> Notifications
//               </TabsTrigger>
//             </TabsList>

//             {/* News Content */}
//             <TabsContent value="news" className="space-y-4">
//               {newsItems.map((item) => (
//                 <Card
//                   key={item.id}
//                   className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
//                 >
//                   <CardHeader className="p-4 pb-2">
//                     <div className="flex justify-between items-start">
//                       <CardTitle className="text-base font-semibold">
//                         <Link
//                           to={item.link}
//                           className="hover:text-college-primary transition-colors"
//                         >
//                           {item.title}
//                         </Link>
//                       </CardTitle>
//                       <div className="flex gap-2 items-center">
//                         <Badge variant="outline" className="text-xs bg-gray-100 text-gray-800">
//                           {item.category}
//                         </Badge>
//                         {item.isNew && (
//                           <Badge className="bg-college-secondary text-white text-xs">
//                             New
//                           </Badge>
//                         )}
//                       </div>
//                     </div>
//                     <CardDescription className="text-xs text-gray-500 mt-1">
//                       {item.date}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}

//               <div className="text-center pt-4">
//                 <Button variant="outline" asChild>
//                   <Link to="/news" className="flex items-center gap-2">
//                     View All News <Newspaper className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </TabsContent>

//             {/* Notification Content */}
//             <TabsContent value="notifications" className="space-y-4">
//               {notificationItems.map((item) => (
//                 <Card
//                   key={item.id}
//                   className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
//                 >
//                   <CardHeader className="p-4 pb-2">
//                     <div className="flex justify-between items-start">
//                       <CardTitle className="text-base font-semibold">
//                         <Link
//                           to={item.link}
//                           className="hover:text-college-primary transition-colors"
//                         >
//                           {item.title}
//                         </Link>
//                       </CardTitle>
//                       {item.isNew && (
//                         <Badge className="bg-college-primary text-white text-xs">
//                           New
//                         </Badge>
//                       )}
//                     </div>
//                     <CardDescription className="text-xs text-gray-500 mt-1">
//                       {item.date}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}

//               <div className="text-center pt-4">
//                 <Button variant="outline" asChild>
//                   <Link to="/notifications" className="flex items-center gap-2">
//                     View All Notifications <Bell className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsNotificationSection;
























// import React from "react";
// import { Link } from "react-router-dom";
// import { Newspaper, Bell } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// interface NewsItem {
//   id: number;
//   title: string;
//   date: string;
//   isNew: boolean;
//   category: string;
//   link: string;
// }

// interface NotificationItem {
//   id: number;
//   title: string;
//   date: string;
//   isNew: boolean;
//   link: string;
// }

// const newsItems: NewsItem[] = [
//   {
//     id: 1,
//     title: "Annual College Day Celebrations on June 15th",
//     date: "May 30, 2025",
//     isNew: true,
//     category: "Events",
//     link: "/news/annual-college-day",
//   },
//   {
//     id: 2,
//     title: "New Pharmacy Research Lab Inauguration",
//     date: "May 28, 2025",
//     isNew: true,
//     category: "Facility",
//     link: "/news/pharmacy-lab",
//   },
//   {
//     id: 3,
//     title: "MoU Signed with Community Health Centers",
//     date: "May 25, 2025",
//     isNew: false,
//     category: "Partnership",
//     link: "/news/health-center-mou",
//   },
//   {
//     id: 4,
//     title: "Students Win State-Level Medical Quiz",
//     date: "May 20, 2025",
//     isNew: false,
//     category: "Achievement",
//     link: "/news/medical-quiz-winners",
//   },
// ];

// const notificationItems: NotificationItem[] = [
//   {
//     id: 1,
//     title: "Last date for scholarship applications extended to June 10th",
//     date: "May 29, 2025",
//     isNew: true,
//     link: "/notifications/scholarship-extension",
//   },
//   {
//     id: 2,
//     title: "Summer vacation from June 20th to July 15th",
//     date: "May 27, 2025",
//     isNew: true,
//     link: "/notifications/summer-vacation",
//   },
//   {
//     id: 3,
//     title: "Final semester exam schedule released",
//     date: "May 24, 2025",
//     isNew: false,
//     link: "/notifications/exam-schedule",
//   },
//   {
//     id: 4,
//     title: "Campus interview by City Hospitals on June 5th",
//     date: "May 22, 2025",
//     isNew: false,
//     link: "/notifications/campus-interview",
//   },
// ];

// const NewsNotificationSection = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-college-primary mb-4">
//             News & Notifications
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Stay updated with the latest happenings, events, and important announcements from our institution.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <Tabs defaultValue="news" className="w-full">
//             <TabsList className="grid w-full grid-cols-2 mb-8">
//               <TabsTrigger value="news" className="flex items-center gap-2">
//                 <Newspaper className="h-4 w-4" /> News & Events
//               </TabsTrigger>
//               <TabsTrigger value="notifications" className="flex items-center gap-2">
//                 <Bell className="h-4 w-4" /> Notifications
//               </TabsTrigger>
//             </TabsList>
            
//             <TabsContent value="news" className="space-y-4">
//               {newsItems.map((item) => (
//                 <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
//                   <CardHeader className="p-4 pb-2">
//                     <div className="flex justify-between items-start">
//                       <CardTitle className="text-lg font-semibold">
//                         <Link to={item.link} className="hover:text-college-primary transition-colors">
//                           {item.title}
//                         </Link>
//                       </CardTitle>
//                       <div className="flex gap-2">
//                         <Badge variant="outline" className="bg-gray-100">
//                           {item.category}
//                         </Badge>
//                         {item.isNew && (
//                           <Badge className="bg-college-secondary text-white">New</Badge>
//                         )}
//                       </div>
//                     </div>
//                     <CardDescription className="text-xs text-gray-500">
//                       {item.date}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
              
//               <div className="text-center pt-4">
//                 <Button variant="outline" asChild>
//                   <Link to="/news" className="flex items-center gap-2">
//                     View All News <Newspaper className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </TabsContent>
            
//             <TabsContent value="notifications" className="space-y-4">
//               {notificationItems.map((item) => (
//                 <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
//                   <CardHeader className="p-4 pb-2">
//                     <div className="flex justify-between items-start">
//                       <CardTitle className="text-lg font-semibold">
//                         <Link to={item.link} className="hover:text-college-primary transition-colors">
//                           {item.title}
//                         </Link>
//                       </CardTitle>
//                       {item.isNew && (
//                         <Badge className="bg-college-primary text-white">New</Badge>
//                       )}
//                     </div>
//                     <CardDescription className="text-xs text-gray-500">
//                       {item.date}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
              
//               <div className="text-center pt-4">
//                 <Button variant="outline" asChild>
//                   <Link to="/notifications" className="flex items-center gap-2">
//                     View All Notifications <Bell className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsNotificationSection;
