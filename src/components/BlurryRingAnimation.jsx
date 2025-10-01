// components/BlurryRingAnimation.jsx
import styles from './BlurryRingAnimation.module.css';

export default function BlurryRingAnimation({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={`${styles.ring} ${styles.ringLarge}`} />
      <div className={`${styles.ring} ${styles.ringMedium}`} />
      <div className={`${styles.ring} ${styles.ringSmall}`} />
    </div>
  );
}


