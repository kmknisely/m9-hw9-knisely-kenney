class Desserts {
  constructor(type,calories){
    this.type = type;
    this.calories = calories;
  }
}

class IceCream extends Desserts {
  constructor(type,calories,flavor,scoops){
    super(type,calories);
    this.flavor = falvor;
    this.scoops = scoops;
  }
  includeSpoon(){
    console.log("Here is your spoon!");
  }
}
