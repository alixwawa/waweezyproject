import './style.css';
import meWorking from './me.png';
const bioOfMe = "The Waweezy Project was started by me, Alix Israel Wawa. I could write in the 3rd person like every other DJ, but I find that a bit overdone. Let's not act like the DJ's themselves aren't the ones to come up with these bio descriptions. I was born in New York City, but have lived in Nashville, TN (615) the majority of my life. I mostly listened to hip-hop growing up, but I then got into electronic music around 2010. Im heavily influenced by artist like Bassnectar (lets be honest, most of us are), Zeds Dead, Nero, J Cole, and Kendrick Lamar.  I want this project to grow as large as possible in the years to come. I know that this can't last forever, but nothing great does. I want this project to change the world in whatever size fashion possible. If we can grow this into something larger, I will definitely be starting a charity type program or something like that. I want this project to represent good, but I want my music to feel dark. That's my vibe, hope y'all dig it."



export const Bio = () => {

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <div>
                            <img src={meWorking} className="App-logo" alt="logo" />
                        </div>
                    </td>
                    <td>
                        <div className='biodiv'>
                            <p className='bio'>{bioOfMe}
                            </p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Bio;