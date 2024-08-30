import classes from './home-grid.module.css';
import HomeItem from './home-item';
import { HomeImg } from '@/types/homeimg';

const images: HomeImg[] = [
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
  }
];

export default function HomeGrid() {
    return (
        <ul className={classes.home}>
            {images.map((home) => (
                <HomeItem key={home.alt} {...home} />
            ))}
        </ul>
    )
    }   