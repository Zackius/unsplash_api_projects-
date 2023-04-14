import React from "react";
import { photo5 } from "../assests";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Hero = () => {
    return (
          <section class=" h-[1200px] w-full px-16  pt-24 flex flex-cols justify-between   containers">
              <div className="items-center pt-60">
          <h2 class="font-bold  text-4xl underline p-4">PhotoBooth</h2>
          <p class="italic text-ms p-4">
            The difference between good photos and beautiful photos Good photos
            tell stories. Average photos are just beautiful
          </p>

          <p class="text-green  p-4 text-4xl content-div">
            A truly good picture does not only show something but it lights up a
            perceptual space in the head of the observer. It can’t be contained
            into the two dimensions of a print but it always tries to get out.
                    </p>                   
        </div>
              <div >
            <img className="rounded-full shadow-xl"  src={photo5} alt="h"/>
                </div>
              
      </section>
  );
};

export default Hero;
