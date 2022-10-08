import React from 'react';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
    return (
        <div className={styles.wrapper}>
            hello, i am <span className='something'>CSS Module.</span>
        </div>
    );
};

export default CSSModule;