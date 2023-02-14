class Animal{
  constructor(name){
    this._name = name
  }
  fly() {
    console.log("Mai asmano ki uchaiyo mai")
  }
  get name(){
    //jitne bhi refrence bhi name kiye h sbme uderscore krna padega
    return this._name
  }
  set name(newname){
    this._name = newname
  }
}

let a = new Animal("Abhi")
a.fly()
console.log(a.name) 
// we can directly use setter
a.name = "ABHI"
console.log(a.name)

console.log(a instanceof Animal) // this is checker that a is made by the class or not extend wale pr bhi true dega
