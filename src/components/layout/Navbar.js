import React from "react";
import Logo from "../../assets/logo.png"
function Navbar(){
 return <header class="text-gray-600 body-font">
 <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={Logo} alt="Logo"/>
   </div>
   <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <div href="#" class="mr-5 text-white navbar-hover">Dreams Unlocked</div>
     <div href="../About.js" class="mr-5 text-white navbar-hover">About</div>
     <div href="#" class="mr-5 text-white navbar-hover">Sponsors</div>
   </nav>
   <button class="inline-flex items-center navbar-cta border-0 py-1 px-3 focus:outline-none hover:bg-white navbar-hover rounded text-base mt-4 md:mt-0">Book Tickets
     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
       <path d="M5 12h14M12 5l7 7-7 7"></path>
     </svg>
   </button>
 </div>
</header>
}
export default Navbar;