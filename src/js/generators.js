import Character from './Character';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

//создаю классы персонажей

class Bowman extends Character{
  constructor(level = 1, type = 'Bowman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
};

class Swordsman extends Character{
  constructor(level = 1, type = 'Swordsman') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
};

class Magician extends Character{
  constructor(level = 1, type = 'Magician') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
};

class Vampire extends Character{
  constructor(level = 1, type = 'Vampire') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
};

class Undead extends Character{
  constructor(level = 1, type = 'Undead') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
};

class Daemon extends Character{
  constructor(level = 1, type = 'Daemon') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
};

const allowedTypes = [Bowman, Swordsman, Magician, Vampire, Undead, Daemon];


export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  for (const char of allowedTypes) { //создаю персонажей для первого уровня
    if (maxLevel === 1 && char !== Magician) {
      const member = new char;
      yield member;
    } else { //создаю персонажей для следующих уровней
      if (char === Vampire || char === Undead || char === Daemon) {
        const level = Math.floor(Math.random() * Math.floor(maxLevel)) + 1; //рандомный уровень для 
        const member = new char(level); //персонажей компьютера
        member.health = 100;
        yield member;
      }
    }
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  for (let i = 0; i < characterCount; i++) { //генерирую заданное кол-во персонажей
    return characterGenerator(allowedTypes, maxLevel).next().value; //получаю конкретного персонажа
  }
}
