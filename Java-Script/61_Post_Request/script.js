const createTodo = async (todo) => {
        let options = {
                method: "POST",
          // this is theheader har post request alg content type expect krta h 
                headers: {
                        "Content-type": "application/json"
                },
                body: JSON.stringify(todo),  // stringify change java script objects to string
        }
  // normal fetch api h bs usme options wala use krliya h humne 
        let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        let response = await p.json()
        return response
}

const getTodo = async (id) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let r = await response.json()
        return r
}

const mainFunc = async () => {
  // post y create krdega because server pr data large amount m bhjena h to use krenge isko
        let todo = {
                title: 'Harry2',
                body: 'bhai2',
                userId: 1100,
        }
        let todor = await createTodo(todo)
        console.log(todor)
        console.log(await getTodo(101)) // y krega fectch m ek alg 
}

mainFunc()
