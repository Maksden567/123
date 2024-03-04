import MainBlockLeft from "../../UI/MainBlockLeft/MainBlockLeft"
import MainBlockRight from "../../UI/MainBlockRight/MainBlockRight"
import styles from './MainBlock.module.scss'

const MainBlock = () => {
    
    
    return (
        <div className={styles.mainBlock}>
            <div className={styles.mainBlockWrapper}>
                <MainBlockLeft/>
                <MainBlockRight/>
            </div>
            
        </div>
    )


}

export default MainBlock