// const heading=React.createElement('h1', {id:"heading"} ,"this is heading tag")
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// nested


const parent =React.createElement('div', {id:"parent"}, React.createElement('div',{id:"child"},React.createElement('h1', {id:"heading"} ,"this is heading tag")))
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
