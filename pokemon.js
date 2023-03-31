// Your code here!

// note: data validation not required
class Pokemon {
    constructor(name, attack, defense, health, type) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.oldHealth = health;
        this.type = type;
        
        this.takeDamage = function (damage) {
            if (this.health - damage < 0) {
                this.health = 0
            }
            else this.health -= damage;
        }

        this.attackOpponent = function (opponent) {
            if (opponent.defense > this.attack) {
                opponent.takeDamage(1)
            }
            else {
            opponent.takeDamage(this.attack - opponent.defense)
            }

        }
        this.display = function () {
            return this.name.toUpperCase() + " " + "(" + this.type.toUpperCase() + ") " + this.health + "/" + this.oldHealth;
        }

    }
    
}
// Don't edit this line!
module.exports = Pokemon;
