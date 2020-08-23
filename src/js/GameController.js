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
    this.userTeam = [];
    this.compTeam = [];
    this.userCoordinates = [];
    this.compCoordinates = [];

  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    characterGenerator(); //генерация персонажей
    generateTeam(allowedTypes, 1, 2); //генерация команды
    const user = generateTeam([Bowman, Swordsman], 1, 2); //генерируем команду юзера
    const comp = generateTeam([Vampire, Undead, Daemon], 1, 2); //генерируем команду компа
    //создаём массив с начальными координатами для старта игры
    for (let i = 0; i < this.gamePlay.boardSize ** 2; i++) {
      if (i % this.gamePlay.boardSize === 0) {
        this.userCoordinates.push(i);
      } else if (((i - 1) % this.gamePlay.boardSize) === 0) {
        this.userCoordinates.push(i);
      } else if ((i + 1) % this.gamePlay.boardSize === 0) {
        this.compCoordinates.push(i);
      } else if ((i + 2) % this.gamePlay.boardSize === 0) {
        this.compCoordinates.push(i);
      }
    }
    //отрисовываем команду юзера
    for (const char of user) {
      let indexCoordinate = randomNumber (0, (this.userCoordinates.length - 1));
      if (this.userTeam[0]) { //исключаем создание персов в 1-ой ячейке
        const arr = this.userCoordinates.filter((item) => {
          return item !== this.userTeam[0].position
        });
        indexCoordinate = randomNumber (0, (arr.length - 1));
        this.userTeam.push(new PositionedCharacter(char, arr[indexCoordinate]));
      } else {
        let firstCoordinate = this.userCoordinates[indexCoordinate];
        this.userTeam.push(new PositionedCharacter(char, firstCoordinate));
      } 
    }
    //отрисовываем команду компа
    for (const char of comp) {
      let indexCoordinate = randomNumber (0, (this.compCoordinates.length - 1));
      if (this.compTeam[0]) { //исключаем создание персов в 1-ой ячейке
        const arr = this.compCoordinates.filter((item) => {
          return item !== this.compTeam[0].position
        });
        indexCoordinate = randomNumber (0, (arr.length - 1));
        this.compTeam.push(new PositionedCharacter(char, arr[indexCoordinate]));
      } else {
        let firstCoordinate = this.compCoordinates[indexCoordinate];
        this.compTeam.push(new PositionedCharacter(char, firstCoordinate));
      } 
    }
    this.gamePlay.redrawPositions([...this.userTeam, ...this.compTeam]);
    //this.onCellEnter();
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellClick.bind(this));
    this.gamePlay.addCellClickListener(this.onCellEnter.bind(this));
  }

  onCellClick(index) {
    // TODO: react to click
    console.log(index)

  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    //let message = 'U+1F396'
    console.log(index)
    this.gamePlay.showCellTooltip();
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    console.log(index)
    
  }
}
