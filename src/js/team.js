export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        
        if (this.members.has(character)) {
          throw new Error('Выбранный персонаж уже добавлен.');
        } else {
            this.members.add(character);
        }
    }

    addAll(...character) {
      character.forEach(el => this.members.add(el));
    }

    toArray() {
        return Array.from(this.members);
    }
}