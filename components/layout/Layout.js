
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return <div>
        <MainNavigation></MainNavigation>
        <main>{props.children}</main>
    </div>
}

export default Layout