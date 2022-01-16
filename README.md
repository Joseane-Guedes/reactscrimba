#  React  ⚛️ Notes 📝

# I - Build a React Info Site
## Quiz.md 😃

1️⃣ - Why do we need to 'import React from "react" ' in our files?

In order to use  JSX, we need to import react. React is what defines JSX.


2️⃣ - If I were to console.log(page) in index.js, what would show up here?

A JavaScript object. React elements that describe what React should eventually add to the real DOM for us. 

3️⃣ - What's wrong with this code: 

We need our JSX to be nested under a single parent element.

✨ fragments <></>

```javascript
const page = (

    <h1>Hello</h1>
     <h1>This is my website!</h1>
    
)

<====================================>

const page = (
<>
    <h1>Hello</h1>
     <h1>This is my website!</h1>
</>
)
```


4️⃣  - What does it mean for something to be "declarative" instead of "imperative"?

Declarative means I can tell the computer WHAT to do and expect it to handle the details. 

Imperative means I need to tell it HOW to do each step. ( Necessário informar todo passo-a-passo para realizar a tarefa)


5️⃣ - What does it mean for something to be "composable"?

we have small pieces that we can put togheter to make something larger/greater than the individual pieces. 

# 🔥 Challenge

## Part 1: Create a page of your own using a custom Page Component.

```JavaScript
    import React from 'react'
    import ReactDOM from 'react-dom'

    function Page ()  {
            return (
                <>
                <ol>
                <li> React is a popular library with an easier learning curve. </li>
                   <li> React allows you to have a stronger opinion on how the code should be organized.</li>
                </ol>
                </>
            )
    }

    ReactDOM.render(<Page/>, document.getElementById("root"))
    
```

 