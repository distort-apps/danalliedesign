import Image from "next/image";
import classes from './page.module.css'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className={classes.p}>Welcome to DanAllie Design Dot Com</p>
    </main>
  );
}
