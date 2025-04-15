
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'نظام إدارة المهام',
      description: 'تطبيق ويب متكامل لإدارة المهام والمشاريع، مع إمكانية تتبع الوقت وإدارة الفريق.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'منصة تعليمية',
      description: 'منصة تعليمية إلكترونية تتيح للمدرسين إنشاء وإدارة الدورات التدريبية وللطلاب الوصول للمحتوى التعليمي.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'تطبيق تحليل البيانات',
      description: 'تطبيق يستخدم الذكاء الاصطناعي لتحليل البيانات وعرض إحصائيات ورسوم بيانية متقدمة للمستخدمين.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=60',
      technologies: ['Python', 'React', 'TensorFlow', 'D3.js'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];
  
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 p-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">مشاريعي</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Github size={16} />
                    <span>المصدر</span>
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ExternalLink size={16} />
                    <span>عرض</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
