export default function Header() {
  return (
    <div className="">
      <header className="header-container px-5 text-2xl font-bold py-24 text-white">
        {/* <p>يرحب بكم متجرنا الرائع حيث يتميز بتشكيلة واسعة من الحلوى اللذيذة</p> */}
      </header>
      <div className="text-center bg-white p-6 mx-4 -mt-10">
        <p className="">
          استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى
          المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى
          الحامضة، الشوكولاته اللذيذة والكثير من الخيارات اللذيذة الأخرى.
        </p>
        <div className="flex justify-evenly mt-5">
          <button className="bg-cl1 px-5 py-1 rounded">contact</button>
          <button className="bg-cl1 px-5 py-1 rounded">contact</button>
        </div>
      </div>
    </div>
  );
}
