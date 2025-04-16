
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
أنا مطور ومبدع رقمي جزائري شغوف بالتكنولوجيا والذكاء الاصطناعي، أعمل على بناء حلول ذكية تدمج بين الابتكار وسهولة الاستخدام. أؤمن بأن الذكاء الاصطناعي ليس مجرد تقنية، بل أداة قوية لتمكين الأفراد وتبسيط التعقيدات.

من بين مشاريعي الحالية، أطور وكيلًا ذكيًا قادرًا على إنشاء مواقع إلكترونية تلقائيًا انطلاقًا من أوامر بسيطة، من خلال تحليل المحتوى، البحث عن الصور والأفكار المناسبة، وتوليد صفحات متكاملة بأسلوب احترافي. الهدف هو خلق تجربة سلسة، حيث تتحول الفكرة إلى موقع كامل في دقائق، دون الحاجة لأي معرفة تقنية.
💡 اهتماماتي

    الذكاء الاصطناعي وتعلم الآلة

    توليد المحتوى التلقائي (Generative AI)

    تطوير الويب الذكي

    الاقتصاد الرقمي والعملات المشفرة

    تبسيط التعليم وتعلم اللغات (حالياً أتعلم الألمانية بطريقة عصرية وبالدارجة الجزائرية)

🎯 رؤيتي

أسعى لدمج التكنولوجيا الذكية في أدوات يومية تُسهّل حياة المستخدمين، وتفتح لهم آفاقًا جديدة للإبداع والعمل الرقمي. أؤمن بأن المستقبل يُبنى الآن، وأطمح لأكون من بين صُنّاعه.                </p>
                
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
