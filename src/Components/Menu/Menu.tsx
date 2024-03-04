import { FC, useState } from 'react'
import styles from './Menu.module.scss'
import { Link } from 'react-scroll'


interface IMenu {
    isShow: boolean
    close():any
}


const Menu: FC<IMenu> = ({ isShow,close }) => {

    const [active, setActive] = useState(0)
    const items = ['Home', 'Pricing', 'Download']

   

    return (
        <div>
            {!isShow && window.innerWidth > 1250 ? <div className={styles.menu}>
                {items.map((item, index) => <li  className={active == index ? styles.itemActive : styles.item}>
                    {index == 0 ? <Link
                        to='Home'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => setActive(index)}
                    >{item}</Link> : index == 1 ? <Link
                        to='Pricing'
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                        onClick={() => setActive(index)}
                    >{item}</Link> : index == 2 ? <Link
                        to='Download'
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                        onClick={() => setActive(index)}
                    >{item}</Link> : null}</li>)}

            </div> : <div className={isShow ? styles.menuAdaptive : styles.menuAdaptiveClose}>
                {isShow ? items.map((item, index) => <li onClick={() => setActive(index)} className={isShow ? styles.itemAdaptive : ''}>{index == 0 ? <Link
                        to='Home'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={()=>{setActive(index); close() }}
                    >{item}</Link> : index == 1 ? <Link
                        to='Pricing'
                        spy={true}
                        smooth={true}
                        offset={0}
                        
                        duration={500}
                        onClick={()=>{setActive(index); close() }}
                    >{item}</Link> : index == 2 ? <Link
                        to='Download'
                        spy={true}
                        smooth={true}
                        offset={0}
                        isDynamic={true}
                        duration={500}
                        onClick={()=>{setActive(index); close() }}
                    >{item}</Link> : null}</li>) : null}
            </div>}
        </div>

    )
}

export default Menu
