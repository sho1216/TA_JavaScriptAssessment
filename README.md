# JavaScript Assessment - Teaching Assistant

The All Star Code Teaching Assistant JavaScript Assessment consists of 3 tasks, to be completed and turned in to dante@allstarcode.org as a GitHub gist.

### **IT IS NOT NECESSARY PASS ALL TEST SPECS TO GET HIRED. JUST DO YOUR BEST! :smile:**

### Steps to Tackling the Assessment
1. Clone or download this repo.

2. Navigate into the repo from command line and before doing anything else, run the command `npm install`.
    - If any error occurs, run `npm init`. Hit enter for all the questions and enter `npm install` again.
    - If command is not found for `npm install` or `npm init`, install node.js here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and repeat step #2.

3. Follow the prompts for each task and do your best!
<br>

### Notes
- The tests folder contains test files in which your functions will be tested with. Feel free to look at the tests, but **DO NOT** edit them. These exact tests will be used to test your answers when you submit your work.
- **Info on testing your work with the provided test specs is included at the end of the document.**
<br>

---

## Task #1 - Define a `Pokemon` Class
- Write your code in **pokemon.js** in the cloned or downloaded folder.
- Construct and initialize a `Pokemon` object by passing in 5 arguments that corresponds to the following 5 properties in order: `.name`, `.attack`, `.defense`, `.health`, and `.type`.
   - Example:
   ```javascript
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    console.log(charmander.name);    // charmander
    console.log(charmander.attack);  // 12
    console.log(charmander.defense); // 8
    console.log(charmander.health);  // 30
    console.log(charmander.type);    // fire
   ```
   - Data type validation is not needed. You can assume that the following `property`: type pairing is always used:
      * `.name`: string
      * `.attack`: number
      * `.defense`: number
      * `.health`: number
      * `.type`: string

<br>

## Task #2 - `takeDamage()` Method
- Implement a `takeDamage()` method for the `Pokemon` class which takes a number as an argument and reduces the `.health` of the `Pokemon` by that number.
   - _Note: If `.health` goes below 0, it should be set to 0 instead._
   - Example:
   ```javascript
    console.log(charmander.health);  // 30

    charmander.takeDamage(5);
    console.log(charmander.health);  // 25

    charmander.takeDamage(2000);
    console.log(charmander.health);  // 0
   ```

<br>

## Task #3 - `attackOpponent()` Method
- Implement an `attackOpponent()` method for the `Pokemon` class which takes a `Pokemon` object as an argument (the opponent being attacked). This method should call the `takeDamage()` method of the opposing `Pokemon` and provide the appropriate damage as an argument.
   <br>
`DAMAGE = CURRENT_POKEMON_ATTACK - OPPONENT_POKEMON_DEFENSE`.
   - Example:
   ```javascript
    const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
    const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");

    console.log(charmander.attack);  // 12
    console.log(bulbasaur.defense);  // 9
    // 12 attack - 9 defense = 3 damage

    console.log(bulbasaur.health);  // 35
    charmander.attackOpponent(bulbasaur);   // charmander attacks bulbasaur
    console.log(bulbasaur.health);  // 32
   ```
   - Attacking a `Pokemon` should do 1 damage __at the very least__. Consider cases in which the `Pokemon` being attacked has a higher `.defense` than the `.attack` of the attacking `Pokemon`.

<br>

## Task #4 - `display()` Method
- Implement a `display()` method for the `Pokemon` class which takes no arguments and returns a string with the Pokemon's `.name` in all caps, `.type` in all caps and in parenthesis, and `.health` with a forward-slash, "/", followed by the `.health` the `Pokemon` was initialized with.
   - Example:
   ```javascript
    const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
    pikachu.display(); // "PIKACHU (ELECTRIC) 25/25"

    pikachu.health = 12;
    pikachu.display(); // "PIKACHU (ELECTRIC) 12/25"
   ```

   <br>

---

### EXTRA CREDIT CHALLENGES
*The extra credit challenges are optional. Only attempt this if you've passed all the tests for Task #1 - #4.
    <br>
Please note that test cases for the extra credit challenges are not included in this repo.*

### **Context**
In Pokemon, as you may already know, your character catches Pokemon. A Pokemon trainer can encounter wild Pokemon by walking through wild grass. The chance of an encounter can be represented by the following equation:


`p = (val / 187.5) * 100` for each move.

- *p* : chance of encountering a wild Pokemon
- *val* : numerical value based on the rarity of a Pokemon

| Rarity | Numerical Value *(val)* |
|:------:|:---------------------:|
|Very Common | 10|
| Common | 8.5   |
| Semi-rare | 6.75 |
| Rare | 3.33 |
| Very Rare | 1.25 |

Before proceeding, declare a new property for your `Pokemon` object - `.rarity` that holds a string. No data validation needed.

<br>

## EC Task #1 - checkGrass() Method
- Implement a `checkGrass()` method for the `Pokemon` class which takes two arguments - an array of `Pokemon` objects and a tile.
- Check the tile:
   - If the tile input is `'░'` (ground), return `0` as there is no chance of encountering a Pokemon there.
   - If the tile input is not `'░'` (ground) or `'▓'` (grass), throw a TypeError with the message: `'Input is not a tile!'`
   - If the tile input is `'▓'` (grass), return an object of the probability of encountering each Pokemon in the given array, from highest to lowest probability, in the following format: 
   ```
   {
      pokemon1_name: encounter_chance,
      pokemon2_name: encounter_chance
   }
   ```
   *The probability of encounter should be rounded to 2 decimal places.*

<br>

## EC Task #2 - didEncounter() method
- Implement a `didEncounter()` method for the `Pokemon` class which takes a floating point number `chance`.
- `chance` represents the chance of encounter of an instance of the `Pokemon` class. 
- The `didEncounter()` method would return a boolean `true` or `false` based on the result of the chance taken.
- Example:
    - `didEncounter(100.00) -> true`
    - *This would always return true because of the 100.00% encounter chance.*

<br>

## EC Task #3 - exploreArea() Method
- Implement an `exploreArea()` method for the `Pokemon` class which takes 4 arguments:
   - `indigenous_pokemon`: an array of at least 1 `Pokemon` object. If there are no Pokemon in the array, throw an error with the message: "No Pokemon in this area".
   - `moves`: an object of movements, in the following format:
    ```
    {
        up: n,
        down: n,
        left: n,
        right: n
    }
    ```
    where n is an integer between 1 and 5 (inclusive). If n > 5 or n < 1, throw an error with the message: "Invalid moves object".
   - `bag`: an object of pokemon caught and pokeballs remaining.
    ```
    {
        caught_pokemon: [pokemon1, pokemon2],
        remaining_pokeballs: r
    }
    ```
    where `caught_pokemon` is an array of pokemon objects (always starts empty) and `r` is an integer between 1 and 15. If `caught_pokemon` does not start empty or `remaining_pokeballs` exceeds the upper/lower limit, throw an error with the message: "Invalid bag object".
   - `explore_area`: an array of subarrays consisting of:
        - `'░'` (ground)
        - `'▓'` (grass)
        - **ONE** Pokemon trainer `'⚉'`
          - *Note: The trainer will not encounter any Pokemon at the start of game.*
       - The `explore_area` (trainer excluded) will always look like this:
      ```
      [
         ['▓▓▓▓▓▓▓▓▓▓'],

         ['▓▓▓░▓▓▓░░░'],

         ['▓▓▓░░░▓░░▓'],

         ['▓░░░░░░░▓░'],

         ['▓▓▓▓▓░░░░▓']
      ]
      ```
      - If a different `explore_area` is given, throw a an error with the message: "Unknown exploration area"
- Starting where the player `'⚉'` is, the player should move in one of the 4 directions chosen randomly, but the player should never go out of bounds. *E.g. if the player is in the first row, the player should not be able to go up.* 
- For each tile of `explore_area` the player moves to, the following should happen:
   - Subtract one from the corresponding direction in the `moves` object.
   - If the tile is `'░'` (ground), do nothing.
   - If the tile is `'▓'` (grass):
      - Check if the player encountered any `indigenous_pokemon` based on the chances of encountering a wild Pokemon, `p = (x / 187.5) * 100`. This check should be determined using the `didEncounter()` method on each Pokemon the player might encounter. 
      - If the player "encounters" multiple Pokemon, the most common Pokemon is selected.
   - If the player encounters a Pokemon, the player will always attempt to catch it as long as `remaining_pokeballs` is not `0`.
        - The chances of catching a Pokemon is **double** its Numeric Value, *val*.
   - Move again. 
- Repeat this process the player exhausted the `moves` in all directions. 
- After that, return the following object:
    ```
    {
      player_start: {
        index: 0,
        string_index: 0,
      },
      player_movements: [],
      result_area: [],
      num_enc: 0,
      caught_pokemon: [],
      leftover_pokeballs: n
    }
    ```
    - `player_start`: An object that consists of
       - `index`: Index of the player's starting position in the subarray
       - `string_index`: Index of the player's starting position in the string within the subarray 
   - `player_movements`: Array of all of the moves the player made - `up`, `down`, `left`, and `right`
   - `result_area`: `explore_area` with the player in the final position
   - `num_enc`: Number of Pokemon encountered
   - `caught_pokemon`: Array of all Pokemon caught, all instances of the `Pokemon` class
   - `leftover_pokeballs`: Number of remaining pokeballs

<br>

**Example:**
*Please note that the following example is NOT a possible occurence. It is intended to show a sample output that correctly corresponds to the given input.*
```javascript=
let area = [

   ['▓▓▓▓▓▓▓⚉▓'],

   ['▓▓▓░▓▓▓░░░'],

   ['▓▓▓░░░▓░░▓'],

   ['▓░░░░░░░▓░'],

   ['▓▓▓▓▓░░░░▓']
];

let movements = {
    left: 2,
    down: 0,
    right: 0,
    up: 0,
}

let charmander = new Pokemon('Charmander', 50, 65, 100, 'fire', 'very common');

let nativePokemon = [charmander];

let backpack = {
    caught_pokemon: [],
    pokeBalls: 2
}


let result = exploreArea(nativePokemon, movements, backpack, area);

console.log(result);
```
**Console Output:**

```shell=
{
  player_start: {
    index: 0,
    string_index: 6
  },
  player_movements: ['left','left'],
  result_area: [

   ['▓▓▓▓▓⚉▓░▓'],

   ['▓▓▓░▓▓▓░░░'],

   ['▓▓▓░░░▓░░▓'],

   ['▓░░░░░░░▓░'],

   ['▓▓▓▓▓░░░░▓']
],
  num_enc: 1,
  caught_pokemon: [charmander],
  leftover_pokeballs: 1
}
```
**Explanation:**

- `player_start`: The player's started in the first subarray (index 0) and sixth index of the string within the subarray.
- `player_movements`: The player only had 2 left moves.
- `result_area`: The player moved left twice and ended up 2 tiles to the left of the starting position.
- `num_enc`: The player encountered 1 Pokemon.
- `caught_pokemon`: The player caught the encountered Pokemon.
- `leftover_pokeballs`: The number of remaining Pokeball went down by 1 after catching one Pokemon.

---

### TESTING YOUR POKEMON CLASS
- The tests are setup with commands to test your answers for each individual task. This will only work properly if there are:
    - No errors for `npm install` command
    - No modifications to any files in the `tests` folder
    - No modifications to any scripts commands in the `package.json` file
    - No modifications to `module.exports` at the end of `pokemon.js`

- Use the following command to test your work in the cloned or downloaded folder:
    - `npm run test` to test your Pokemon class and methods.
<br>

The output for a test:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
Snapshots:   0 total
Time:        1.781s
Ran all test suites matching /tests\\pokemon.test.js/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! teachingFellows@1.0.0 test_string: `jest tests/pokemon.test.js`
npm ERR! Exit status 1
```
Your output may look different based on the specific task and the number of tests passed/failed.
<br><br>
Take note of these 2 lines:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
```

The output above indicates that the function only passed 1 out 8 tests :cry:
<br>
You can scroll up the console to diagnose the errors by comparing the expected outputs and what your function returned.

For example:
```shell
    Expected: "string"
    Received: "undefined"

      11 |     it('should properly initialize all 5 traits', () => {
      12 |         const charmander = new Pokemon('Charmander', 100, 110, 130, 'fire');
    > 13 |         expect(typeof charmander.name).toBe('string');
         |                                        ^
```

The test failed because the program expected the output of `typeof charmander.name` to be `'string'`, but received the output `undefined` instead.