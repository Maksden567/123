import  styles from './BlockLinks.module.scss'
import appleStore from '../../assets/AppStoreBtn.png'
import playMarket from '../../assets/GooglePlay.png'
import { Element } from 'react-scroll'


const BlockLinks = ()=>{
    return (
       <Element name='Download'   >
            <div className={styles.blockLinks}  >
            <div className={styles.blockLinksWrapper}>
                <p className={styles.subtitle}>Download our app to speed up your work and make it easier with our simple, clear and easy to use features. Enjoy order in your schedule, structure it, view statistics and much more with Trainers Board!</p>
                <div className={styles.blockLinksButtons}>
                    <a href="https://apps.apple.com/us/app/tboard-for-personal-trainer/id6447294555" className={styles.appLink}><img src={appleStore} alt="" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.trainersboard" className={styles.appLink}><img src={playMarket} alt="" /></a>
                </div>
            </div>
        </div>

       </Element>
    )
}

export default BlockLinks