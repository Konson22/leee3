export default function LoaderContent() {
  return (
    <div className="h-[dvh] fixed inset-0 z-50 backdrop-blur-2xl bg-black/50 flex items-center justify-center">
      <div className="md:w-[30%] w-[80%] bg-white rounded p-10">
        <p className="text-center font-bold">تحميل جاري </p>
        <div className="flex justify-center mt-6">
          <div className="rounded-full mx-2 loader l1 md:h-10 h-5 md:w-10 w-5"></div>
          <div className="rounded-full mx-2 loader l2 md:h-10 h-5 md:w-10 w-5"></div>
          <div className="rounded-full mx-2 loader l3 md:h-10 h-5 md:w-10 w-5"></div>
          <div className="rounded-full mx-2 loader l4 md:h-10 h-5 md:w-10 w-5"></div>
        </div>
      </div>
    </div>
  );
}

export function ItemsLoader() {
  return (
    <div>
      <div className="md:h-[150px] h-[150px] rounded loader-card bg-gray-300"></div>
      <div className="bg-white p-3">
        <div className="h-2 bg-gray-100 loader-card"></div>
        <div className="h-2 bg-gray-100 mt-1 loader-card"></div>
        <div className="flex items-center justify-between loader-card mt-3">
          <div className="flex items-center">
            <div className="h-4 w-6 bg-gray-100"></div>
            <div className="h-2 w-4 bg-gray-100 mx-2"></div>
            <div className="h-4 w-6 bg-gray-100"></div>
          </div>
          <div className="h-6 w-14 bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
