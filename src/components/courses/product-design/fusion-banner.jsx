const FusionBanner = () => {
  const brands = [
    "YAMAHA",
    "TOYOTA",
    "logitech",
    "Gibson",
    "accenture",
    "Panasonic",
  ];

  return (
    <section className="bg-teal-900 text-white py-16" id="autodeskfusion">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/assets/images/courses/product-design/Fusion-2025-lockup-Wht-OL-ADSK-No-Year-1-line.avif" alt="Autodesk Fusion Logo" />
            </div>

            <p className="text-3xl font-semibold leading-tight max-w-3xl">
              "Fusion is recognized as the best professional cloud product
              design and manufacturing software platform on G2."
            </p>

            <p className="text-yellow-400 text-2xl font-bold mt-4 italic">
              – 4.5/5 rating, 500+ reviews on G2
            </p>
          </div>

          {/* Award Badges */}
          
          <img src="/assets/images/courses/product-design/image_edited.avif" alt="Award Badges" />
        </div>

        {/* Trusted Brands Box */}
        <div className="bg-gray-100 rounded-[30px] p-5 mt-12">

            <img className="rounded-[30px]" src="/assets/images/courses/product-design/Trusted by over 4_6 million.avif" alt="Trusted Brands" />
          
          
          {/* <h3 className="text-black text-3xl font-bold mb-8">
            Trusted by over 4.6 million professionals, including
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="text-black text-3xl font-semibold text-center"
              >
                {brand}
              </div>
            ))}
          </div> */}


        </div>

      </div>
    </section>
  );
};

export default FusionBanner;