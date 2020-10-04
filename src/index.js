
const obj1 = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};

const obj2 = {
    10: 'ten',
    20: 'twenty', 
    30: 'thirty',
    40: 'forty',
    50: 'fifty', 
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

const obj3 = {
    100: 'hundred'
};

module.exports = function toReadable (number) {
    let array = number.toString().split('');
    for (let i = 0; i < array.length; i++) {
        array[i] = +array[i];
    };
    let string = '';
    let subNum = '';
    let partOfString1 = '';
    let partOfString2 = '';
    let partOfString3 = '';
    if (number < 20) {
        string = obj1[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            string = obj2[number];
        } else {
            for (let i = 1; i < 10; i++) {
                if (array[0] === i) {
                    partOfString1 = obj2[i*10];
                };
                if (array[1] === i) {
                    partOfString2 = obj1[i];
                };
            }
            string = partOfString1 + ' ' + partOfString2;
        }
    } else if (number >= 100) {
        if(number % 100 === 0) {
            for (let i = 1; i < 10; i++) {
                if (array[0] === i) {
                    partOfString1 = obj1[i];
                };
                    partOfString2 = obj3[100];
                };
                string = partOfString1 + ' ' + partOfString2;
        } else if (number % 10 === 0) {
            for (let i = 1; i < 10; i++) {
                if (array[0] === i) {
                    partOfString1 = obj1[i];
                };
            };
            for (let i = 1; i < 10; i++) {
                if (array[1] === i) {
                    partOfString2 = obj2[i*10];
                };
            }
            string = partOfString1 + ' ' + obj3[100] + ' ' + partOfString2;
        } else {
            for (let i = 1; i < 10; i++) {
                if (array[0] === i) {
                    partOfString1 = obj1[i];
                };
            }
            
            if (array[1] !== 1 && array[1] !== 0) {
                for (let i = 1; i < 10; i++) {
                    if (array[1] === i) {
                        partOfString2 = obj2[i*10];
                    };
                };
                for (let i = 1; i < 10; i++) {
                    if (array[2] === i) {
                        partOfString3 = obj1[i];
                    };
                };
                string = `${partOfString1} ${obj3[100]} ${partOfString2} ${partOfString3}`;
            } else {
                let newArr = array.slice(-2);
                subNum = +(newArr.join(''));
                for (let i = 1; i < 20; i++) {
                    if (subNum === i) {
                        partOfString2 = obj1[i];
                    };
                };
                string = `${partOfString1} ${obj3[100]} ${partOfString2}`;
            }

        }
    }
    return string;
}
