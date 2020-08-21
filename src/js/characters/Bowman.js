import Character from '../Character';

export default class Bowman extends Character{
  constructor(level = 1, type = 'Bowman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
};
