const tb = require(".");
 
let bot = new tb.Trollbox(new tb.User("Example Bot", "green"),true);
 
bot.on_message = msg => {
  console.log(msg, msg.user, msg.user.room);
  if (msg.user == "jankenpopp") {
    console.log(msg.user.home);
    throw "Oh no, it's Jankenpopp!";
  }
  
};
 
bot.on_error = err => { bot.send("Error:\n" + err.toString()) }
 
bot.connect();