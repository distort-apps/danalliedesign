import Carousel from "@/components/carousel/carousel";
import Image from "next/legacy/image";
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
      Helping people build their <span className={classes.span}>dream</span> home since 1986
      </p>
      </main>
    </>
  );
}
