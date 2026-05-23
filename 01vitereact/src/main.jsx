import React from 'react'
import ReactDom from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){ 
//   return(
//     <div> 
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href='https://www.google.com' target='_blank'>
//     click me to visit Google
//   </a>
// )

const anotherUser = ' chai aur code'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'click me to visit Google',
  anotherUser
)

ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)