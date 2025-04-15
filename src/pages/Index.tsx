
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center space-y-4 pb-0">
          <Avatar className="w-32 h-32 border-4 border-blue-500">
            <AvatarImage 
              src="/placeholder.svg" 
              alt="شخصية التعريف" 
              className="object-cover"
            />
            <AvatarFallback>م</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-gray-800">
            محمد أحمد
          </CardTitle>
          <p className="text-muted-foreground text-center">
            مطور برمجيات | مهندس تقنية معلومات
          </p>
        </CardHeader>
        
        <CardContent className="mt-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Mail className="text-blue-500" />
              <span>mohammed.ahmed@example.com</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <PhoneCall className="text-green-500" />
              <span>+٩٦٦ ٥٥ ٥٥٥ ٥٥٥٥</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="text-red-500" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Briefcase className="text-purple-500" />
              <span>مطور برمجيات</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-6">
            <Button variant="outline" size="icon" className="hover:bg-blue-100">
              <Linkedin className="h-5 w-5 text-blue-600" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-gray-100">
              <Github className="h-5 w-5 text-gray-800" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
