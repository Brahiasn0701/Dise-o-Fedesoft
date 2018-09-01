var array = ["Lunes", "Martes"];
array.push("Miercoles", "Jueves");
console.log(array);

var persona = {
    nombre: 'Brahian',
    apellido: 'Sanchez',
    edad: 18,
    getFullName: function(){
        return console.log(this.nombre + ' ' + this.apellido);
    },
    setFullName: function(name, lastname){
        this.nombre = name;
        this.apellido = lastname;
    }
}

persona.getFullName();
persona.setFullName('Javier', 'Mora');
persona.getFullName();
// console.log(persona.nombre);
// console.log(persona.apellido);

