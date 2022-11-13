abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Olá, eu sou ${this._name}. Eu uso ataques de perto.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(this._specialMoveName);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Olá, eu sou ${this._name}. Eu uso ataques de longe. `);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this._specialMoveName);
  }
}

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const zoro = new MeeleeCharacter('Roronoa Zoro', 'Santoryu Ougi: Sanzen Sekai');
const usopp = new LongRangeCharacter('Usopp', 'Hissatsu Midoriboshi – Plantanus Shuriken');

characterPresentation(zoro);
characterPresentation(usopp);