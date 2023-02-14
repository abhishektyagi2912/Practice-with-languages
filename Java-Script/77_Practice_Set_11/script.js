// create a constructor of complex no
class complex{
  constructor(real, imaginary){
    this.real = real
    this.imaginary = imaginary
  }
  add(num){
    this.real = this.real + num.real
    this.imaginary = this.imaginary + num.imaginary
  }
  get real() {
    return this._real // _ uderscore to avoid name collision
  }

  get imaginary() {
    return this._imaginary
  }

  set imaginary(newImaginary) {
    this._imaginary = newImaginary
  }

  set real(newReal) {
    this._real = newReal
  }
}

let a = new complex(2, 6)
console.log(a.real, a.imaginary)
// apply get set
a.real = 10
a.imaginary = 10
// add two complex number
let b = new complex(3, 5)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

// class Human {
//   constructor(name, favfood) {
//     this.name = name
//     this.favfood = favfood
//   }
//   walk() {
//     console.log(this.name + "Human is walking")
//   }
// }

// class Student extends Human {
//   walk() {
//     console.log(this.name + ": Student is walking")
//   }
// }

// let o = new Student("Harry", "Bhindi")
// o.walk()
