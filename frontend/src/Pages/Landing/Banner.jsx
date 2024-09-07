import React from 'react'

export default function Banner() {
  return (
    <>
        <section className="bg-black text-white bg-opacity-100 backdrop-blur-2xl border border-gray-700  h-screen sm:h-full">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl mb-4"
                >
                    Manage Your Expenses
                </h1>
                <span className="sm:block text-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">Control Your Money</span>
                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    Start creating your budget !
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4">
                    <h1 className='text-white'>DASHBOARD PNG TO BE INSERTED</h1>
                    <a
                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="#"
                    >
                    Learn More
                    </a>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}
