import { Bio } from './components/bio';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { headerNavbar } from './components/headerNavbar';




export const Home = () => {

    return (
        <>
            <headerNavbar></headerNavbar>
            <Header></Header>
            <Bio></Bio>
            <Footer></Footer>
        </>
    );
};

export default Home;