import './style.css';
const bioOfMe = "The Waweezy Project was started by me, Alix Israel Wawa. I could write in the 3rd person like every other DJ, but I find that a bit overdone. Let's not act like the DJ's themselves aren't the ones to come up with these bio descriptions. I was born in New York City and have lived in Nashville the majority of my life. I mostly listed to hip-hop growing up, but got into electronic music around 2010. Im heavily influenced by artist like Bassnectar (lets be honest, most of us are), Zeds Dead, Nero, J Cole, and Kendrick Lamar.  I want this project to grow as large as possible in the years to come. I know that this can't last forever, but nothing great last for a long time. I want this project to change the world in whatever size fashion possible. If we can grow this into something larger, I will definitely be starting a charity type program or something like that. I want this project to represent good, but I've also had an itch to play dark music. That's my vibe, hope y'all dig it."



export const Bio = () => {

    return (
        <p className='bio'>{bioOfMe}</p>
    );
};

export default Bio;