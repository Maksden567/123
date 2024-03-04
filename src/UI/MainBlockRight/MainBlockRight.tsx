import styles from './MainBlockRight.module.scss'
import calendar from '../../assets/Calendar.png'
import directory from '../../assets/Directory.png'
import client from '../../assets/Client.png'
import training from '../../assets/Add Training.png'


const MainBlockRight = ()=>{
    return (
        <div className={styles.mainBlockRight}>
            <div className={styles.mainBlockRightWrapper}>
                <img src={calendar} alt="" />
                <img src={directory} alt="" />
                
                <img src={client} alt="" />
                <img src={training} alt="" />
                <div className={styles.blur}></div>
            </div>
        </div>
    )
}

export default MainBlockRight