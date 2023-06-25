import Navigator from "../Components/Navigator";
import Footer from "../Components/Footer";
import '../Styles/layout.css';

export default function Layout({children}) {
    return(
        <div className="mainbody">
            <Navigator/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}