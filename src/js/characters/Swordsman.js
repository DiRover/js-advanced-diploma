import Character from '../Character';

export default class Swordsman extends Character{
  constructor(level = 1, type = 'swordsman') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
};
