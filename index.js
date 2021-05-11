class Cupcake {
    
    constructor(batter, icing, cost) {
        this.batter = batter;
        this.icing = icing;
        this.cost = cost;
    }

    getDescription() {
        return `A ${this.cost} ${this.batter} cupcake with ${this.icing}!`;
    }
}

class CupcakeShop {

    constructor(location) {
        this.location = location;
        this.inventory = [];
        this.cash = 0;
    }

    getStatus() {
        return `We have $${this.cash} and ${this.inventory.length} cupcakes!`
    }

    bakeBatch(numOfCupcakes, batter, icing, pricePer) {
        for(let i = 0; i < numOfCupcakes; i++) {
            let newCupcake = new Cupcake(batter, icing, pricePer);
            this.addToInventory(newCupcake);
        }
    }

    addToInventory(cupcake) {
        this.inventory.push(cupcake);
    }

    sellCupcake() {
        if(this.inventory.length > 0) {
            let toSell = this.inventory.pop();
            console.log('TEST', typeof toSell.cost);
            this.cash = this.cash + Number(toSell.cost);
            return toSell
        } else {
            return `No cupcakes to sell!`;
        }
    }

}

// let indpls = new CupcakeShop('Indianapolis');
// console.log(indpls);

// console.log(indpls.getStatus());

// let dayOne = indpls.bakeBatch(10, 'Chocolate', null, 1.5);
// console.log(indpls);
// console.log(indpls.getStatus());

// let sellChocolateChip = indpls.sellCupcake();
// console.log(indpls);
// console.log(indpls.getStatus());