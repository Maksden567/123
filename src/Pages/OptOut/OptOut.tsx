import { useEffect, useState } from 'react'
import '../../App.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import styles from './OptOut.module.scss'
import emailjs from '@emailjs/browser'

function OptOut() {

    const [isShow, setIsShow] = useState(false)
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')


    useEffect(() => {
        const body = document.querySelector('body');
        if (isShow) {
            body ? body.style.overflow = 'hidden' : null;
        }
        else {
            body ? body.style.overflow = 'auto' : null;
        }
    }, [isShow])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    const send = (e:any)=>{
        e.preventDefault();
        emailjs.sendForm('service_htw9cm3','template_xrp8prk',e.target,'vn1OH0j5HBmZzSQ6-')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            <div className="container">
                <Header isShow={isShow} setIsShow={setIsShow} />
                <div className={styles.wrapper}>
                    <form className={styles.form} onSubmit={send}>
                        <input type="text" name='email' placeholder='Email' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}} value={email} />
                        <textarea name="message" id="" cols={30} rows={10} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setMessage(e.target.value)}} value={message} placeholder='message' ></textarea>
                        <button type='submit' >Send</button>

                    </form>
                   
                </div>
                <Footer />
            </div>

        </>
    )
}

export default OptOut
