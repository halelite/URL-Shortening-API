import Footer from "./Footer"
import Main from "./Main"
import Navbar from "./Navbar"

function Layout({children}) {
    return (
        <>
            <Navbar />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout