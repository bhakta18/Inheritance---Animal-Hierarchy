// Animal 
class Animal {
    #type;
  
    constructor(type) {
      this.#type = type;
    }
  
    get Type() {
      return this.#type;
    }
  }

  // mammal 
  class Mammal extends Animal {
    constructor() {
      super("Mammal");
    }
  }

  
  class Bird extends Animal {
    constructor() {
      super("Bird");
    }
  }

  class Lion extends Mammal {
    #maneColor;
  
    constructor() {
      super();
      this.#maneColor = "Brown";
    }
  
    get maneColor() {
      return this.#maneColor;
    }
  
    set maneColor(color) {
      this.#maneColor = color;
    }
  }

  
  class Cow extends Mammal {
    #milkProduction;
  
    constructor() {
      super();
      this.#milkProduction = "High";
    }
  
    get MilkProduction() {
      return this.#milkProduction;
    }
  
    set MilkProduction(level) {
      this.#milkProduction = level;
    }
  }

  
  class Eagle extends Bird {
    #wingspan;
  
    constructor() {
      super();
      this.#wingspan = "Large";
    }
  
    get Wingspan() {
      return this.#wingspan;
    }
  
    set Wingspan(size) {
      this.#wingspan = size;
    }
  }

  
  class Sparrow extends Bird {
    #wingspan;
  
    constructor() {
      super();
      this.#wingspan = "Small";
    }
  
    get wingspan() {
      return this.#wingspan;
    }
  
    set wingspan(size) {
      this.#wingspan = size;
    }
  }

  
  const lion = new Lion();
console.log(lion.Type);        
console.log(lion.maneColor);  
lion.maneColor = "Golden";
console.log(lion.maneColor);  

const cow = new Cow();
console.log(cow.Type);               
console.log(cow.MilkProduction);    
cow.MilkProduction = "Medium";
console.log(cow.MilkProduction);     

const eagle = new Eagle();
console.log(eagle.Type);       
console.log(eagle.Wingspan);   
eagle.Wingspan = "Very Large";
console.log(eagle.Wingspan);   

const sparrow = new Sparrow();
console.log(sparrow.Type);     
console.log(sparrow.wingspan); 
sparrow.wingspan = "Medium";
console.log(sparrow.wingspan);
