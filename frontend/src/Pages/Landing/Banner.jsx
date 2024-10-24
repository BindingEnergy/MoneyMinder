import React from 'react'
import dashboardpng from '../Landing/1.png'

export default function Banner() {
  return (
    <>
      <section className="bg-[#323232] text-white bg-opacity-100 backdrop-blur-2xl border border-gray-700 h-screen sm:h-full">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-[#f4e5c2] bg-clip-text text-4xl font-extrabold sm:text-6xl mb-4 leading-normal sm:leading-normal"
            >
              Manage Your Expenses
            </h1>
            <span className="sm:block text-3xl text-[#f4e5c2] mt-2">Control Your Money</span>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl text-[#f4e5c2]">
              Start creating your budget!
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4">
              <img src={dashboardpng} alt="" className="border-0 rounded-lg mb-10" />
              <a
                className="block w-full rounded border border-[#f4e5c2] px-12 py-3 text-sm font-medium text-white hover:bg-[#f4e5c2] hover:text-black focus:outline-none focus:ring active:bg-[#f4e5c2] sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
