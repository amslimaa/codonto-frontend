import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

  const { currentExperience, exprerienceToNextLevel } = useContext(ChallengesContext);


  const percentToNextLevel = Math.round(currentExperience * 100) / exprerienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
    <span>0 xp</span>
    <div>
      <div style={{ width: `${percentToNextLevel}%`}}/>
      <span 
      className={styles.currentExperience}
      style={{left: `${percentToNextLevel}%`}}
      >
        {currentExperience} xp
      </span>
    </div>
    <span>{exprerienceToNextLevel} xp</span>
  </header>
  );
}