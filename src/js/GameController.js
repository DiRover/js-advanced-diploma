import themes from './themes'
import { allowedTypes, characterGenerator, generateTeam } from './generators';
import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import PositionedCharacter from './PositionedCharacter';
import randomNumber from './randomNumber';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    characterGenerator(); //генерация персонажей
    generateTeam(allowedTypes, 1, 2); //генерация команды
    const user = generateTeam([Bowman, Swordsman], 1, 2);
    //console.log(user)
    const comp = generateTeam([Vampire, Undead, Daemon], 1, 2);
    const userTeam = [];
    const compTeam = [];
    for (const char of user) {
      const userCoordinates = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
      if (userTeam[0]) { //исключаем координату первого перса
        userCoordinates.map((item) => {
          item !== userTeam[0].position;
        })
      }
      const coordinate = randomNumber(0, (userCoordinates.length - 1));
      userTeam.push(new PositionedCharacter(char, userCoordinates[coordinate]));
    }
    for (const char of comp) {
      const compCoordinates = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
      if (compTeam[0]) { //исключаем координату первого перса
        compCoordinates.map((item) => {
          item !== compTeam[0].position;
        });
      }  
      const coordinate = randomNumber(0, (compCoordinates.length - 1));
      compTeam.push(new PositionedCharacter(char, compCoordinates[coordinate]));
    }
    
    this.gamePlay.redrawPositions([...userTeam, ...compTeam]);

  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
