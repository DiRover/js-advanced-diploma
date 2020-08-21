import Character from '../Character';

export default class Daemon extends Character{
  constructor(level = 1, type = 'Daemon') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
};
