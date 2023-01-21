import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <ul className={styles.menus}>
        {listItem.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const listItem = ['자기소개', '스킬', '교육', '프로젝트'];
