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
      alt: "woodhouse",
      src: "/images-home/woodhouse.png",
    },
    {
    alt: "house on hill",
    src: "/images-home/bottomtwo.png",
  },
  {
    alt: "dining",
    src: "/images-home/dining.png",
  },
  {
    alt: "long deck",
    src: "/images-home/longdeck.png",
  },
  {
    alt: "northwest",
    src: "/images-home/northwest.png",
  },
  {
    alt: "pioano room",
    src: "/images-home/pianoroom.png",
  },
  {
    alt: "old timy",
    src: "/images-home/oldtimy.png",
  },
  {
    alt: "mirrors",
    src: "/images-home/mirrors.png",
  },
  {
    alt: "fireplace",
    src: "/images-home/fireplace.png",
  },
  {
    alt: "chairs in kitchen",
    src: "/images-home/topone.png",
  },
  {
    alt: "castle house",
    src: "/images-home/bottomzero.png",
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
