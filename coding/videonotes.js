/* 
Object orintated programming

DVD Player
------------------
Height
Weight
Width
Color

Play
Fast Forward
Rewind
Pause

DVD
-----
Movie Length
Image
Size

*/

//* Classes

class student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.last = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new student('Tom', 'Sawyer', '62355555555', 'A');
let student2 = new student ('Cruz', 'Garcia', '5053599029', 'S');
let student3 = new student ('Jeff', 'Rob', '9990988888', 'b');

student1.introduce();
student2.introduce();
student3.introduce();

//* Inheritance

class NotificationSender {
    constructor(status){
        this.status = status ;

    }

    sendNotification(notification){
        console.log('Sending:' + notification);
    }

    findingUserWithStatus(status) {
        let users = getUsers(status);
        return users ; 
    }
}






class promtionSender extends NotificationSender {
    constructor(status){
        super(status);
    }

    calculateDiscount(status) {
        if (status === 'GOLD'){
            return .3;
        }else if (status === 'SILVER') {
            return .15;
            
        }          
        return 0;
    }
}


class collectionsSender extends NotificationSender {
    constructor(status){
        super(status);

    }

    calculateFee(status){
        if (status === 'OVERDUE' ) {
            
        } else if(status === "DELIQUENT") {
          return 25;
        }
        return 5
    }
}

let CollectionsSender = new collectionsSender('OVERDUE');
CollectionsSender.sendNotification('this is a test collections notification.')


//* Handling Exceptions

try {
   list.push('hello'); 
} catch (err) {
    console.log(err);    
}

console.log("goodbye")


//* Menu App
