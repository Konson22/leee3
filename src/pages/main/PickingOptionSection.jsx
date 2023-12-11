import { FaShoppingBag, FaTruckMoving } from "react-icons/fa";

export default function PickingOptionSection() {
  return (
    <div className="text-center px-4 mb-8">
      <h3 className="text-2xl">طرق الاختيار الممتعة</h3>
      <p>في leee3، نحن نفتخر بتقديم طرق اختيار ممتعة لتلبية احتياجاتكم:</p>
      <div className="mt-7">
        {deliveryData.map((option) => (
          <div className="px-8 mb-5">
            <div className="h-[100px] w-[100px] mx-auto my-0 bg-white p-3 rounded-full overflow-hidden">
              <img src={option.image} alt="" />
            </div>
            <h4 className="text-2xl font-bold">{option.title}</h4>
            <p>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const deliveryData = [
  {
    title: "الاختيار في المكان",
    text: `
          تعالوا إلى متجرنا واستمتعوا بتجربة اختيار الحلوى بأنفسكم. املؤوا أكياسكم بألوان الحلاوة وتذوقوا متعة اكتشاف النكهات المختلفة.`,
    image: process.env.PUBLIC_URL + "/images/icons/shop.png",
  },
  {
    title: "التوصيل",
    text: `
          إذا كنتم في حاجة إلى الراحة، نقدم خدمة التوصيل لتحظوا بحلوياتكم المفضلة في مكانكم المفضل.`,
    image: process.env.PUBLIC_URL + "/images/icons/delivery.png",
  },
];
