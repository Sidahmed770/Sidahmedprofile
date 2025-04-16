
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
              <CardTitle className="text-xl md:text-2xl font-bold text-center text-gray-800">نبذة عني</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none text-sm md:text-base">
              <div className="space-y-3 md:space-y-4 text-right">
                <p className="md:text-lg">
                  أنا محمد أحمد، مطور برمجيات ومهندس تقنية معلومات مع خبرة تزيد عن ٨ سنوات في مجال تطوير التطبيقات والمواقع الإلكترونية. أعمل حاليًا في شركة تقنية رائدة في المملكة العربية السعودية.
                </p>
                
                <p>
                  حاصل على شهادة البكالوريوس في علوم الحاسب من جامعة الملك سعود، وأتميز بمهارات عالية في تطوير الواجهات الأمامية باستخدام أحدث التقنيات والأطر العملية مثل React وVue.js.
                </p>
                
                <p>
                  أؤمن بأهمية التعلم المستمر ومواكبة التطورات التقنية، وأسعى دائمًا لتحسين مهاراتي وتطوير نفسي في مجال عملي. أتمتع بروح الفريق والقدرة على العمل ضمن بيئات متعددة الثقافات.
                </p>
                
                <blockquote className="italic border-r-2 md:border-r-4 border-blue-500 pr-2 md:pr-4 my-4 md:my-6 text-sm md:text-base">
                  "أعتقد أن التكنولوجيا هي القوة التي يمكنها تغيير العالم نحو الأفضل، وهذا ما يحفزني للعمل والإبداع كل يوم."
                </blockquote>
                
                <p>
                  خارج نطاق العمل، أهتم بالقراءة وخاصة في مجالات التطوير الذاتي والذكاء الاصطناعي، وأمارس رياضة الجري وركوب الدراجات.
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
