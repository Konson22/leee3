import SocialMedia from "../../components/SocialMedia";
import Input from "../forms/Input";

export default function ContactSection() {
  return (
    <div className="">
      <div className="contact-from bg-cl1 text-white p-10">
        <h3 className="text-2xl text-center">اتصل بنا</h3>
        <p className="text-center my-3">
          لأي استفسار أو للحصول على مزيد من المعلومات، يمكنكم الاتصال بنا عبر:
        </p>
        <div className="mt-3">
          <form>
            <Input
              placeholder="أدخل عنوان البريد الإلكتروني"
              type="text"
              bg="bg-white"
            />
            <Input placeholder="أدخل اسمك" type="text" bg="bg-white" />
            <Input placeholder="email" type="textarea" bg="bg-white" />
          </form>
        </div>
      </div>
      <div className=" -mt-6">
        <img src={process.env.PUBLIC_URL + "/images/map.png"} alt="" />
      </div>
    </div>
    // <div className="px-10 ">

    //   <SocialMedia />
    // </div>
  );
}
