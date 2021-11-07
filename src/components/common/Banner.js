import React from 'react';

const Banner = ({ subHeading, heading, description }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{ subHeading }</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{ heading }</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{ description }</p>
        </div>
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">SpaceX</h2>
            <p class="leading-relaxed text-base mb-4">SpaceX is an American aerospace and defense company based in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing the time between the arrival of a spacecraft and its first flight. SpaceX's Falcon Heavy is the second spacecraft to be built for this goal.</p>
            <a class="text-indigo-500 inline-flex items-center">Next Launch
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Blue Origin</h2>
            <p class="leading-relaxed text-base mb-4">Blue Origin is a private space exploration company based in Houston, Texas. Blue Origin is the first privately-funded space exploration company to launch a spacecraft into low Earth orbit. The company's first spacecraft, Blue Origin One, was launched on August 1, 2018.</p>
            <a class="text-indigo-500 inline-flex items-center">Next Launch
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">NASA</h2>
            <p class="leading-relaxed text-base mb-4">NASA is an American space agency, headquartered in Houston, Texas. It is the largest civilian space agency of the United States, and the largest military agency in the world. NASA was founded in 1958, and its first manned mission, the Mercury Orbiter, was launched in 1959.</p>
            <a class="text-indigo-500 inline-flex items-center">Next Launch
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">ULA</h2>
            <p class="leading-relaxed text-base mb-4">ULA is a private space exploration company based in Houston, Texas. ULA is the first privately-funded space exploration company to launch a spacecraft into low Earth orbit. The company's first spacecraft, ULA-1, was launched on August 1, 2018.</p>
            <a class="text-indigo-500 inline-flex items-center">Next Launch
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
