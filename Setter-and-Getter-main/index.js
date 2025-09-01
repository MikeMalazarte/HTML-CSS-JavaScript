


class BankAccount{
    constructor(balance){
        this.balance = balance;
    }

    set balance(newBalance){
        if(typeof newBalance === "number" && newBalance > 0){
            this._balance = newBalance;
        }
    }

    get usd(){
        return this._balance.toFixed(2) + " USD";
    }

    get eur(){
        return (this._balance * 0.85).toFixed(2) + " EURO";
    }

    get php(){
        return (this._balance * 56.50).toFixed(2) + " PHP";
    }
}

const user1 = new BankAccount(12);

console.log(user1.usd);
console.log(user1.eur);
console.log(user1.php);