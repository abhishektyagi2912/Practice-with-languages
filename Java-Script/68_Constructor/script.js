class RailwayForm {
  constructor(givenname, trainno) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " "  + trainno)
    this.name = givenname
    this.trainno = trainno
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
}

// Create & fill a form for abhi
let abhiForm = new RailwayForm("Abhi", 145316)
// No need to Fill the form with ABhi's details
// abhiForm.fill(

// Create & fill a forms for Rohan
let rohanForm1 = new RailwayForm("Rohan", 222420)
let rohanForm2 = new RailwayForm("Rohan", 2229211)

 

abhiForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
