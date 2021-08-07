function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 7

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(amount,tax)
        return amount * tax;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = 'Max';

function greetUser() {
    let name = userName
    console.log('Hi ' + name);
}

userName = 'Manuel';

greetUser(); 

function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);

    return n === 1 ? x : x * powerOf(x, n -1);
}

console.log(powerOf(2, 3)); //  2 * 2 * 2

const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manuel',
            friends: [
                {
                    name: 'Chris'
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
};

function getFriendNames(person) {
    // for (const friends of person.friends) {
    //     for (const friendsFriends of friends.friends) {

    //     }
    // }
    const collectedNames = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
    }

    return collectedNames;
}

console.log(getFriendNames(myself));