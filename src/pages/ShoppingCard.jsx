import { FiX } from "react-icons/fi";
import { useGlobalApi } from "../manager/ContextProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoaderSvg } from "../components/Buttons";

export default function ShoppingCard() {
  const { cartData, removeItem, setIsCheckingOut } = useGlobalApi();
  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    if (cartData.length) {
      const tPrice = cartData
        .map((i) => i.price * i.qty)
        .reduce((a, t) => +a + +t);
      setTotalPrice(tPrice);
    }
  }, [cartData]);

  return (
    <div className="md:px-[8%] px-3 my-5">
      {cartData.length > 0 ? (
        <div className="md:flex md:bg-transparent bg-white pb-1">
          <ItemsInCart
            cartData={cartData}
            removeItem={removeItem}
            cName="md:hidden block "
          />
          <div className="md:w-[35%] md:bg-white bg-gray-100 md:m-0 m-4 p-5 border">
            <div className="">
              <div className="flex justify-between font-bold">
                <span>{totalPrice}</span>
                <span>السعر الصافي</span>
              </div>
              <div className="flex justify-between font-bold mt-3">
                <span>{totalPrice}</span>
                <span>السعر الإجمالي</span>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="border border-rd px-7 py-2 rounded-md"
                onClick={() => setIsCheckingOut(true)}
              >
                ضع الطلب
              </button>
            </div>
          </div>
          <ItemsInCart cartData={cartData} removeItem={removeItem} />
        </div>
      ) : (
        <div className="bg-white p-8">
          <p className="text-right">ليس لديك منتجات في عربة التسوق الخاصة بك</p>
          <div className="flex justify-end mt-8">
            <Link className="bg-cl1 text-white rounded px-4 py-2" to="/store">
              ابدأ التسوق
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ItemsInCart({ cartData, removeItem, cName = "md:block hidden" }) {
  return (
    <div className={`flex-1 bg-white border md:ml-5 ${cName}`}>
      <table className="w-full table-auto text-right">
        <thead>
          <tr className="border-b">
            <th className="py-3 ">حذف</th>
            <th className="py-3 md:block hidden ">السعر الإجمالي</th>
            <th className="py-3 ">السعر </th>
            <th className="py-3 ">الكمية</th>
            <th colSpan={2} className="">
              منتجات
            </th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <TableBody
              index={index}
              key={index}
              item={item}
              removeItem={removeItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableBody({ item, removeItem, index }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await removeItem(item.productID);
    setIsLoading(false);
  };
  return (
    <tr key={index} className={`${index % 2 ? "bg-gray-50" : ""}`}>
      <td className="">
        <div
          className="text-red-400 w-[max-content] cursor-pointer p-2"
          onClick={handleDelete}
        >
          {isLoading ? <LoaderSvg /> : <FiX />}
        </div>
      </td>
      <td className="">{item.price * item.qty}</td>
      <td className="md:block hidden ">{item.price}</td>
      <td className="">{item.qty}</td>
      <td>{item.name}</td>
      <td className="flex justify-end">
        <img
          className="h-10 w-10 ml-3"
          src={process.env.REACT_APP_API + item.product_image}
          alt=""
        />
      </td>
    </tr>
  );
}
