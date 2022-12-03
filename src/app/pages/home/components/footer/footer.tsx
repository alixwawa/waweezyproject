import './style.css';


export const Footer = () => {
    return (
        <footer>
            <div>
                <table className='table-footer'>
                    <tr className='footer-row-one'>
                        <h1 className='builtby'>{'This Website Was Built By Alix Wawa'}</h1>
                    </tr>
                    <tr className='footer-row-two'>
                        <a href="https://www.facebook.com/therealwaweezy/" className="fa fa-facebook">{ }</a>
                        <a href="https://twitter.com/TheRealWaweezy" className="fa fa-twitter">{ }</a>
                        <a href="https://www.reddit.com/user/Waweezy" className="fa fa-reddit">{}</a>
                        <a href="https://www.youtube.com/channel/UCojLZuHh0KobvUa4UD6azjA" className="fa fa-youtube">{}</a>
                        <a href="https://www.instagram.com/therealwaweezy/?hl=en" className="fa fa-instagram">{}</a>
                        {/* <a href="https://www.tiktok.com/@therealwaweezy" className="fa fa-tiktok">{}</a>
                        <a href="https://discord.com/invite/xrMc9kqYDH" className="fa fa-discord">{}</a> */}
                        <a href="https://soundcloud.com/therealwaweezy" className="fa fa-soundcloud">{}</a>
                    </tr>
                </table>
            </div>
        </footer>
    );
};

export default Footer;