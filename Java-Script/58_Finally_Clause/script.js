const f = () => {
  try {
    // if error not come
    let a = 0;
    // console.log(program)
    console.log("Program ran successfully")
    return
  }
  catch (err) {
    // if error come
    console.log("This is an error")
    console.log(p)
  }
  finally {
    // it runs no matter what
    console.log("I am a good boy")
    // Close the file
    // Exit the Loop
    // Write to the log file
  }
}

f()
console.log("End")
