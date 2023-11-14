const EventEmitter = require("events");
const customEmitter = new EventEmitter(); //create instance

customEmitter.on("response", (name, id) => {
  //name of event and call back function
  console.log(`data received ${name} ${id}`);
});

customEmitter.emit("response", `nhan`, `hothanh`); //emit/call the event

// the event is emit, so it dont listen anymore
customEmitter.on("response", () => {
  //name of event and call back function
  console.log(`do something`); // differece event can have same name and called in order
});
