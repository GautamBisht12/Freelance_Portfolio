import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, Globe, ExternalLink } from "lucide-react";

const projects = {
  all: [
    {
      title: "E-Commerce Platform",
      shortDesc: "Full-stack e-commerce solution with advanced features",
      category: "mern",
      fullDesc:
        "A comprehensive e-commerce platform built with MERN stack featuring real-time inventory management, payment processing, and admin dashboard.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      github: "https://github.com",
      live: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
    {
      title: "Task Management App",
      shortDesc: "Collaborative task management solution",
      category: "react",
      fullDesc:
        "Real-time task management application with team collaboration features, drag-and-drop interface, and progress tracking.",
      tech: ["React", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
    },
    {
      title: "Weather Dashboard",
      shortDesc: "Dynamic weather tracking application",
      category: "javascript",
      fullDesc:
        "Interactive weather dashboard with location-based forecasts, historical data, and weather alerts.",
      tech: ["JavaScript", "Weather API", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
    },
  ],
  javascript: [
    {
      title: "Weather Dashboard",
      shortDesc: "Dynamic weather tracking application",
      category: "javascript",
      fullDesc:
        "Interactive weather dashboard with location-based forecasts, historical data, and weather alerts.",
      tech: ["JavaScript", "Weather API", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
    },
    {
      title: "Budget Tracker",
      shortDesc: "Personal finance management tool",
      category: "javascript",
      fullDesc:
        "A vanilla JavaScript application for tracking personal expenses and income with data visualization.",
      tech: ["JavaScript", "LocalStorage", "D3.js"],
      github: "https://github.com",
      live: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
    },
  ],
  react: [
    {
      title: "Movie DB",
      shortDesc: "Movie Database with TMDb API",
      category: "react",
      fullDesc:
        "A React-based movie database application with search functionality and detailed movie information.",
      tech: ["React", "TMDb API", "Material-UI", "Axios"],
      github: "https://github.com/GautamBisht12/MovieDB-React-App",
      live: "https://movie-db-pro.netlify.app/",
      image: "assets/Moviedb.png",
    },
    {
      title: "Youtube UI Clone",
      shortDesc: "Youtube UI Clone using YouTube v3 API (RapidAPI)",
      category: "react",
      fullDesc:
        "A React-based YouTube UI clone with search functionality and video playback.",
      tech: ["React", "Material UI", "Axios", "RapidAPI"],
      github: "https://github.com/GautamBisht12/React-Youtube-clone",
      live: "https://my-tube-youtube-clone.netlify.app/",
      image: "assets/youtube-clone.png",
    },
  ],
  mern: [
    {
      title: "Chat Application",
      shortDesc: "MERN Full Stack Chat Application",
      category: "mern",
      fullDesc:
        "A full-stack chat application built with MERN stack, featuring real-time messaging and user authentication.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Zustand"],
      github: "https://github.com",
      live: "https://mern-chat-app-6nc2.onrender.com/",
      image: "assets/chat.png",
    },
    {
      title: "Learning Management System",
      shortDesc: "Educational platform for online courses",
      category: "mern",
      fullDesc:
        "A full-featured LMS with course creation, student management, and progress tracking capabilities.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "AWS"],
      github: "https://github.com",
      live: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    },
  ],
  wordpress: [
    {
      title: "Upsell Wholesale",
      shortDesc: "Wholesale Distributors",
      category: "wordpress",
      fullDesc:
        "A Upsell Wholesale website built with WordPress and WooCommerce, featuring a custom theme .",
      tech: ["WordPress", "WooCommerce", "Elementor"],
      github: "",
      isGithub: false,
      live: "https://upsellwholesale.com/",
      image: "assets/Upsellwholesale.png",
    },
    {
      title: "Upsell Wholesale USA",
      shortDesc: "Wholesale Distributors in USA",
      category: "wordpress",
      fullDesc:
        "A Upsell Wholesale website built with WordPress and Elementor using a theme.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "AWS"],
      github: "https://github.com",
      live: "https://upsellwholesaleusa.com/",
      image: "assets/image.png",
    },
  ],
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    fullDesc: "",
    tech: [],
    github: "",
    live: "",
    image: "",
  });
  return (
    <>
      <section className="py-20 px-4 bg-black/30" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-orange-500 text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="javascript"
                className="data-[state=active]:bg-yellow-500 text-white"
              >
                JavaScript
              </TabsTrigger>
              <TabsTrigger
                value="react"
                className="data-[state=active]:bg-blue-500 text-white"
              >
                React
              </TabsTrigger>
              <TabsTrigger
                value="mern"
                className="data-[state=active]:bg-green-500 text-white"
              >
                MERN Stack
              </TabsTrigger>
              <TabsTrigger
                value="wordpress"
                className="data-[state=active]:bg-green-500 text-white"
              >
                Wordpress
              </TabsTrigger>
            </TabsList>
            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectList.map((project, index) => (
                    <Card
                      key={index}
                      className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zinc-300">{project.shortDesc}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProject(project)}
                          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Details
                        </Button>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <Globe className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      {/* Project Details Modal */}
      <Dialog
        open={!!selectedProject.title}
        onOpenChange={() =>
          setSelectedProject({
            title: "",
            fullDesc: "",
            tech: [],
            github: "",
            live: "",
            image: "",
          })
        }
      >
        <DialogContent className="bg-zinc-900/95 backdrop-blur-xl border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-zinc-300">{selectedProject?.fullDesc}</p>
              <div>
                <h4 className="font-semibold mb-2 text-white">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
