### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a JavaScript library that uses components to render dynamic web page content. It creates a fast interactive user experience that is fast scalable and easy to use.

- What is Babel?

Babel is a Javascript compiler that converts ES6 into a backward compatible version of Javascript that can be used by older JavaScript versions. 

- What is JSX?

JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like. JSX allows you to write HTML in your JavaScript files. Under the hood, JSX is converted to regular JavaScript objects. 


- How is a Component created in React?

A React component can be created in two ways: as a function or as a class. A functional component is simply a JavaScript function that returns JSX. A class component, on the other hand, is an ES6 class that extends React.Component and has a render method that returns JSX.



- What are some difference between state and props?

State is a local data storage that is local to the component and cannot be passed to other components. The state of a component can change, often as a result of user actions.

Props are read-only and immutable. They are used to pass data from a parent component to a child component in React.

- What does "downward data flow" refer to in React?

In React, "downward data flow" means that data is passed from parent components to child components through props. State is often owned by specific components, and any data or UI derived from that state can only affect components "below" them in the tree.

- What is a controlled component?

A controlled component is one that takes its current value through props and notifies changes through callbacks like onChange. This means the parent component controls the component’s state – typical examples are form elements like input, textarea, or select.

- What is an uncontrolled component?

An uncontrolled component is one that stores its own state internally and you query the DOM using a ref to find its current value when you need it. This is more like traditional HTML.

- What is the purpose of the `key` prop when rendering a list of components?

The key prop is a unique identifier that helps React identify which items have changed, been added, or been removed in lists. It aids in the efficient update and re-render of user interfaces.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index as a key is a poor choice because it does not uniquely identify your components. If the order of items changes or items are added or removed from the list, the index changes, which can negatively impact performance and may cause issues with component state.

- Describe useEffect.  What use cases is it used for in React components?

useEffect is a hook in React used for side effects in function components. It serves for data fetching, setting up a subscription, or manually changing the DOM in React components. It can be configured to run after every render or only when certain values change by setting its dependency array.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef returns a mutable ref object whose .current property is initialized to the passed argument. The object returned from useRef will persist for the full lifetime of the component. A change to a ref value does not cause the component to re-render.



- When would you use a ref? When wouldn't you use one?

Use a ref for:

Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
Avoid refs for:

Anything that can be done declaratively (e.g., changing a component's state or properties).

- What is a custom hook in React? When would you want to write one?

A custom hook in React is a JavaScript function that starts with use and can call other hooks. It's a mechanism to reuse stateful logic (e.g., setting up a subscription and remembering the current value), but not state itself across different components. You would write one when you want to share logic between different components or extract component logic into a reusable function.





