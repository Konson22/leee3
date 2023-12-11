import SocialMedia from "../../components/SocialMedia";
import Input from "../forms/Input";

export default function ContactSection() {
  return (
    <div className="px-10">
      <h3 className="text-2xl text-center">اتصل بنا</h3>
      <p className="text-center my-3">
        لأي استفسار أو للحصول على مزيد من المعلومات، يمكنكم الاتصال بنا عبر:
      </p>
      <div className="mt-3">
        <form>
          <Input placeholder="أدخل عنوان البريد الإلكتروني" type="text" />
          <Input placeholder="أدخل اسمك" type="text" />
          <Input placeholder="email" type="textarea" />
        </form>
      </div>
      <SocialMedia />
    </div>
  );
}
