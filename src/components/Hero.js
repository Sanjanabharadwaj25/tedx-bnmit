import React, { useRef, useEffect } from "react";
import Typed from "typed.js"; // Make sure to install 'typed.js' package using npm or yarn

function Hero() {
  // Create a ref to the text element for the typewriter effect
  const textRef = useRef(null);

  // Run the typewriter effect on component mount
  useEffect(() => {
    const typing = new Typed(textRef.current, {
      strings: ["SPREADING", "SHARING"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
      cursorChar: "", // Set the cursor character to an empty string
    });

    return () => {
      // Clean up the typing effect when the component unmounts
      typing.destroy();
    };
  }, []);

  return (
    <section className="text-gray-600 body-font hero-section">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div class="text-center lg:w-2/3 w-full">
          <div className="hero-text">
            <h1 className="mb-0 leading-relaxed">IDEAS WORTH </h1> {/* Remove the margin-bottom (mb-8) from h1 */}
            <div ref={textRef} className="text cursor"></div> {/* Add 'cursor' class to the text element */}
            <p>Building bridges through meaningful conversations</p>
          </div>
        </div>
        
      </div>
      <style>
        {`
          /* Add styles for the cursor element */
          .cursor::after {
            content: "|"; /* Set the cursor content to be a vertical bar (you can customize this) */
            animation: typing 1s steps(10) infinite alternate;
          }

          /* Define the cursor animation */
          @keyframes typing {
            to {
              visibility: hidden; /* Hide the cursor at the end of the animation */
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
