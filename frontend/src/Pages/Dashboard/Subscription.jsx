import React, { useState } from 'react'

export default function Subscription() {
  const [activeButton,setActiveButton] = useState('monthly');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  }
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-5xl text-6xl font-medium title-font mb-2 text-gray-900 ">Pricing</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Subscribe to any of our plans for Increased Functionality</p>
              <div className='border-black border-4 w-fit md:ml-[649px] mt-5 rounded-lg'>
                  <button
                    className={`py-1 px-4 ${activeButton === 'monthly' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'}`}
                    onClick={() => handleButtonClick('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`py-1 px-4 focus:outline-none ${activeButton === 'annually' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'}`}
                    onClick={() => handleButtonClick('annually')}
                  >
                    Annually
                  </button>
                </div>
            </div>
            <div class="flex flex-wrap p-5 justify-center">
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                  <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Record Expenses 
                  </p>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Record Income
                  </p>
                  <p class="flex items-center text-gray-600 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Glance Chart
                  </p>
                  <button class="flex items-center mt-auto  bg-gray-400 text-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-black hover:text-white rounded">Get Started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-6 rounded-lg border-2 border-black flex flex-col relative overflow-hidden">
                  <span class="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                  <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$38</span>
                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Record Income
                  </p>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Record Expense
                  </p>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Glance Chart
                  </p>
                  <p class="flex items-center text-gray-600 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Custom Categories
                  </p>
                  <button class="flex items-center mt-auto  bg-gray-400 text-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-black hover:text-white rounded">Get Started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                  <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$56</span>
                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Record Income
                  </p>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Record Expense
                  </p>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Glance Chart
                  </p>
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Custom Categories
                  </p>
                  <p class="flex items-center text-gray-600 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Custom Budgets
                  </p>
                  <button class="flex items-center mt-auto  bg-gray-400 text-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-black hover:text-white rounded">Get Started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
