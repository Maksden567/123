import { FC } from 'react';
import styles from './BenefitBlock.module.scss'
import { IBenefitBlock } from './IBenefitBlock';



const BenefitBlock:FC<IBenefitBlock> = ({someBlock,title,isTrue,imgUrl})=>{

    return (
 

        <div className={styles.benefitBlock}>

                <div className={styles.benefitBlockTitle} >
                    <h1 style={isTrue?{color:"#34C759"}:{color:"black"}}>{title}</h1>
                    {isTrue?<p>Two weeks free, then 3,99 USD / Month.</p>:null}
                </div>
                
                <ul className={styles.benefitList}>
                    {someBlock.map(item=>(
                         <li className={styles.benefitListItem}>
                         <div className={styles.benefitListItemImage}><img src={imgUrl} alt="" /></div>
                         <div className={styles.benefitListItemParagraph}><p >{item}</p></div>
                        </li>
                    ))}
                   
                </ul>

   

   </div>
    )
}

export default BenefitBlock;