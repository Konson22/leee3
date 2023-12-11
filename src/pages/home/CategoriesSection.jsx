import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../../assets/staticData";

const breakPoints = [
  { width: 0, itemsToShow: 2, itemPadding: [0, 3] },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 2,
    itemPadding: [5, 5],
    pagination: false,
  },
  {
    width: 850,
    itemsToShow: 4,
    itemPadding: [5, 5],
  },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

export default function CategoriesSection() {
  const carouselRef = useRef();

  return (
    <div className="md:px-[8%] md:mt-5 mt-3">
      <div className="md:px-[20%] px-3 text-center">
        <span className="text-2xl font-bold">
          مرحبًا بك في متجر الحلويات الخاص بنا!
        </span>
        <p className="text-lg text-gray-700 mb-8">
          نحن نفخر بتقديم تشكيلة متنوعة من الحلويات اللذيذة والكعك الطازجة. في
          محلنا، نهتم بتقديم تجربة فريدة ولذيذة لعملائنا.
        </p>
      </div>
      <div className="relative flex items-center">
        <button
          className="
                md:h-10 md:w-10 h-7 w-7 flex items-center justify-center my-auto
                md:text-2xl text-2xl md:opacity-100 opacity-50
                bg-cl1 text-white hover:bg-cl1 rounded-full absolute left-0 z-30
              "
          onClick={() => carouselRef.current.slidePrev()}
        >
          <FiChevronLeft />
        </button>
        <Carousel
          className="overflow-hidde z-20"
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {categories.map((category, index) => (
            <div
              className="bg-white w-full rounded-lg overflow-hidden shadow-md"
              key={index}
            >
              <img
                src={category.image}
                alt="Chocolate Cake"
                className="w-full md:h-48 h-40 object-cover"
              />
              <div className="p-4 text-right">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-700 line-clamp-2">{category.text}</p>
                <div className="flex justify-center items-end">
                  <span>ر.س</span>
                  <span className="text-xl font-bold">15</span>
                </div>
                <Link
                  className="bg-cl1 text-white rounded px-5 py-1 text-sm mx-auto"
                  to={`/store?category=${category.name}`}
                >
                  start
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
        <button
          className="
              md:h-10 md:w-10 h-7 w-7 flex items-center justify-center
              md:text-2xl text-2xl md:opacity-100 opacity-50 absolute right-0 z-20
              bg-cl1 text-white hover:bg-cl1 rounded-full ml-4
            "
          onClick={() => carouselRef.current.slideNext()}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
