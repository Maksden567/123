import Logo from '../../UI/Logo/Logo'
import styles from './Footer.module.scss'
import appleStore from '../../assets/appStoreLink.png'
import marketStore from '../../assets/googlePlayLink.png'
import { Link } from 'react-router-dom'

const Footer = ()=>{

    const links = ['Terms Of use','Privacy Policy','Opt Out']


    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.headerFooter}>
                    <div className={styles.footerMenu}>
                        <Logo/>
                  
                        <div className={styles.menu}>
                            <li className={styles.link}><Link  to={'/terms'}>Terms Of use</Link></li>
                            <li className={styles.link}><Link to={'/privacy'}>Privacy Policy</Link></li>
                            <li className={styles.link}><Link to={'/optout'}>Opt Out</Link></li>
                        </div>
                  
                    </div>
                    <div className={styles.footerLinks}>
                        <a href="https://apps.apple.com/us/app/tboard-for-personal-trainer/id6447294555"><img src={appleStore} alt="" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.trainersboard"><img src={marketStore} alt="" /></a>
                    </div>
                </div>
                <div className={styles.licensy}>© 2023 Trainers Board - All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer