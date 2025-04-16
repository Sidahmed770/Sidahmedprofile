import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Code, Briefcase, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useIsMobile();
  
  const NavLinks = () => (
    <>
      <Button variant="ghost" size={isMobile ? "default" : "sm"} asChild className="w-full md:w-auto justify-start md:justify-center">
        <Link to="/" className="flex items-center gap-1">
          <Home className="h-4 w-4" />
          <span>الرئيسية</span>
        </Link>
      </Button>
      <Button variant="ghost" size={isMobile ? "default" : "sm"} asChild className="w-full md:w-auto justify-start md:justify-center">
        <Link to="/about" className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>نبذة عني</span>
        </Link>
      </Button>
      <Button variant="ghost" size={isMobile ? "default" : "sm"} asChild className="w-full md:w-auto justify-start md:justify-center">
        <Link to="/skills" className="flex items-center gap-1">
          <Code className="h-4 w-4" />
          <span>المهارات</span>
        </Link>
      </Button>
      <Button variant="ghost" size={isMobile ? "default" : "sm"} asChild className="w-full md:w-auto justify-start md:justify-center">
        <Link to="/projects" className="flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          <span>المشاريع</span>
        </Link>
      </Button>
    </>
  );

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">ٍSIDX.Dev</h1>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="py-4">
                <div className="flex flex-col space-y-3 rtl:space-y-reverse">
                  <NavLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
