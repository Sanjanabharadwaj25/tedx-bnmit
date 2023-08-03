import React from "react";
import event1 from"../assets/NextisHere.jpg";
import event2 from "../assets/UnchartedWaters.jpg";
function Events(){
    return <><section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">PAST EVENTS</h1>
      </div>
  <div class="flex flex-wrap -mx-4 -mb-10 text-center">
    <div class="sm:w-1/2 mb-10 px-4">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-top h-full w-full" src={event1}/>
      </div>
      <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">NEXT IS HERE</h2>
      <p class="leading-relaxed text-base text-white text-justify">
      For many years now, the future has been looked at as a utopian concept. A concept that sounds exciting but one that we always thought was too good to really exist. But on numerous occasions in history, some individuals have shown us that it is possible to create a future that we dream of. The weak while “believe only when they see”, the strong “see what they believe!” And today, more than ever before, nothing seems “too good to exist” because of the efforts of some ordinary people who had some exceptional ideas.        </p>
      <button class="flex mx-auto mt-6 text-white aboutbg border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded" href="">Know More</button>
    </div>
    <div class="sm:w-1/2 mb-10 px-4">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={event2}/>
      </div>
      <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">UNCHARTED WATERS</h2>
      <p class="leading-relaxed text-base text-white text-justify">The world is a complex sphere of mysteries where we are constantly thrown into the unknown ,dealing with uncertainties ,trying to explore the unexplored.The unfaltering will to decode the "enigma " called the world is leading us to take the road less traveled and make unconventional decisions that guides us through the journey of navigating on uncharted waters..</p>
      <button class="flex mx-auto mt-6 text-white aboutbg border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded" href="">Know More</button>
    </div>
  </div>
</div>
</section>
</>
}
export default Events;