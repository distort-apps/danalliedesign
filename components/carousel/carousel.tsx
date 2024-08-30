"use client";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import classes from "./carousel.module.css";

interface Image {
    alt: string;
    src: string;
  }
  
  const images: Image[] = [
      {
        alt: "snow house",
        src: "/images-home/bottomone.png",
      },
      {
        alt: "chairs at island",
        src: "/images-home/topzero.png",
      },
      {
        alt: "chairs in kitchen",
        src: "/images-home/topone.png",
      },
    { 
      alt: "castle house", 
      src: "/images-home/bottomzero.png"
    },
    {
      alt: "dining room",
      src: "/images-home/toptwo.png",
    },
    {
      alt: "house on hill",
      src: "/images-home/bottomtwo.png",
    },
  ];
  

export default function Carousel() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={classes.carousel}>
      {images.map((image, index) => (

        <Image
          key={index}
          src={`${image.src}`}
          className={index === photoIndex ? classes.active : ""}
          alt={image.alt}
          layout='fill'
        />
      ))}
    </div>
  );
}
