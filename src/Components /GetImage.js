import React, { useState, useEffect } from "react";
import Image from "./Image";

const GetImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const data = await resp.json();
      setImages(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex items-center  justify-center">
      {!images ? (
        <h2>Loading...</h2>
      ) : (
                  <section className="px-5 container mx-auto">
                      <h3 className="font-bold text-3xl  md:text-4xl  lg:text-6xl my-10  lg:mt-20 lg:mb-16 text-slate-800 capitalize">
      Unsplash Photo Booth
    </h3>
    <p className="font-bold text-2xl   md:text-3xl  lg:text-4xl  my-10  lg:mt-22 lg:mb:18  text-slate-600 capitalize">
      Recomended Photos
          </p>
                      
          <div className="grid gap-8  grid-cols-1 grid-10 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default GetImage;
