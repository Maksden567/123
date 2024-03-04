import { useState } from 'react'
import styles from './InputEmail.module.scss'
import emailjs from '@emailjs/browser';

const InputEmail = ()=>{

    const [email,setEmail]= useState('')

    const send = (e:any)=>{
     
        e.preventDefault();
        emailjs.sendForm('service_htw9cm3','template_ulip9t5',e.target,'vn1OH0j5HBmZzSQ6-')
        setEmail('')
    }


    return (
        <div className={styles.inputEmail}>
            <div className={styles.inputEmailWrapper}>
                    <h3 className={styles.title}>Subscribe</h3>
                    <p className={styles.subtitle}>Sign up for our newsletter to learn about new features, updates and news.</p>
                    <form className={styles.inputBlock} onSubmit={send}>
                        <input type="text" className={styles.input} name='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='E-mail' />
                        <button className={styles.btnSend} type='submit' >Send</button>
                    </form>
            </div>
        </div>
    )
}
export default InputEmail