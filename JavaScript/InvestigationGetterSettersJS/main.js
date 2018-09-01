function Person(name) {
    this.Name = name;
}

Person.prototype.GetName = function() {
    console.log('Me devolvio el Nombre ' + this.Name);
}

Person.prototype.SetName = function(NewName) {
    this.Name = NewName;
}

var person = new Person('Brahian');
person.GetName();
person.SetName('Javier');
person.GetName();
