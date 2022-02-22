/*
 * BigInt is useful when we want to use a number that is larger than MAX_SAFE_INTEGER 
 * 
 * Optional Chaining Operator
 * object?.property?.property
 * can check condition instead of doing long if statements
 * 
 * nullish coalescing
 * value1 ?? value2
 * doesn't check if it's falsy but instead if it is null or undefined
 * 
 */

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
3n + 4n + 1n
3 + 4 + 1

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: {
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

let command = (andrei_pokemon?.raichu) && (will_pokemon?.pikachu?.friend?.charizard) ? console.log('fight!') : console.log('walk away...');


if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon
    && will_pokemon.pikachu && will_pokemon.pikachu.friend
    && will_pokemon.pikachu.friend.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}


// Exercise 4: What do these each output?
// evaluates if false is null or undefined; false is not, so return false
console.log(false ?? 'hellooo') // false

// evaluates if null is null or undefined; null is, so return 'hellooo
console.log(null ?? 'hellooo') // 'hellooo

// null is treated as falsy, so return 'hellooo'
console.log(null || 'hellooo') // ❎'null'    'hellooo'

// false or null -> returns null; null ?? 'hellooo' -> returns 'hellooo'
console.log((false || null) ?? 'hellooo') // 'hellooo' 

// false or 'hellooo' -> returns 'hellooo'; null ?? 'hellooo' -> returns 'hellooo'
console.log(null ?? (false || 'hellooo')) // 'hellooo'