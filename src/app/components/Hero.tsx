import React from 'react';

export default function Hero() {
  return (
    <div>
      <section className="bg-gradient-to-r from-pink-500 to grey-700 ">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* First Image */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-pink-500 to grey-700  h-100 flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg h-full"
              >
                <img
                  src="https://i0.wp.com/paradisicecream.com/wp-content/uploads/2022/10/our-menu-home-1.webp?fit=400%2C400&ssl=1"
                  alt="Chocolate ice cream"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/25 to-gray-700/5"></div>
                <h3 className="z-10 text-2xl  font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Paradis Icecream
                </h3>
              </a>
            </div>

            {/* Second Image and Smaller Images */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-pink-500 to grey-700 ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg h-64"
              >
                <img
                  src="https://img.freepik.com/free-photo/ice-cream-gray-background_179068-1041.jpg?size=626&ext=jpg"
                  alt="Ice cream"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/25 to-gray-700/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Vanila Sprinkle
                </h3>
              </a>

              {/* Smaller Images */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mt-4">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg h-40"
                >
                  <img
                    src="https://img.freepik.com/premium-photo/strawberry-ice-cream-cone-pink-background_171081-2550.jpg"
                    alt="Strawberry ice cream"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-700/25 to-gray-700/5"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Strawberry
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg h-40"
                >
                  <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ice-cream-cone-on-pink-background-kevinruss.jpg"
                    alt="Strawberry ice cream"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-700/25 to-gray-700/5"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Mini Cone
                  </h3>
                </a>
              </div>
            </div>

            {/* Fifth Image */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-pink-500 to grey-700  h-100">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg h-full"
              >
                <img
                  src="https://i0.wp.com/northogdenconnection.com/wp-content/uploads/2020/06/AdobeStock_267330679.jpeg?w=2169&ssl=1"
                  alt="Strawberry ice cream"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/25 to-gray-700/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Choco with Caramel
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
