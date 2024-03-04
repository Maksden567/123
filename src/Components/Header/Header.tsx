import { FC, useEffect, useState } from 'react'
import Logo from '../../UI/Logo/Logo'
import Menu from '../Menu/Menu'
import styles from './Header.module.scss'
import burgerMenu from '../../assets/burger.png'
import closeMenu from '../../assets/close.png'
import { Element, Link } from 'react-scroll'

interface IHeader {
    setIsShow(isShow:boolean):void,
    isShow:boolean
}

const Header:FC<IHeader> = ({isShow,setIsShow})=>{

    const [isBurger,setIsBurger] = useState(false)
    
    const [isClose,setIsClose]  = useState(false)

    useEffect(()=>{
        if(window.innerWidth<1250){
            setIsBurger(true)
        }
       
    },[])


    const openMenu = () => {
        setIsClose(true)
        setIsBurger(false)
        setIsShow(true)
    }

     const close = ()=>{
        setIsClose(false)
        setIsBurger(true)
        setIsShow(false)
    }

    return (
      
            
            
            <header className={!isShow?styles.header:styles.headerAdaptive}>

            <div className={styles.headerWrapper}>
                <Logo/>
                <Menu isShow={isShow} close={close} />
                <div className={styles.buttons}>
                    <Link  to='Download'
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500} className={styles.buttonDownload}>Download</Link>
                    {isBurger?<div><img onClick={openMenu} src={burgerMenu}/></div>:null}
                    {isClose?<div><img  onClick={close} src={closeMenu}/></div>:null}
                </div>
                
            </div>
        </header>
            
       
    )
}

export default Header