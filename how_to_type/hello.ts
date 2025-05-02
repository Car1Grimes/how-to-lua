console.log("Hello, world");

function greet(name: String, date: Date) {
  console.log(`Hello ${name}, today is ${date.toDateString()}`);
}

greet("Brendan", new Date());
