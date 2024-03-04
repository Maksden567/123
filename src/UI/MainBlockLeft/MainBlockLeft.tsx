import styles from './MainBlockLeft.module.scss'
import appStore from '../../assets/AppStoreBtn.png'
import googlePlay from '../../assets/GooglePlay.png'

const MainBlockLeft  = () => {
    return (
        <div className={styles.mainBlockLeft}>
            <div className={styles.mainBlockWrapper}>
                <h1 className={styles.title}>Trainers Board – Personal Trainer App </h1>
                <p className={styles.subtitle}>Effortlessly manage your schedule and client information in one place, simplifying the creation of customized training plans.  
Expertly - designed, Easy - to - use.</p>
                <div className={styles.buttons}>
                    <a href="https://apps.apple.com/us/app/tboard-for-personal-trainer/id6447294555"><img src={appStore} alt="" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.trainersboard"> <img src={googlePlay} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default MainBlockLeft