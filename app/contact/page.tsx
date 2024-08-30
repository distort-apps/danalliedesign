import Link from "next/link";
import classes from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={classes.contact}>
      <header className={classes.header}>
        <h1>Contact DanAllie Design</h1>
        <p>
          If you have any inquiries about my projects, or if youre looking for plans, we would love to connect:
        </p>
      </header>
      <main className={classes.info}>
        <p>Email:{" "}
          <a href="mailto:danielgene.dev@gmail.com" className={classes.link}>
            danalliedesign@gmail.com
          </a>
        </p>
        <p>LinkedIn:{" "}
          <Link href="https://www.linkedin.com/in/danicodes01/" className={classes.link}>
            connect with us on Instagram
          </Link>
        </p>
      </main>
    </div>
  );
}
