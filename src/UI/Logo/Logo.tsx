import styles from './Logo.module.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


const Logo = ()=>{

    return (
    <Link to={'/'}>
        <div className={styles.logo}>
           
                <img src={logo} alt="" />
                <h4 className={styles.logoTitle}>Trainers Board</h4>
          
           
        </div> 
        </Link>
    )
}

export default Logo;