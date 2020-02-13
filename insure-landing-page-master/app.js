function Dog(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
}

Dog.prototype.woww = function() {
    if(this.weight>10) {
        console.log('WOOFF')
    }else {
        console.log('wooff')
    }
}
Dog.prototype.run = function() {
    console.log('run');
}

let fluffy = new Dog('Flufffy', 'Black', 12);
// fluffy.run = function() {
//     console.log('Run fluffy ruuun');
// }

fluffy.run()