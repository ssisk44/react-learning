# REACT FOR BEGINNERS
> **This project is a conglomeration of applications made through a series of React tutorials on Youtube!**

> Tutorial Playlist Link: https://www.youtube.com/playlist?list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ

### Video 1 Notes - Beginner Tutorial
> **Public Folder** - not bundled during final output (general url based)
> **Asset Folder** - is bundled during final output 

### Video 3 Notes - CSS Styles
> **External** - CSS contained in a seperate file and imported

> **Modular** - component based styles grouped in a folder (x.module.css w/ component), global styles are tough

> **Inline** - good for small,minimally styled components... can make code difficult to read

### Video 4 Notes - Props
> **Props** - <ins>read-only</ins> properties that are shared between components. A parent component can send data to a child component.<br/> ex. '\<Component key="value">'
>

> **Prop Types** - a mechanism that ensures that the passed balue is of the correct datatype. <br/> ex. age: PropTypes.number <br/> It is good practice to include PropTypes with any props

> **Default Props** - default value for props in case they are not passed from the parent component

### Video 5 Notes - Conditional Rendering
> **Conditional Rendering** - allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)


### Video 7 Notes - Click Events
> onClick
> onDoubleClick
> Events(e)
### Video 8 Notes - Hooks: useState()
> useState allows for a stateful variable and setter function that store data and changes are reflected in the Virtual DOM 
### Video 9 Notes - Event Handler: onChange()
> onChange is an event handler used mostly with forms that triggers a function every time input changes

### Video 11 Notes - Updater Functions
> An updater function is a function passed as an argument to set state, usually. React batches update statements for state after ..., you can only access current state unless using multiple states with the updater function (const [year, setYear] = ..., increment() { y => y + 1 })
### Video 12 Notes - In State: Updating Objects
> A spread operator (...objectName) places all variables in the object into the containing code. Next you can redeclare variables in an array to overwrite existing ones and keep non overwritenvalues.
### Video 13 Notes - In State: Updating Arrays
> Passing a parameter of '_' means ignore

### Video 16 Notes - Hooks: useEffect()
> useEffect tells react to perform code when this component: 
> 1) rerenders 
> 2) mounts (create and append to DOM) 
> 3) value state changes
>
> useEffect(function, [dependencies])
> 1) useEffect(() => {})	// runs on rerender
> 2) useEffect(() => {}, [])	// runs only on mount
> 3) useEffect(() => {}, [value])	// runs on mount + on change
>
> USES
> 1) Event listeners
> 2) DOM Manipulation
> 3) Subscriptions (real-time updates)
> 4) Fetching Data from an API
> 5) Clean up when a component unmounts

### Video 17 Notes - Project: Digital Clock

### Additional Notes
#### Hooks -> https://react.dev/reference/react/hooks
>State Hooks:
>-useState - 
>-useReducer - 
>
>Context Hooks:
>
>Ref Hooks:
>
>Effect Hooks:
>
>Performance Hooks:
>
>Resource Hooks:
>-use() - lets you read the value of a resource like a Promise or context
>
>Other Hooks
>-useDebugValue() - 
>-useId() - 
>-useSyncExternalStore() - 