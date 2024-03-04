import styles from './Benefits.module.scss'
import imgGreen from '../../assets/carbon_checkmark-filled.png'
import imgBlue from '../../assets/carbon_checkmark-filled (1).png'
import benefitBlock from '../../UI/BenefitBlock/BenefitBlock'
import BenefitBlock from '../../UI/BenefitBlock/BenefitBlock'
import { Element } from 'react-scroll'

const Benefits = ()=>{

    const greenBlock = ['You can set unlimited clients','Unlimited access to statistics','You can move clients to archive','You can create as much training as you need']
    const blueBlock = ['You can set only 5 clients','Limited access to statistics','You can\'t move clients to archive','You can create as much training as you need']


    return (
       
        <div className={styles.blockBenefit}>
           
           <div className={styles.benefitTitle}>
                <h1>Trainers Board</h1>
           </div>
           <div className={styles.benefitBlocks}>

              <BenefitBlock imgUrl={imgGreen} isTrue={true} someBlock={greenBlock} title={'Pro Version'}/>
              <BenefitBlock imgUrl={imgBlue} isTrue={false} someBlock={blueBlock} title={'Free Version'}/>

           </div>

           
        </div>
        
    )
}

export default Benefits;