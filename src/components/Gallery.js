import React from "react";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"
import image12 from "../assets/image12.jpg"


function Gallery(){

    return   <div class="container px-5 py-24 mx-auto">
            <section class="section-image">
            <ul class="section-showcase clearfix">
                <li>
                
                    <figure class="photo">
                        <img alt='Gallery 1' src={image1}/>
                    </figure>
                    
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 2' src={image2} />
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 3' src={image3}/>
                    </figure>
                </li>
    
                <li>
                    <figure class="photo">
                        <img alt='Gallery 4' src={image4} />
                    </figure>
                </li>
            </ul>
            <ul class="section-showcase clearfix">
                <li>
                    <figure class="photo">
                        <img alt='Gallery 5' src={image5} />
    
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 6' src={image6}/>
    
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 7' src={image7} />
    
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 8' src={image8} />
    
                    </figure>
                </li>
            </ul>
                <ul class="section-showcase clearfix">
                <li>
                    <figure class="photo">
                        <img alt='Gallery 9' src={image9} />
    
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 10' src={image10} />
    
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 11' src={image11}/>
    
                    </figure>
                </li>
                <li>
                    <figure class="photo">
                        <img alt='Gallery 12' src={image12}/>
    
                    </figure>
                </li>

            </ul>
                    
    </section>
    </div>
}

export default Gallery;