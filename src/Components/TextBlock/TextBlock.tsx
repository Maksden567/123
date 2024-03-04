import { FC } from 'react'
import styles from './TextBlock.module.scss'



interface ITextBlock {
    title:string,
    p:string[]
}

const TextBlock:FC<ITextBlock> = ({title,p})=>{
    return (
        <div className={styles.textBlock}>
            <strong className={styles.title}>{title}</strong>
            {p.map(item=><p className={styles.subtitle}>{item}</p>)}
        </div>
    )
}

export default  TextBlock