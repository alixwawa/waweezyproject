import {useState} from 'react';
import './style.css';



export const Contact = () => {

    const [message, setMessage] = useState(null);
    const sendEmail = () => {

    }

    const handleSubmit = (event: any) => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);
    };

    return (
        <>
        <p className='email-message'>
            Wanna stay in touch? Give me your email and I'll send you updates and stuff...
        </p>
            <form>
                <label className='email-label'>
                    Email Address:
                </label>
                <input type="text" onChange={handleSubmit} />
                <button onClick={()=>sendEmail() }> Submit </button>
            </form>
        </>
    );
};

export default Contact;