import './style.css';



export const Music = () => {


    return (
        <div className='soundcloud-div'>
            <iframe title="Wa-PerBolic Time Chamber" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/356593053&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div className="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                <a href="https://soundcloud.com/therealwaweezy" title="Waweezy" target="_blank" rel="noreferrer" className="color: #cccccc; text-decoration: none;">{}</a>
                <a href="https://soundcloud.com/therealwaweezy/sets/wa-perbolic-time-chamber" title="Wa-PerBolic Time Chamber" target="_blank" rel="noreferrer" className="color: #cccccc; text-decoration: none;">Wa-PerBolic Time Chamber</a>
            </div>
        </div>
    );
};

export default Music;