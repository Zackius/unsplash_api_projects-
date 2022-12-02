import React from "react";
import { photo1, photo2, photo3, photo4 } from "../assests";
import SimpleImageSlider from "react-simple-image-slider";
import Button from '@mui/material/Button';


const Hero = () => {
    const images = [
    { url: photo1 },
    { url: photo2 },
    { url: photo3 },
    {url: photo4}
    ]
    return (
        <div>
          <section class="h-[800px] w-full  pt-36 flex  flex-cols justify-center items-center px-8 gap-36 ">
  
              <div>
          <h2 class="font-bold text-4xl underline p-4">PhotoBooth</h2>
          <p class="italic text-ms p-4">
            The difference between good photos and beautiful photos Good photos
            tell stories. Average photos are just beautiful
          </p>

          <p class="text-green  p-4 text-4xl content-div">
            A truly good picture does not only show something but it lights up a
            perceptual space in the head of the observer. It can’t be contained
            into the two dimensions of a print but it always tries to get out.
                    </p>
                    <div class="flex  justify-evenly">
                        <a href="signin">
                        <Button variant="contained">Sign In </Button>
                        </a>
                        <a  href="signup">
                        <Button variant="contained">Sign Up </Button>
                       </a>
                       
                    </div>
                    
        </div>
              <div class="shadow-xl  p-4 rounded-2xl">
              <SimpleImageSlider
                      width={800}
                      height={600}
              loop={true}
              autoPlayDelay={2.0}
              autoPlay={true}
              images={images}
              showBullets={true}
            />
                </div>
              
      </section>
    </div>
  );
};

export default Hero;
