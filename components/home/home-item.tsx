import Image from "next/image";
import { HomeImg } from "@/types/homeimg";
import classes from "./home-item.module.css";

export default function HomeItem({ alt, src }: HomeImg) {
  return (
    <li className={classes.home}>
      <img src={src} alt={alt} />
    </li>
  );
}
