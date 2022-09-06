class Animals {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    getName(){
        return `${this.name}`; //template literals
    }    
}

class Menu {
    constructor() {
        this.animals = [];
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createAnimals();
                    break;
                case '2':
                    this.viewAnimals();
                    break;
                case '3':
                    this.deleteAnimals();
                    break;
                case '4':
                    this.displayAnimals();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Thank you for playing, See you next time!");
    }
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new animal
            2) view animal
            3) delete animal
            4) display all animals
        `);
    }


    displayAnimals() {
        let animalString = '';
        for (let i = 0; i < this.animals.length; i++) {
            animalString += i + ') ' + this.animals[i].getName();
        }
        alert(animalString);
    }

    createAnimals() {
        let name = prompt('Enter name for new animal:');
        this.animals.push(new Animals(name));
    }

    viewAnimals() {
        let index = prompt("Enter the index of the animal you wish to view");
        alert(this.animals[index].getName())
    }

    deleteAnimals(){
        let index = prompt('Enter the index of the animal');
        this.animals.splice(index, 1);
        alert("Animal deleted");
    }
}

let menu = new Menu();
menu.start();
