import React, { useEffect } from "react";
import DreamImage from "../assets/Dreams.jpg";

const DreamsUnlocked = () => {
  useEffect(() => {
    // Function for countdown
    const countDown = () => {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // INSERT EVENT DATE AND TIME HERE IN THIS FORMAT: 'June 1, 2023, 19:00:00'
      const EVENTDATE = new Date('September 16, 2023, 10:00:00');

      const countDownDate = new Date(EVENTDATE).getTime();
      const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Check if the countdown is over
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerText = "EVENT HAS STARTED";
        }
      }, 0);
    };

    countDown();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={DreamImage} />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="about-color text-lg title-font font-medium mb-3">Theme: Dreams Unlocked</h2>
              <p className="leading-relaxed text-lg text-base text-white">
                Don't shy away from your dreams. Embrace your culture with all your heart, for every dream is unique and achievable. Whether it's as an introvert or an extrovert, a budding artist or a legendary performer, we all have the power to make our dreams a reality.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="about-color text-lg title-font font-medium mb-3">Event Details</h2>
              <p className="leading-relaxed text-lg text-base text-white">
                September 16th, 2023<br />
                Mathrushree Sushila Devi R Maanay Auditorium<br />
                BNM Institute of Technology<br />
                12th Main Road, 27th Cross, Banashankari Stage II, Bengaluru, Karnataka 560070
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
            <h2 className="about-color text-lg title-font font-medium mb-3">See you in</h2>
            <div className="Count-container">
            <div id="countdown">
            <ul  class="count-ul  text-white">
            <li><span id="days" class="span-class"></span>DAYS</li>
            <li><span id="hours" class="span-class"></span>HOURS</li>
            <li><span id="minutes" class="span-class"></span>MINUTES</li>
            <li><span id="seconds" class="span-class"></span>SECONDS</li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      
      <button class="flex mx-auto mt-6 text-white aboutbg border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded" href="">Book your tickets!</button>
      </div>
      </div>

    </section>
  );
};

export default DreamsUnlocked;
