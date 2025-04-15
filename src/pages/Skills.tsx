
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Vue.js', level: 75 },
    { name: 'SQL / NoSQL', level: 70 },
    { name: 'AWS / Azure', level: 65 },
  ];
  
  const softSkills = [
    { name: 'العمل ضمن فريق', level: 95 },
    { name: 'حل المشكلات', level: 90 },
    { name: 'التواصل', level: 85 },
    { name: 'إدارة الوقت', level: 80 },
    { name: 'القيادة', level: 75 },
  ];
  
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-800">المهارات التقنية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Soft Skills */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-800">المهارات الشخصية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {softSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
