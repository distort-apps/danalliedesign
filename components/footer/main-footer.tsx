import CopyRightSVG from "../ui/copyright";
import classes from "./main-footer.module.css";

export default function MainFooter() {
  return (
    <>
      <div className={classes.pagecontainer}>
      </div>
        <footer className={classes.footer}>
          <CopyRightSVG /> DanAllieDesign 2024
        </footer>
    </>
  );
}
