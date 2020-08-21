import Character from './Character';
import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import randomNumber from './randomNumber';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

//создаю классы персонажей


export const allowedTypes = [Bowman, Swordsman, Magician, Vampire, Undead, Daemon];

export function* characterGenerator(allowedTypes, maxLevel) {
    // TODO: write logic here
  for (let i = 0; i < allowedTypes.length; i++) {
    const memberIndex = randomNumber(0, (allowedTypes.length - 1));
    const level = randomNumber(1, maxLevel);
    const member = new allowedTypes[memberIndex](level);
    yield member
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  for (let i = 0; i < characterCount; i++) { 
    team.push(characterGenerator(allowedTypes, maxLevel).next().value); 
  }
  return team;
}
