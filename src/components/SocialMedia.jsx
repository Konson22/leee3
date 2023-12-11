import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="px-4 mb-8">
      <h3 className="text-2xl text-center mb-4">follow us</h3>
      <div className="flex justify-evenly text-3xl">
        <span className="border border-cl1 rounded-md p-2">
          <FaFacebook />
        </span>
        <span className="border border-cl1 rounded-md p-2">
          <FaInstagram />
        </span>
        <span className="border border-cl1 rounded-md p-2">
          <FaTwitter />
        </span>
        <span className="border border-cl1 rounded-md p-2">
          <FaWhatsapp />
        </span>
      </div>
    </div>
  );
}
