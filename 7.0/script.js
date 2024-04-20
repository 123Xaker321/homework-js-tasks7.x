var dog = new Object();
dog.name = "Layla";
dog.type = "Hasky";
dog.age = "2years";
dog.weight = "25kg";
dog.show = function () {
    alert(`name: ${this.name}, type: ${this.type}, age: ${this.age}, weight: ${this.weight}`);
}
dog.show();