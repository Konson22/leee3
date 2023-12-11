export default function ServiceSection() {
  return (
    <div className="px-4 mb-8">
      <h3 className="text-2xl text-center">خدماتنا وميزاتنا</h3>
      <div className="mt-7">
        {data.map((option) => (
          <div className="flex p-4 mb-5">
            <div className="flex-1 text-right">
              <h4 className="text-xl font-bold">{option.title}</h4>
              <p>{option.text}</p>
            </div>
            <div className="h-16 w-16 bg-white p-2 rounded-full overflow-hidden ml-4">
              <img src={option.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "تشكيلة واسعة",
    text: `
        تضم متجرنا مجموعة متنوعة من الحلوى اللذيذة التي تلبي جميع الأذواق والتفضيلات.`,
    image: process.env.PUBLIC_URL + "/images/icons/store.png",
  },
  {
    title: "توصيل سريع",
    text: `خدمة التوصيل الفعّالة لتوصيل حلوياتكم المفضلة إلى باب منزلكم.`,
    image: process.env.PUBLIC_URL + "/images/icons/about.png",
  },
  {
    title: "جودة عالية",
    text: `نحن نلتزم بتقديم أعلى جودة في كل منتج نقدمه، لضمان رضاكم التام.`,
    image: process.env.PUBLIC_URL + "/images/icons/offer.png",
  },
];
