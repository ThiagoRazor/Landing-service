import styles from '../BtnArticle/BtnArticle.module.css';
import phone from '../../assets/phone-call.png';
import React, { useState } from 'react';


export const BtnArticle = () => {

    return (
        <div className={styles.btnArea}>
            <div className={styles.btn} >
                <img src={phone} alt="Phone" />
                <a href="tel:+(781)2995580"> Call us today: (781) - 299 - 5580</a>
            </div>
        </div>
    );
}
