import styles from "../Home/Home.module.css";
import { Logo } from '../../../src/components/Logo';
import { LogoF } from '../../components/LogoF';
import { BtnMain } from '../../components/BtnMain';
import { BtnArticle } from '../../components/BtnArticle';
import pinIcon from '../../assets/pin.png';
import phoneIcon from '../../assets/phone-call.png';
import clockIcon from '../../assets/clock.png';
import instaIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';
import faceIcon from '../../assets/facebook.png';
import plusIcon from '../../assets/google-plus.png';
import crossIcon from '../../assets/cross.png';
import womanArm from '../../assets/woman-arm.jpg';
import submitImg from "../../assets/submit-img.jpg";
import refriCl from '../../assets/refrigerator-cleaning.jpg';
import wallCl from '../../assets/wall-spot-cleaning.jpg';
import baseCl from '../../assets/baseboard-cleaning.jpg';
import { sendForm } from '../../components/helpers/sendForm';
import { showAsideMenu, closeAsideMenu } from '../../components/helpers/showAsideMenu';
import { scrollToTop } from "../../components/helpers/scrollBtn";
import { hideButton } from "../../components/helpers/hideBtn";
import { TypeAnimation } from "react-type-animation";
import '../../Popup.css';
import AOS from 'aos';
import 'aos/dist/aos.css';





export const Home = () => {

    AOS.init();
    window.addEventListener('scroll', hideButton);

    return (
        <div>
            <button id="topButton" className={styles.topButtonScroll} onClick={scrollToTop}>^</button>
            <section id={styles.home}>
                <header>
                    <div className={styles.asideArea}>
                        <div className={`${styles.asideMenuArea} hidden`} id='asideMenu'>
                            <aside>
                                <ul>
                                    <li> <a onClick={scrollToTop}>Home</a> </li>
                                    <li> <a href="./#about">About Us</a> </li>
                                    <li> <a href="./#services">Services</a> </li>
                                    <li> <a href="./#contact">Contact Us</a> </li>
                                </ul>
                            </aside>
                            <div className={styles.asideClose} >
                                <img src={crossIcon} alt="Close Icon" width={40} id='btnToClose' onClick={closeAsideMenu} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.upperArea}>
                            <div className={styles.boxUpperArea}>
                                <div className={styles.contactsBox1}>
                                    <img className={styles.iconArea} src={pinIcon} alt="Pin icon" />
                                    <p> Adress Name: 61 Lincoln Ave, Saugus MA </p>
                                </div>
                                <div className={styles.contactsBox1}><img className={styles.iconArea} src={phoneIcon} alt="Phone icon" />
                                    <p> (781) - 299 - 5580</p></div>
                                <div className={styles.contactsBox1}><img className={styles.iconArea} src={clockIcon} alt="Clock Icon" />
                                    <p> Full Time </p></div>
                                {/*    
                                <div className={styles.socialsBox1}>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={twitterIcon} alt="Twitter Icon" /></a>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={faceIcon} alt="Facebook Icon" />
                                    </a>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={instaIcon} alt="Instagram Icon" />
                                    </a>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={plusIcon} alt="Google Plus Icon" />
                                    </a>
                                </div>
                                */}
                            </div>
                        </div>
                        <div className={styles.lowerTotalArea}>
                            <div className={styles.lowerArea}>
                                <div className={styles.totalMenuArea}>
                                    <Logo />
                                    <div className={styles.totalNavArea}>
                                        <nav>
                                            <ul>
                                                <li> <a href="./#home" >Home  </a> </li>
                                                <li> <a href="./#about">About Us  </a> </li>
                                                <li> <a href="./#services">Services </a> </li>
                                                <li> <a href="./#contact">Contact Us  </a> </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className={styles.asideBtnArea} id="btnToShow" onClick={showAsideMenu}>
                                        <div className={styles.asideBar}></div>
                                        <div className={styles.asideBar}></div>
                                        <div className={styles.asideBar}></div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </header >

                <main>
                    <div className={styles.bgTotalArea}>
                        <div className={styles.homeTitleArea}>

                            <TypeAnimation

                                sequence={[
                                    'We Clean Your Home',
                                    1000,
                                ]}
                                speed={30}
                                style={{ fontSize: '2em' }}
                                wrapper="div"
                                repeat={0}
                            />
                            <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                                We are a fully insured cleaning company
                            </h1>
                            <BtnMain />
                        </div>

                    </div>
                </main>
            </section>
            <article>
                <section id="about">
                    <div className={styles.boxArticleArea}>
                        <div className={styles.articleArea1} data-aos='fade-up' data-aos-duration="2000">
                            <img src={womanArm} alt="Cleaning Table" />
                        </div>
                        <div className={styles.articleArea2} data-aos='fade-up' data-aos-duration="2000">
                            <div className={styles.littleBar1}></div>
                            <h3>
                                The most reliable cleaning service
                            </h3>
                            <h2>
                                About Our Company
                            </h2>
                            <p>
                                We specialize in refrigerator, baseboard, wall spot cleaning and more. We are dedicated to improving the look and value of homes and small business in their communites.
                            </p>
                            <BtnArticle />
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div className={styles.boxArticleArea2}>
                        <div className={styles.boxOurServices}>
                            <div className={styles.infoServices}>
                                <h3>What we are offering</h3>
                                <div className={styles.underH3}></div>
                                <h2>Our Services</h2>
                            </div>
                            <div className={styles.boxesServices}>
                                <div className={styles.servicesContainers} data-aos='fade-up' data-aos-duration="2000">
                                    <img src={refriCl} alt="Refrigerator Cleaning" />
                                    <h2>
                                        Refrigerator Cleaning
                                    </h2>
                                    <p>
                                        We use safe and effective cleaning products to remove built-up grime and bacteria, leaving your refrigerator looking and smelling like new.
                                    </p>
                                </div>
                                <div className={styles.servicesContainers} data-aos='fade-up' data-aos-duration="2000">
                                    <img src={wallCl} alt="Wall Spot Cleaning" />
                                    <h2>
                                        Wall Spot Cleaning
                                    </h2>
                                    <p>
                                        Our team of experienced cleaners use a variety of techniques and specially formulated cleaning solutions to remove any type of stain, from crayon and marker to grease and oil.                  </p>
                                </div>
                                <div className={styles.servicesContainers} data-aos='fade-up' data-aos-duration="2000">
                                    <img src={baseCl} alt="Baseboard Cleaning" />
                                    <h2>
                                        Baseboard Cleaning
                                    </h2>
                                    <p>
                                        Our baseboard cleaning service is not just limited to residential properties. We also provide our services to commercial spaces such as offices, retail stores, and more.                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className={styles.boxArticleArea3}>
                        <div className={styles.articleArea1} data-aos='fade-up' data-aos-duration="2000">
                            <img src={submitImg} alt="Submit Image" />
                        </div>
                        <div className={styles.articleArea2} data-aos='fade-up' data-aos-duration="2000">
                            <div className={styles.littleBar1}></div>
                            <h2>
                                Make an appointment
                            </h2>
                            <form className={styles.formArea} onSubmit={sendForm} >
                                <input className={styles.formElement} type="text" placeholder="Your Name" name="name" required />
                                <input className={styles.formElement} type="email" placeholder="Email Address" name="email" required />
                                < input className={styles.formElement} type="tel" placeholder="Phone" name="phone" required />
                                < input className={styles.formElementSub} type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </section>
            </article>
            <footer>
                <div className={styles.containerFooter}>
                    <div className={styles.lowerTotalAreaFooter}>
                        <div className={styles.lowerArea}>
                            <div className={styles.totalMenuArea}>
                                <LogoF />
                                <div className={styles.reservedRights}>
                                    Copyright ©2023 Sueli's Cleaning House. All rights reserved. Design and developed by Thiago de Oliveira.
                                </div>
                                <div className={styles.contactsBox1}><img className={styles.iconArea} src={phoneIcon} alt="Phone icon" />
                                    <p> (781) - 299 - 5580</p></div>

                                {/*<div className={styles.socialsBox1}>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={twitterIcon} alt="Twitter Icon" /></a>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={faceIcon} alt="Facebook Icon" />
                                    </a>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={instaIcon} alt="Instagram Icon" />
                                    </a>
                                    <a href="./">
                                        <img className={styles.socialsArea} src={plusIcon} alt="Google Plus Icon" />
                                    </a>
                            </div>*/}
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </div >


    );

};



