import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 p-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-xl">
            <CardHeader className="py-4 md:py-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-center text-gray-800">
                نبذة عني
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none text-sm md:text-base">
              <div className="space-y-4 text-right">
                <p className="md:text-lg">
                  أنا مطور ومبدع رقمي جزائري شغوف بالتكنولوجيا والذكاء الاصطناعي، أعمل على بناء حلول ذكية تدمج بين الابتكار وسهولة الاستخدام.
                </p>
                <p className="md:text-lg">
                  من بين مشاريعي الحالية، أطور وكيلًا ذكيًا لإنشاء مواقع إلكترونية تلقائيًا من أوامر بسيطة، باستخدام تقنيات الذكاء الاصطناعي وتحليل المحتوى.
                </p>
                <div>
                  <h3 className="font-bold">💡 اهتماماتي:</h3>
                  <ul className="list-disc pr-5 space-y-1">
                    <li>الذكاء الاصطناعي وتعلم الآلة</li>
                    <li>توليد المحتوى التلقائي (Generative AI)</li>
                    <li>تطوير الويب الذكي</li>
                    <li>الاقتصاد الرقمي والعملات المشفرة</li>
                    <li>تبسيط التعليم وتعلم اللغات (حالياً أتعلم الألمانية)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">🎯 رؤيتي:</h3>
                  <p>
                    أسعى لدمج التكنولوجيا الذكية في أدوات تُسهّل حياة المستخدمين، وتفتح آفاقاً للإبداع والعمل الرقمي. أؤمن بأن المستقبل يُبنى الآن.
                  </p>
                </div>
                <blockquote className="italic border-r-2 md:border-r-4 border-blue-500 pr-2 md:pr-4 my-4 md:my-6 text-sm md:text-base">
                  "أعتقد أن التكنولوجيا هي القوة التي يمكنها تغيير العالم نحو الأفضل، وهذا ما يحفزني للعمل والإبداع كل يوم."
                </blockquote>
                <p>
                  خارج نطاق العمل، أحب القراءة في مجالات الذكاء الاصطناعي والتطوير الذاتي..
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
