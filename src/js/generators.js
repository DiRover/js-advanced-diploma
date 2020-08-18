import Character from './Character';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

//создаю классы персонажей

export class Bowman extends Character{
  constructor(level = 1, type = 'Bowman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
};

export class Swordsman extends Character{
  constructor(level = 1, type = 'Swordsman') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
};

export class Magician extends Character{
  constructor(level = 1, type = 'Magician') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
};

export class Vampire extends Character{
  constructor(level = 1, type = 'Vampire') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
};

export class Undead extends Character{
  constructor(level = 1, type = 'Undead') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
};

export class Daemon extends Character{
  constructor(level = 1, type = 'Daemon') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
};

export const allowedTypes = [Bowman, Swordsman, Magician, Vampire, Undead, Daemon];

export function* characterGenerator(allowedTypes, maxLevel) {
    // TODO: write logic here
  for (let i = 0; i < allowedTypes.length; i++) {
    const memberIndex = Math.floor(Math.random() * Math.floor(allowedTypes.length - 1)) + 1;
    const level = Math.floor(Math.random() * Math.floor(maxLevel)) + 1;
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
