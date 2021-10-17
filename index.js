
// function createNewPerson(name) {
//     const obj = {};

//     obj.name = name;
//     obj.greeting = function (additionalWord) {
//         console.log('Hi! I\'m ' + obj.name + '. ' + additionalWord);
//     }
//     console.log(obj)
//     return obj;
// }

// const alice = createNewPerson('Alice');
// // alice=1
// alice.greeting('How are you?');


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     // greeting = (additionalWord) => {
//     //     console.log('Hi! I\'m ' + this.name + '. ' + additionalWord);
//     // }
//     joinMeeting(meeting) {
//         meeting.addParticipant(this.name);
//     }
// }

// // const alice = new Person('Alice');
// // console.log("🚀 ~ file: Index.js ~ line 28 ~ alice", alice)
// // const kelly = new Person('Kelly')
// // alice.greeting('How are you?');
// // kelly.greeting('This is too hard!')
// // console.log("🚀 ~ file: Index.js ~ line 30 ~ kelly", kelly)

// class Meeting {
//     constructor() {
//         this.participants = [];
//     }
//     addParticipant(participantName) {
//         this.participants.push(participantName)
//     }
//     welcome() {
//         console.log('Let\'s welcome ' + this.participants.toString().replace(',', ', '));
//     }
// }


// // const kelly = new Person('Kelly');
// // const Jc = new Person('Jc');
// // const townHall = new Meeting();
// // kelly.joinMeeting(townHall);
// // Jc.joinMeeting(townHall);
// // townHall.welcome();

// const kelly = "I'm Kelly";
// console.log(kelly + ',' + ' What\'s your name?');
// console.log(`${kelly}, What's your name?`)

// const student = {
//     name: 'Alice',
//     age: 26,
//     courses: [
//         {
//             name: 'Introduction to JavaScript',
//         }, 
//         {
//             name: 'How to give up JavaScript',
//         }
//     ],
// };

// // const name = student.name;
// // const age = student.age;
// // const courses = student.courses;

// const {name: studentName, age, courses: [ intro, {name: courseName}]} = student;

// // console.log(student)
// console.log(courseName)

// MYOB Code Test - Get My Income Tax

// KC Answer
// const getMyIncomeTax = (taxableIncome) => { 
//     const income = [0, 18200, 37000, 90000, 180000]; 
//     const rate = [0, 0.19, 0.325, 0.37, 0.45];
//     const extraOver = [0, 0, 3575, 20797, 54096];
//     if (income[0] < taxableIncome && taxableIncome <= income[1]) {
//         return 'Nil';
//     }
//     if (income[1] < taxableIncome && taxableIncome <= income[2]) {
//         console.log("🚀 ~ file: index.js ~ line 94 ~ getMyIncomeTax ~ income[1] < taxableIncome && taxableIncome <= income[2]", income[1] < taxableIncome && taxableIncome <= income[2])
//         return (taxableIncome-income[1])*rate[1];
//     }
//     if (income[2] < taxableIncome && taxableIncome <= income[3]) {
//         return (taxableIncome-income[2])*rate[2]+extraOver[2];
//     }
//     if (income[3] < taxableIncome && taxableIncome <= income[4]) {
//         return (taxableIncome-income[3])*rate[3]+extraOver[3];
//     }
//     if (income[4] < taxableIncome) {
//         return (taxableIncome-income[4])*rate[4]+extraOver[4];
//     }
// };

// console.log(getMyIncomeTax(18300))

// Better answer
const taxTable = [{
    min: 0, 
    max: 18200, 
    floor: 0, 
    taxPayable: 0, 
    rate: 0,
},{
    min: 18201, 
    max: 37000, 
    floor: 18200, 
    taxPayable: 0, 
    rate: 0.19,
},{
    min: 37001, 
    max: 90000, 
    floor: 37000, 
    taxPayable: 3572, 
    rate: 0.325,
},{
    min: 90001, 
    max: 180000, 
    floor: 90000, 
    taxPayable: 20797, 
    rate: 0.37,
},{
    min: 180001, 
    ax: Number.POSITIVE_INFINITY, 
    floor: 180000, 
    taxPayable: 54096, 
    rate: 0.45,
}]

const calculateTax = (table, income) => {
    const {floor, taxPayable, rate} = table.find((row) => income > row.min && income <= row.max);

    return (income - floor) * rate + taxPayable;
}
const result = calculateTax(taxTable, 77500)
console.log(result) 


// Quantas Code Test - Flight Stops 

// const getStops = (flights) => {
//     const stops = flights.length;
//     switch (stops) {
//         case 1:
//             return 'Direct';
//         case 2:
//             return '1 stop'
//         case 76:
//             return 'Dream Line ATW';
//         case 88:
//             return 'Rich Run';
//         default:
//             return (stops > 76 && stops <= 88 )
//                 ?  'Rick Run'
//                 :  `${stops - 1} stops`;
//     }
// }
// const flights = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'WHU' }, { origin: 'WHU', destination: 'CSH' }];
// console.log(getStops(flights))

const getStops = (flights) => {
    const specialMessageMap = {
        0: 'Direct',
        1: '1 stop',
        76: 'Dream Line',
        88: 'Rich Run',
    };

    const specialMessage = specialMessageMap[flights.length];
    console.log("🚀 ~ file: index.js ~ line 143 ~ getStops ~ specialMessage", specialMessage)

    if (specialMessage !== undefined) {
        return specialMessage;
    }

    return `${flights.length - 1} stops`;
}
const flights = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'WHU' }, { origin: 'WHU', destination: 'CSH' }];
console.log(getStops(flights))