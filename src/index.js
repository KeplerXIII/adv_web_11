import Character from './js/character.js';
import Team from './js/team.js';

const team1 = new Team();
const character1 = new Character('Bobr', 'animal', 100, 1, 15, 5);
const character2 = new Character('Kurva', 'animal', 100, 1, 15, 5);
team1.addCharacter(character1);
team1.addCharacter(character2);

const teamCharacters = team1[Symbol.iterator]();
console.log(teamCharacters.next().value);
console.log(teamCharacters.next().value);
