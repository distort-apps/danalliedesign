import Carousel from "@/components/carousel/carousel";
import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <header className={classes.header}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
      </header>
      <main className={classes.intro}>
        <p>
        We have been helping people since 1986 build their dream home. In 1988 we started building in the beautiful Tehachapi Mountains under the name of Knowles Construction.  We have been so blessed to not only have had great clients and built beautiful homes, but many friendships have been built along the way.
        </p>


      </main>
    </>
  );
}
