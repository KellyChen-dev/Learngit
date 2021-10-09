
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


class Person {
    constructor(name) {
        this.name = name;
    }
    // greeting = (additionalWord) => {
    //     console.log('Hi! I\'m ' + this.name + '. ' + additionalWord);
    // }
    joinMeeting(meeting) {
        meeting.addParticipant(this.name);
    }
}

// const alice = new Person('Alice');
// console.log("🚀 ~ file: Index.js ~ line 28 ~ alice", alice)
// const kelly = new Person('Kelly')
// alice.greeting('How are you?');
// kelly.greeting('This is too hard!')
// console.log("🚀 ~ file: Index.js ~ line 30 ~ kelly", kelly)

class Meeting {
    constructor() {
        this.participants = [];
    }
    addParticipant(participantName) {
        this.participants.push(participantName)
    }
    welcome() {
        console.log('Let\'s welcome ' + this.participants.toString().replace(',', ', '));
    }
}


// const kelly = new Person('Kelly');
// const Jc = new Person('Jc');
// const townHall = new Meeting();
// kelly.joinMeeting(townHall);
// Jc.joinMeeting(townHall);
// townHall.welcome();

const kelly = "I'm Kelly";
console.log(kelly + ',' + ' What\'s your name?');
console.log(`${kelly}, What's your name?`)