import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { mobileNavigationLinks } from "../assets/staticData";

export default function Footer() {
  return (
    <footer className="footer text-white md:flex justify-between md:px-[8%] px-4 py-10">
      <div className="">
        <div className="mb-7">
          <h3 className="text-xl text-right mb-3">الاشتراك</h3>
          <div className="h-[3rem] flex p-1 rounded bg-white">
            <button className="h-full flex items-center bg-rd text-white rounded px-4">
              ارسل
              <FiMail className="ml-2" />
            </button>
            <input
              className="h-full w-full text-right border-none bg-transparent focus:border-none focus-within:border-none focus:outline-none"
              type="email"
              placeholder="البريد الإلكتروني"
            />
          </div>
          <p className="text-right mt-2">
            اشترك واحصل على تحديث المثيل حول منتجاتنا وعروضنا الخاصة
          </p>
        </div>
        <div className="mb-7">
          <h3 className="text-xl text-right mb-3">بوابات الدفع الالكتروني</h3>
          <div className="flex justify-evenly">
            <div className="bg-white h-9 w-14">
              <img
                src={process.env.PUBLIC_URL + "/images/gateways/mastercard.jpg"}
                alt=""
              />
            </div>
            <div className="bg-white h-9 w-14">
              <img
                src={process.env.PUBLIC_URL + "/images/gateways/momo2.png"}
                alt=""
              />
            </div>
            <div className="bg-white h-9 w-14">
              <img
                src={process.env.PUBLIC_URL + "/images/gateways/mgurush.png"}
                alt=""
              />
            </div>
            <div className="bg-white h-9 w-14 p-2">
              <img
                src={process.env.PUBLIC_URL + "/images/gateways/visa.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:mt-0 mt-8">
        <div className="">
          <h3 className="text-right font-bold">روابط سريعة</h3>
          <ul>
            {mobileNavigationLinks.map((link) => (
              <li className="text-right py-2">{link.text}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-right">الاتصال والعنوان</h3>
          <ul>
            <li className="flex items-center justify-end my-2">
              somewhare, near something
              <span className="border p-2 rounded-full ml-2">
                <FaMapMarkerAlt />
              </span>
            </li>
            <li className="flex items-center justify-end my-2">
              +966544024948
              <span className="border p-2 rounded-full ml-2">
                <FaPhoneAlt />
              </span>
            </li>
            <li className="flex items-center justify-end my-2">
              +966544024948
              <span className="border p-2 rounded-full ml-2">
                <FaWhatsapp />
              </span>
            </li>
            <li className="flex items-center justify-end my-2">
              info@leeethree.com
              <span className="border p-2 rounded-full ml-2">
                <FiMail />
              </span>
            </li>
          </ul>
          {/* <ul>
          <li className="flex items-center my-2">
            <span className="border p-2 rounded-full mr-2">
              <FaMapMarkerAlt />
            </span>
            somewhare, near something
          </li>
          <li className="flex items-center my-2">
            <span className="border p-2 rounded-full mr-2">
              <FaPhoneAlt />
            </span>
            +966544024948
          </li>
          <li className="flex items-center my-2">
            <span className="border p-2 rounded-full mr-2">
              <FaWhatsapp />
            </span>
            +966544024948
          </li>
          <li className="flex items-center my-2">
            <span className="border p-2 rounded-full mr-2">
              <FiMail />
            </span>
            info@leeethree.com
          </li>
        </ul> */}
        </div>
      </div>
    </footer>
  );
}

/*
 <div className="bg-cl1 text-white px-[8%] py-4">
        <div className="md:flex items-center justify-between py-5">
          <div className="flex items-center justify-center md:mb-0 mb-6">
            <img
              className="md:h-10 w-14 md:w-14 h-9 w-9"
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt=""
            />
            <p className="logo-text text-2xl font-bold">لي ثري</p>
          </div>
          <div className="flex justify-evenly">
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center md:text-3xl text-2xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaTwitter />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaInstagram />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaFacebook />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaFacebook />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaFacebook />
            </span>
          </div>
        </div>
        <div className="border-y-2 border-white py-2 my-6"></div>
        <div className="md:flex justify-between mt-4">
          <div className="">
            <h3 className="text-3xl">الاتصال والعنوان</h3>
          </div>
          <div className="">
            <h3 className="text-3xl">address</h3>
          </div>
          <div className="">
            <h3 className="text-3xl">الاتصال والعنوان</h3>
            
          </div>
        </div>
      </div>
*/
