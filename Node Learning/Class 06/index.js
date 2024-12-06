const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("greet", (username) => {
//     console.log(`Hello ${username}`);
// });

// emitter.emit("greet","Abdullah");

// Object

emitter.on("greet", (arg) => {
    console.log(`Hello i am ${arg.username} and i am a ${arg.role}`);
});

emitter.emit("greet",{username: "Abdullah",role: "Developer"});

