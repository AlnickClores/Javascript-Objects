// making an object
const person = {
    name: "Alnick Clores",
    age: 21,
    nationality: "Filipino",
    isAdult: true,
    // method for objects
    aboutMe: function() {
        return "Hi my name is " + this.name + ". I'm " + this.age + " years old working as " + this.work
    },
}

// adding a property to the object
person.work = "Software Engineer"

let aboutMeMethod = person.aboutMe()

// displaying or printing your JS object has different approaches:
// 1. using loops
let objectValues = ""
for(let i in person) {
    objectValues += person[i]
}
let displayUsingLoop = objectValues

// 2. by making an array
let displayArr = Object.values(person)

// 3. by using the JSON.stringify()
let displayUsingStringify = JSON.stringify(person)

console.log("Displaying the Object\n")
console.log("Using Loop: \n" + displayUsingLoop)
console.log("\nMaking Array: \n" + displayArr)
console.log("\nUsing JSON.stringify(): \n" + displayUsingStringify)
console.log("\nInvoking the method: \n" + aboutMeMethod)
