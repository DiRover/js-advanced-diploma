import themes from './themes'
import { allowedTypes, characterGenerator, generateTeam, Bowman, Swordsman, Magician, Vampire, Undead, Daemon } from './generators';

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
    const userTeam = generateTeam([Bowman, Swordsman], 1, 2);
    const compTeam = generateTeam([Vampire, Undead, Daemon], 1, 2);
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
