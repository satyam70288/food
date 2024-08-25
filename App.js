const heading = React.createElement('h1', { id: "heading" }, "this is heading tag")
const root1 = ReactDOM.createRoot(document.getElementById('root'))
// root1.render(heading)

// nested

// ReactCreateElement is Object
const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, React.createElement('h1', { id: "heading" }, "this is heading tag")))
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

// multichild
const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" },
    [React.createElement('h1', { id: "heading" }, "this is heading tag"),
    React.createElement('h2', { id: "heading" }, "this is heading2 tag"),
    ]
))
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

// Object$$typeof:
//  Symbol(react.element)key: nullprops: { id: 'parent', children: {… } }
//   children: { $$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {… }, … }
//    id: "parent"[[Prototype]]: Objectref: nulltype: "div"_owner: null_store: { validated: false } _self: null_source: null[[Prototype]]:
//     Object