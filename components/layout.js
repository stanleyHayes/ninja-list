import NavBar from "./nav-bar";
import Footer from "./footer";
const Layout = ({children}) => {
    return (
        <div className="container">
            <NavBar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;