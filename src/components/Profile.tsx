import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import style from '../styles/components/Profile.module.css';
export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/amslimaa.png" alt="Amós Lima"/>
      <div>
        <strong>Amós Lima</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}