export default function ServiceSection() {
  return (
    <div className="md:px-[8%] px-3 md:py-[4rem]">
      <h2 className="title md:text-5xl text-3xl font-semibold text-lightpink text-center mb-8">
        خدماتنا
      </h2>
      <div className="mt-5">
        {services.map((service, index) => (
          <div
            className={`flex items-center ${
              service.isAtLeft ? "rounded-l-[65px]" : "rounded-r-[65px]"
            } mb-2 ${service.border}`}
            key={index}
          >
            {service.isAtLeft && <ImageCard service={service} />}
            <div className={`flex-1`}>
              <div
                className={`bg-white p-4 rounded-md ${
                  !service.isAtLeft ? "-mr-8" : "-ml-8 -z-1"
                }`}
              >
                <p className="line-clamp-3 text-right">{service.text}</p>
              </div>
            </div>
            {!service.isAtLeft && <ImageCard service={service} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCard({ service }) {
  return (
    <div
      className={`h-[130px] w-[130px] rounded-full overflow-hidden border-4 z-10 ${service.border}`}
    >
      <img src={service.image} alt="" />
    </div>
  );
}

const services = [
  {
    title: "تشكيلة واسعة من الكعك",
    text: `نقدم مجموعة متنوعة من الكعك الطازجة، بدءًا من الكعك الكلاسيكي إلى الابتكارات الفريدة. يتم اختيار المكونات بعناية لضمان الجودة والطعم الرائع.
      `,
    image: process.env.PUBLIC_URL + "/images/green.jpeg",
    border: "border-cl1",
    isAtLeft: true,
  },
  {
    title: "تصميم خاص للمناسبات",
    text: ` يمكننا تقديم خدمة تصميم خاصة لمناسباتك، سواء كانت أعياد ميلاد، حفلات زفاف، أو أي مناسبة خاصة. نحرص على تلبية توقعاتك وجعل كل حدث فريدًا.`,
    image:
      process.env.PUBLIC_URL + "/images/cream-forest-white-background-red.jpg",
    border: "border-cl2",
    isAtLeft: false,
  },
  {
    title: "خدمة توصيل",
    text: ` لجعل تجربة التسوق أكثر راحة، نقدم خدمة التوصيل لطلباتك. سيتم توصيل الحلويات الطازجة مباشرة إلى باب منزلك.
      `,
    image:
      process.env.PUBLIC_URL + "/images/cream-forest-white-background-red.jpg",
    border: "border-cl3",
    isAtLeft: true,
  },
  {
    title: "تشكيلة واسعة من الكعك",
    text: `نقدم مجموعة متنوعة من الكعك الطازجة، بدءًا من الكعك الكلاسيكي إلى الابتكارات الفريدة. يتم اختيار المكونات بعناية لضمان الجودة والطعم الرائع.
      `,
    image: process.env.PUBLIC_URL + "/images/green.jpeg",
    border: "border-cl2",
    isAtLeft: false,
  },
];
