import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
      <header className="header-container px-5 text-xl font-bold py-20 text-white">
        <p className="">
          استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى
          المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى
          الحامضة، الشوكولاته اللذيذة .
        </p>
        <div className="flex">
          <Link
            className="flex items-center mx-auto mt-5 bg-rd text-white px-5 py-2 rounded"
            to="/store"
          >
            ابدأ التسوق
            <FiShoppingBag className="text-2xl ml-2" />
          </Link>
        </div>
      </header>
      {/* <div className="header-text text-center bg-white p-6 mx-4 --mt-10">
        <p className="">
          استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى
          المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى
          الحامضة، الشوكولاته اللذيذة والكثير من الخيارات اللذيذة الأخرى.
        </p>
        <button className="flex items-center mx-auto mt-5 bg-rd text-white px-5 py-2 rounded">
          ابدأ التسوق
          <FiShoppingBag className="text-2xl ml-2" />
        </button>
      </div> */}
    </div>
  );
}
