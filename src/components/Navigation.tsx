
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Code, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">SID-AHMED</h1>
        <div className="flex space-x-4 rtl:space-x-reverse">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>الرئيسية</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/about" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>نبذة عني</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/skills" className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>المهارات</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/projects" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>المشاريع</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
