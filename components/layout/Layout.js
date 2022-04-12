import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import SubNavigation from "./SubNavigation";

const Layout = (props) => {
    return <div>
        <MainNavigation></MainNavigation>
        <SubNavigation></SubNavigation>
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout