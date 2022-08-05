

import inquirer from "inquirer";


//class set up
let customers = [];

class drink
{
    constructor(drinkName,size)
    {
        this.drinkName=drinkName;
        this.size=size;
    }
}

class coffeeShop
{
    constructor(name)
    {
        this.name=name;
        this.profit=0;
    }

    getDrinkPrice(drink)
    {
        let price;
        if (drink.drinkName=="black coffee") price = 1.50;
        if (drink.drinkName=="latte") price = 2;
        if (drink.drinkName=="caramel latte") price = 2.50;

        if (drink.size == "medium") price+=0.50;
        if (drink.size == "large") price+=1.00;

        return price;
    }

    displayProfit()
    {
        console.log(`\n${this.name} made £${this.profit.toFixed(2)}.\n`);
    }
}

class customer
{
    constructor(name,cash,sex)
    {
        this.name=name;
        this.cash=cash;
        this.sex=sex;
        this.order=[];
        customers.push(this);
    }

    addDrinkToOrder(drinkName,size)
    {
        let d = new drink(drinkName,size);
        this.order.push(d);
    }

    placeOrder(cShop)
    {
        let outputMsg = `${this.name} has £${this.cash.toFixed(2)}, `;
        if (this.sex=="male") outputMsg+=`he ordered a `
        else outputMsg+=`she ordered a `

        let totalCost=0;
        for (let i = 0; i < this.order.length; i++)
        {
            if (i != 0 && i == this.order.length-1) outputMsg += "and a ";

            outputMsg+=`${this.order[i].size} ${this.order[i].drinkName}, `
            totalCost+= cShop.getDrinkPrice(this.order[i]);
        }

        outputMsg += `it costs £${totalCost.toFixed(2)}. `;

        if (totalCost <=this.cash)
        {
            outputMsg+=`order successful.`
            this.cash-=totalCost;
            cShop.profit+=totalCost;
        }
        else
        {
            outputMsg+=`insufficient funds for order.`
        }
        
        console.log(outputMsg);
    }
}


//user input
let user = new customer("name",15,"male");

await inquirer
  .prompt([
    {
        name: "name",
        message: "enter your name:",
    },
    {
        type: "list",
        name: "sex",
        message: "male or female?",
        choices: ["male", "female"],
    },
    {
      type: "list",
      name: "drink",
      message: "select a drink to order.",
      choices: ["black coffee", "latte","caramel latte"],
    },
    {
        type: "list",
        name: "size",
        message: "what size?.",
        choices: ["small", "medium","large"],
    },
  ])
  .then(answers => {
    user.name = answers.name;
    user.sex=answers.sex;
    user.addDrinkToOrder(answers.drink,answers.size);
  });





//customer/ order set up
let starbucks = new coffeeShop("starbucks");
let becky = new customer("becky",10,"female");
let marion = new customer("marion",5,"male");
let james = new customer("james",30,"male");


becky.addDrinkToOrder("caramel latte","small");
marion.addDrinkToOrder("black coffee","medium");
marion.addDrinkToOrder("latte","small");
marion.addDrinkToOrder("caramel latte","medium");
james.addDrinkToOrder("black coffee","large");
james.addDrinkToOrder("latte","medium");


//console display
console.log("\n");
for (let i = 0; i < customers.length; i++)
{
    customers[i].placeOrder(starbucks);
}

starbucks.displayProfit();

