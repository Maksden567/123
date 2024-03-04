import { useEffect, useState } from 'react'
import '../../App.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import TextBlock from '../../Components/TextBlock/TextBlock'
import styles from './PrivacyPolicy.module.scss'


function PrivacyPolicy() {

    const [isShow, setIsShow] = useState(false)



    useEffect(() => {
        const body = document.querySelector('body');
        if (isShow) {
            body ? body.style.overflow = 'hidden' : null;
        }
        else {
            body ? body.style.overflow = 'auto' : null;
        }
    }, [isShow])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="container">
                <Header isShow={isShow} setIsShow={setIsShow} />
                <div className={styles.wrapper}>

                    <div className={'wrapper'}>
                       <TextBlock title='Privacy Policy' p={['Eduard Kulyk built the Trainers Board app as a Freemium app. This SERVICE is provided by Eduard Kulyk at no cost and is intended for use as is.','This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.','If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.','The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Trainers Board unless otherwise defined in this Privacy Policy.']}/>
                       <TextBlock title='Information Collection and Use' p={['For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to device id. The information that I request will be retained on your device and is not collected by me in any way.','The app does use third-party services that may collect information used to identify you.','Link to the privacy policy of third-party service providers used by the app']}/>
                       <ul className={styles.menu}>
                            <li><a href="#">Google Analytics for Firebase</a></li>
                            <li><a href="#">Firebase Crashlytics</a></li>
                            <li><a href="#">Meta Developers</a></li>
                            <li><a href="#">RevenueCat</a></li>
                        </ul>
                        <TextBlock title='Log Data' p={['I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.']} />                      
                        <TextBlock title='Cookies'  p={['Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device`s internal memory.','This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.']} />
                        <TextBlock title='Service Providers' p={['I may employ third-party companies and individuals due to the following reasons:']}/>
                        <ul className={styles.menuSecurity}>
                            <li>Google Analytics for Firebase</li>
                            <li>Firebase Crashlytics</li>
                            <li>Meta Developers</li>
                            <li>RevenueCat</li>
                        </ul>
                        <TextBlock title='' p={['I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.']}/>
                        <TextBlock title='Security' p={['I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.']} />
                        <TextBlock title='Links to Other Sites' p={['This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.']}/>
                        <TextBlock title='Children’s Privacy' p={['These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.']} />
                        <TextBlock title='Changes to This Privacy Policy' p={['I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.','This policy is effective as of 2023-04-05']}  />
                        <TextBlock title='Contact Us' p={['If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at info@trainersboard.com.']} />
                    </div>
                    {isShow ? <div className={'overlap'} style={{}}></div> : null}
                </div>
                <Footer />
            </div>

        </>
    )
}

export default PrivacyPolicy
