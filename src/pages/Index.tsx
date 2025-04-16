import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Linkedin, 
  Github, 
  PhoneCall, 
  MapPin, 
  Briefcase 
} from "lucide-react";
import Navigation from "@/components/Navigation";

const ProfilePage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 pt-20">
        <Card className="w-full max-w-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center space-y-4 pb-0">
            <img 
              src="/avatar.png" 
              alt="شخصية التعريف" 
              className="w-40 h-40 rounded-full object-cover mx-auto" 
            />
            <CardTitle className="text-2xl font-bold text-gray-800">
              بلعربي سيدأحمد
            </CardTitle>
            <p className="text-muted-foreground text-center">
              مطور برمجيات | مهندس تقنية معلومات
            </p>
          </CardHeader>
          
          <CardContent className="mt-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="text-blue-500" />
                <span>belsidahmed8@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <PhoneCall className="text-green-500" />
                <span>+213657981739</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="text-red-500" />
                <span>Tlemcen, Algerie</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Briefcase className="text-purple-500" />
                <span>مطور برمجيات</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-6">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-blue-100"
                asChild
              >
                <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-gray-100"
                asChild
              >
                <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-gray-800" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;
