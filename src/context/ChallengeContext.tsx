import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye'
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  exprerienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge:  Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps{
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext =  createContext({}as ChallengeContextData);

export function ChallegesProvider({children, ...rest }: ChallengesProviderProps ) {

  const [level, setLevel] = useState( rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState( rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengeCompleted] = useState(rest.challengesCompleted?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const exprerienceToNextLevel = Math.pow((level+1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission(); 
  }, []);
  
  useEffect(()=> {

    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));

  },[level, currentExperience, challengesCompleted]);

  function levelUp () {
    setLevel(level+1);
    setIsLevelUpModalOpen(true);
  }
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉🎉', {
        body: `Valendo ${challenge.amount}xp`
      });
    }
  }
  function resetChallenge(){
    setActiveChallenge(null);
  }
  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }
   const { amount } =  activeChallenge;
   let finalExperience = currentExperience + amount;

    if ( finalExperience >= exprerienceToNextLevel){
      finalExperience = finalExperience - exprerienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengesCompleted + 1);
  }
  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }
  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        exprerienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  );

}

