import { useRef, useState } from "react";
import { useGlobalApi } from "../../manager/ContextProvider";
import axiosInstance from "../../hooks/useAxios";
import { LoadingButton } from "../../components/Buttons";

export default function Login() {
  const { setShowForm, setProfile } = useGlobalApi();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    const fields = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (passwordRef.current.value && emailRef.current.value) {
      try {
        const userCredential = await axiosInstance
          .post("/auth/login", fields)
          .then((res) => res);
        setProfile(userCredential.data);
        setShowForm(null);
      } catch (error) {
        if (error.response) {
          setMessage(error?.response?.data);
        } else {
          setMessage("Error");
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage("Please fill all fields");
    }
  };
  return (
    <div className="">
      <h3 className="text-center text-2xl mb-4">التسجيل</h3>
      {message && (
        <span className="block text-center text-red-400 mb-5">{message}</span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex rounded overflow-hidden mb-6">
          <input
            className="md:h-[2.5rem] h-[2.5rem] text-right bg-gray-100 drop-shadow-md w-full border-none focus:outline-none focus:border-none px-3"
            type="text"
            ref={emailRef}
            disabled={isLoading}
            placeholder="أدخل عنوان البريد الإلكتروني"
            required
          />
        </div>
        <div className="flex rounded overflow-hidden mb-6">
          <input
            className="md:h-[2.5rem] h-[2.5rem] text-right bg-gray-100 drop-shadow w-full border-none focus:outline-none focus:border-none px-3"
            type="text"
            placeholder="أدخل كلمة المرور"
            required
            disabled={isLoading}
            ref={passwordRef}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <button
            className="w-full bg-cl1 text-white rounded py-2"
            type="submit"
            disabled={isLoading}
          >
            تسجيل الدخول
          </button>
        )}
      </form>

      <button
        className="w-full text-center mt-7"
        onClick={() => setShowForm("register")}
      >
        ليس لديك حساب؟ إنشاء حساب
      </button>
    </div>
  );
}
