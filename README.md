
## Objects in Javascript

An object in programming is a collection of related data and functions that represent a real-world entity or concept. Think of it as a bundle that groups together data (attributes) and actions (methods) that can be performed on that data.


## Example

```javascript
const person = {
    name: "John Doe",
    age: 27,
    isMarried: false,
}
```

here we created a object named "person".


| Attributes | Values    | Type of |
| :-------- | :------- |:-------|
| `name` | `John Doe` | `String` | 
| `age` | `27` | `Number` |
| `isMarried` | `false` | `Boolean` |



## Adding Attributes to the Object

```javascript
person.nationality = "British"
```

Our object will now look like this:

```javascript
const person = {
    name: "John Doe",
    age: 27,
    isMarried: false,
    nationality: "British",
}
```

## Displaying the Object
There are different ways to display the object.

### By using loop
```javascript
let text = ""
for(let i in person) {
    text += person[i] + "\n"
}

console.log(text)
```

```javascript
// Output
John Doe
27
false
British
```

### By using Object.values()
```javascript
let text = Object.values(person)

console.log(text)
```

```javascript
// Output
[ 'John Doe', 27, false, 'British' ]
```

### By using the JSON.stringify()
```javascript
let text = JSON.stringify(person)

console.log(text)
```

```javascript
// Output
{"name":"John Doe","age":27,"isMarried":false,"nationality":"British"}
```

## Differences
|  Using | Explanation |
| :-------- | :------- |
| `Loop` | Iterates over each attribute (property) of an object and displays them one by one.| 
| `Object.values()` | Extracts all the values of an object's attributes and returns them as an array, which can then be displayed. |
| `JSON.stringify()` | Converts the entire object into a JSON string, displaying the object as a single string representation. |
