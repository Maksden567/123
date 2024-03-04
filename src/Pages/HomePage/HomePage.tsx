import { useEffect, useState } from 'react'
import '../../App.css'
import Header from '../../Components/Header/Header'
import MainBlock from '../../Components/MainBlock/MainBlock'
import RepeatBlock from '../../Components/RepeatBlock/RepeatBlock'
import { IRepeat } from '../../Components/RepeatBlock/IRepeat'
import mainAddTraining from '../../assets/mainTrainingBlock.png'
import addTraining from '../../assets/addTraining.png'
import mainCalendar from '../../assets/mainCalendar.png'
import logoCalendar from '../../assets/calendarLogo.png'
import mainDirectory from '../../assets/mainDirectory.png'
import directoryLogo from '../../assets/directoryLogo.png'
import clientLogo from '../../assets/logoClient.png'
import mainClient from '../../assets/mainClient.png'
import mainStatistic from '../../assets/mainStatistics.png'
import logoStatistic from '../../assets/logoStatistic.png'
import Benefits from '../../Components/Benefits/Benefits'
import BlockLinks from '../../Components/BlockLinks/BlockLinks'
import InputEmail from '../../Components/InputEmail/InputEmail'
import Footer from '../../Components/Footer/Footer'
import { Element } from 'react-scroll'
import styles from './HomePage.module.scss'


function HomePage() {
    const [count, setCount] = useState(0)
    const [isShow, setIsShow] = useState(false)

    const repeatItems: IRepeat[] = [
        {

            img: mainAddTraining,
            imgLogo: addTraining,
            isReverse: true,
            title: 'Simple and easy create training for your clients',
            subtitle: "Create group or individual classes, make a plan for the week ahead - everything is simple and convenient. Our interface makes creating workouts easy and straightforward. Start your client's journey to the goal right now!"
        },
        {

            img: mainCalendar,
            imgLogo: logoCalendar,
            isReverse: false,
            title: 'Clear representation of your schedule',
            subtitle: "Forget about the inconvenience of managing your workout schedule - we have an intuitive and easily customizable interface, and workout creation and statistics are available in a flash. "
        },
        {

            img: mainDirectory,
            imgLogo: directoryLogo,
            isReverse: true,
            title: 'All clients are in one place',
            subtitle: "All clients are collected in one place, you can easily add them to the archive and restore them. Each client's training schedule is always at your fingertips. Efficiency and organization are your reliable companions in this business!"
        },
        {

            img: mainClient,
            imgLogo: clientLogo,
            isReverse: false,
            title: 'All important informarion about your client',
            subtitle: "Keep track of your client's workout history, set and achieve goals, view workout, payment and time allocation statistics. All the information you need is at your fingertips. "
        },
        {

            img: mainStatistic,
            imgLogo: logoStatistic,
            isReverse: true,
            title: 'Easy and simple',
            subtitle: "With statistics you can find out how many workouts you have done in a week, a month or more. Keep track of how much time you spent on conducting training sessions. You can also find out how much you earned and for this you don't need to write it down in a notebook every time, but just specify the price of training for the client when creating it. Everything is easy and simple with our statistics!"
        }
    ]

    useEffect(() => {
        const body = document.querySelector('body');
        if (isShow) {
            body ? body.style.overflow = 'hidden' : null;
        }
        else {
            body ? body.style.overflow = 'auto' : null;
        }
    }, [isShow])

    return (
        <>
        <Element name='Home'>
            <div className="container">
                <Header isShow={isShow} setIsShow={setIsShow} />
                <div className={'wrapper'}>


                    <MainBlock />
                    {repeatItems.map((item, index) => <RepeatBlock img={item.img} imgLogo={item.imgLogo} isReverse={window.innerWidth > 1100 ? item.isReverse : true} subtitle={item.subtitle} title={item.title} />)}
                    <Element name='Pricing' >
                        <div className={styles.pricingBlock}>
                            
                        </div>
                        <Benefits />
                        
                        </Element>
                    <BlockLinks />
                    <InputEmail />
                    <Footer />

                </div>
                {isShow ? <div className={'overlap'} style={{}}></div> : null}
            </div>
        </Element>
            

        </>
    )
}

export default HomePage
