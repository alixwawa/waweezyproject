
import { Email } from './email';
import './style.css';



export const Contact = () => {


    return (
        <>
        <p className='email-message'>
            Wanna stay in touch? Give me your info and I'll send you updates and stuff...
        </p>
        <Email></Email>
        </>
    );
};

export default Contact;