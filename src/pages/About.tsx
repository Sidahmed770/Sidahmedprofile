
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
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">نبذة عني</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none">
              <div className="space-y-4 text-right">
                <p className="text-lg">
أنا شاب جزائري طموح ومحب للتعلم والتطوير الذاتي، عندي اهتمام كبير بالتكنولوجيا الحديثة، خاصة الذكاء الاصطناعي وتطبيقاته الواقعية. من بين المشاريع اللي نخدم عليها حاليًا، هو تطوير وكيل ذكي (AI Agent) يقدر يولّد مواقع إلكترونية بطريقة ذكية ومباشرة من أوامر المستخدم، بالاعتماد على البحث التلقائي على الصور، الأفكار، والمحتوى الملائم — مشروع يجمع بين الإبداع، الأتمتة، وفهم نية المستخدم.

📈 اهتماماتي الأساسية:

    الذكاء الاصطناعي وتعلم الآلة

    الأسواق العالمية والاقتصاد الرقمي، خصوصًا مجال العملات الرقمية (الكريبتو)

    تطوير تطبيقات ويب ذكية وفعّالة

    تعلم اللغات (حالياً مركز على اللغة الألمانية)

🛠 مهاراتي:

    فهم عميق لكيفية استخدام أدوات الذكاء الاصطناعي في مشاريع عملية

    تخطيط وتصميم واجهات مستخدم مبنية على الذكاء الاصطناعي

    البحث والتحليل في السوق الرقمية والاقتصاد العالمي

    القدرة على تبسيط المفاهيم التقنية وتقديمها بشكل مفهوم وسلس

🎯 طموحاتي: نسعى باش نطوّر أدوات ذكية تساعد الناس على حل مشاكلهم الرقمية بدون ما يحتاجوا خبرة تقنية. نحب نبني نظام يقدر "يفهمك ويخدمك"، خاصة في مجالات مثل إنشاء المحتوى، تصميم المواقع، وخدمة الزبائن الذكية.
                </p>
                
                <blockquote className="italic border-r-4 border-blue-500 pr-4 my-6">
                  "أعتقد أن التكنولوجيا هي القوة التي يمكنها تغيير العالم نحو الأفضل، وهذا ما يحفزني للعمل والإبداع كل يوم."
                </blockquote>
                
                <p>
                  خارج نطاق العمل، أهتم بالقراءة وخاصة في مجالات التطوير الذاتي والذكاء الاصطناعي.
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
