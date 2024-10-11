// ============================================
//                  Level-1_3
// ============================================
console.log('%c Level-1_3 ', 'background: black; color: gold');

let counter: number = 0;
while(counter < 10) {
    console.log(`Hallo World ${counter}`);
    counter++;
};

// ============================================
//                  Level-1_7
// ============================================
console.log('%c Level-1_7 ', 'background: black; color: gold');
let counter2: number = 1;
const showResult = document.querySelector('.showResult') as HTMLElement;
do {
    console.log(`The number is ${counter2}`);
    showResult.innerHTML += `<p>The number is ${counter2}</p>`;
    counter2++;
} while(counter2 < 6)

// ============================================
//                  Level-3_1
// ============================================
console.log('%c Level-3_1 ', 'background: black; color: gold');

let text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

const textSeparate = (textParam: string) => {
    const textInBlocksOfHundred: string[] = [];
    const resultArr: string[] = [];
    let start: number = 0;

    while(start < textParam.length) {
        textInBlocksOfHundred.push(textParam.slice(start, start + 100));
        start += 100;
    };
    for(let index: number = 0; index < textInBlocksOfHundred.length; index++) {
        resultArr.push(textInBlocksOfHundred[index].concat(` - ${index + 1} of ${textInBlocksOfHundred.length}`)); 
    };

    return resultArr;

};

console.log(textSeparate(text));

// ============================================
//                  Level-3_2
// ============================================
console.log('%c Level-3_2 ', 'background: black; color: gold');

let numbers: number[] = [5, 22, 15, 100, 55];

let counter3: number = 0;
while(counter3 < numbers.length) {
    for(let num: number = 2; num < numbers[counter3]; num++) {
        if(numbers[counter3] % num === 0) {
            console.log(`${numbers[counter3]} is devidable by ${num}. The result is: ${numbers[counter3] / num}`);
        };
    };
    counter3++;
};

// ============================================
//                  Level-3_3
// ============================================
console.log('%c Level-3_3 ', 'background: black; color: gold');
console.log('Aufgabe LoOoOops Level 3_3 in HTML');


const inputNumber = document.querySelector('#inputNumber') as HTMLInputElement;
const btnLoop = document.querySelector('#btnLoop') as HTMLInputElement;
const loopResults = document.querySelector('#loopResults') as HTMLElement;

if(inputNumber && btnLoop && loopResults) {

    btnLoop.addEventListener('click', () => {
        loopResults.innerHTML = '';
        const number: number = Number(inputNumber.value);
        let letter: string = '';
        for(let i: number = 0; i < number; i++) {
            if(number % 2 === 0) {
                letter += 'o';
            } else {
                letter += 'o0';
            }
        }
        loopResults.innerHTML = `<p class="loop__style">L${letter}p</p>`;
    });
};

// ============================================
//                  Level-3_6
// ============================================
console.log('%c Level-3_6 ', 'background: black; color: gold');

const results: number[] = [44, 11, 30, 80, 52, 88, 94, 3, 25, 46];
const results2: number[] = [54, 18, 90, 87, 22, 28, 74, 30, 51, 66];
const results3: number[] = [60, 88, 70, 97, 96, 42, 23, 88, 90, 87];
const results4: number[] = [80, 81, 82, 83, 87, 92, 69, 89, 70, 94];
const results5: number[] = [94, 91, 90, 96, 90, 90, 93, 99, 98, 91];

const averageScore = (allScores: number[]) => {
    let sum: number = 0;
    let index: number = 0;
    while(index < allScores.length) {
        sum += allScores[index];
        index++
    }
    const average: number = Math.ceil(sum / allScores.length);
    switch(true) {
        case average < 50:
            console.log(`Durchschnitt: ${average} - Ungenügend`);
            break
        case average < 60:
            console.log(`Durchschnitt: ${average} - Mangelhaft`);
            break
        case average < 70:
            console.log(`Durchschnitt: ${average} - Ausreichend`);
            break
        case average < 80:
            console.log(`Durchschnitt: ${average} - Befriedigend`);
            break
        case average < 90:
            console.log(`Durchschnitt: ${average} - Gut`);
            break
        case average > 90:
            console.log(`Durchschnitt: ${average} - Sehr gut`);
            break
    }
    
    // Option with reduce method (geil!)
    // const sum: number = allScores.reduce((acc, num) => acc + num, 0);
    // console.log(sum);
    // const average: number = sum / allScores.length;   
    // console.log(average);
};

averageScore(results);
averageScore(results2);
averageScore(results3);
averageScore(results4);
averageScore(results5);