

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${this.owner} deposited: $${amount}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log(`You don't enough balance to withdraw.`);
        } else {
            this.balance -= amount;
            console.log(`${this.owner} withdrew: $${amount}`);
        }
    }

    checkBal(){
        console.log(`${this.owner} balance: $${this.balance}`);
    }
}

const user1 = new BankAccount("Mike", 0);

user1.checkBal();
user1.deposit(500);
user1.withdraw(300);
user1.checkBal();