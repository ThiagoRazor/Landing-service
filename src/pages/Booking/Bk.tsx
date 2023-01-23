import styles from "../../pages/Booking/Bk.module.css";
import '../../Popup.css';
import { Logo } from '../../components/Logo';
import { LogoF } from '../../components/LogoF';
import pinIcon from '../../assets/pin.png';
import phoneIcon from '../../assets/phone-call.png';
import clockIcon from '../../assets/clock.png';
import instaIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';
import faceIcon from '../../assets/facebook.png';
import plusIcon from '../../assets/google-plus.png';
import crossIcon from '../../assets/cross.png';
import submitImg from "../../assets/submit-img.jpg";
import React, { useState } from 'react';
import { sendForm } from '../../components/helpers/sendForm';
import { showAsideMenu, closeAsideMenu } from '../../components/helpers/showAsideMenu';
import Aos from "aos";

export const Bk: React.FC = () => {


    return (
        <div>

            <section id={styles.home}>
                <header>
                    <div className={styles.asideArea} >
                        <div className={`${styles.asideMenuArea} hidden`} id='asideMenu'>
                            <aside>
                                <ul>
                                    <li> <a href="./">Home</a> </li>
                                    <li> <a href="./#about">About Us</a> </li>
                                    <li> <a href="./#services">Services</a> </li>
                                    <li> <a href="./#contact">Contact Us</a> </li>
                                </ul>
                            </aside>
                            <div className={styles.asideClose}>
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
                                                <li> <a href="./#home">Home</a> </li>
                                                <li> <a href="./#about">About Us</a> </li>
                                                <li> <a href="./#services">Services</a> </li>
                                                <li> <a href="./#contact">Contact Us</a> </li>
                                            </ul>'
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
            </section>
            <article>
                <section id="contact">
                    <div className={styles.boxArticleArea3}>
                        <div className={styles.articleArea2}>
                            <div className={styles.littleBar1}></div>
                            <h2>
                                Make an appointment
                            </h2>
                            <form className={styles.formArea} onSubmit={sendForm} >
                                <input className={styles.formElement} type="text" placeholder="Your Name" name="name" required />
                                <input className={styles.formElement} type="email" placeholder="Email" name="email" required />
                                < input className={styles.formElement} type="tel" placeholder="Phone" name="phone" required />
                                <input className={styles.formElement} type="text" placeholder="Address" name="address" required />
                                <input className={styles.formElement} type="text" placeholder="City" name="city" required />
                                <input className={styles.formMsgElement} type="text" placeholder="Message" name="message" />
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
                                    </div>
                                */}
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div >


    );


};
