import React from "react";
import aboutimage from "../assets/hero.jpg"
function About(){
    return <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={aboutimage}/>
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-white text-lg">What is TED?</h2>
              <div class="w-12 h-1 rounded mt-2 mb-4 aboutbg"></div>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4 about">
            TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED Conferences, intimate TED Salons and thousands of independently organised TEDx events around the world.
                 Videos of these talks are made available, free, on <a href="https://www.ted.com/">TED.com</a>  and other platforms.        
            </p>
            <a class="about-color inline-flex items-center" href="https://www.ted.com/">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-white text-lg">What is TEDx?</h2>
              <div class="w-12 h-1 rounded mt-2 mb-4 aboutbg"></div>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4 about">
            In the spirit of ideas worth spreading, TED has created a program called TEDx. 
            TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxBNMIT, where x = independently organized TED event. At our TEDxBNMIT event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
            The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
        </p>
            <a class="about-color inline-flex items-center" href="https://www.ted.com/about/programs-initiatives/tedx-program">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default About;