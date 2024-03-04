import RepeatRight from '../../UI/RepeatRight/RepeatRight'
import styles from './RepeatBlock.module.scss'
import trainingBlock from '../../assets/mainTrainingBlock.png'
import { FC } from 'react'
import { IRepeat } from './IRepeat'

const RepeatBlock:FC<IRepeat> = ({img,imgLogo,subtitle,title,isReverse})=>{

    return (

        <div>
            {isReverse?
            <div className={styles.wrapper}>
            <img className={styles.blockImg} src={img} alt="" />
            <RepeatRight  imgLogo={imgLogo} subtitle={subtitle} title={title}  />
           
            </div>
             :
             <div className={styles.wrapper}>
            <RepeatRight imgLogo={imgLogo} subtitle={subtitle} title={title} />
            <img className={styles.blockImg} src={img} alt="" />
            </div>
           }
        </div>
    )
}

export default RepeatBlock