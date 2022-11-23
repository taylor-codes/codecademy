const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

    },
    get appetizers() {
        this._courses.appetizers
    },
    get mains() {
        this._courses.mains
    },
    get desserts() {
        this._courses.desserts
    },

    set appetizers(appetizers) {
        this._courses.appetizers = appetizers
    },
    set mains(mains) {
        this._courses.mains = mains
    },
    set desserts(desserts) {
        this._courses.desserts = desserts
    },

    get courses() {
        return this._courses;
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
    }

};// END menu obj.

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 7.00);
menu.addDishToCourse('appetizers', 'fries', 2.50);

menu.addDishToCourse('mains', 'steak', 25.00);
menu.addDishToCourse('mains', 'salmon', 20.00);
menu.addDishToCourse('mains', 'tofu', 15.00);

menu.addDishToCourse('desserts', 'cake', 5.00);
menu.addDishToCourse('desserts', 'cheesecake', 5.00);
menu.addDishToCourse('desserts', 'sundae', 5.00);

console.log(menu._courses);

const meal = menu.generateRandomMeal();
console.log(meal);