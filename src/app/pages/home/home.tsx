import { Bio } from './components/bio';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HeaderNavbar } from './components/headerNavbar';




export const Home = () => {

    return (
        <>
            <HeaderNavbar></HeaderNavbar>
            <Header></Header>
            <Bio></Bio>
            <Footer></Footer>
        </>
    );
};

export default Home;