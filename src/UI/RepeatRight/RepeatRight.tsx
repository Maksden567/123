import styles from './RepeatRight.module.scss'
import addTraining from '../../assets/addTraining.png'
import { FC } from 'react'
import { IRepeatRight } from './IRepeatRight'

const RepeatRight:FC<IRepeatRight> = ({imgLogo,subtitle,title})=>{
    return (
        <div className={styles.trainingRight}>
            <div className={styles.trainingRightWrapper}>
                <img className={styles.logo} src={imgLogo} alt="" />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}
export default RepeatRight