import Character from '../Character';

export default class Bowman extends Character{
  constructor(level = 1, type = 'bowman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
};
