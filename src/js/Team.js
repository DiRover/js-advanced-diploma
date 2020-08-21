import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';

export default class Team {
  static getFistUserTeam() {
    return [Bowman, Swordsman]
  }
  static getUserTeam() {
    return [Bowman, Swordsman, Magician]
  }
  static getCompTeam() {
    return [Daemon, Undead, Vampire]
  }
}
