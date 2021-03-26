const tb = require("tb93");
const querystring = require('querystring');
const fetch = require("node-fetch")
const talkedRecently = new Set();
let bot = new tb.Trollbox(new tb.User("Lifranny [^h]", "LightBlue;bot"),true);
var sec = 0
let devs = ["MTYwNjA","MzhjMDQ", "MmZkM2Q", "NDViZjE", "MWQwODc", "MmE4ZDI", "MmYODM0", "OTBmYjI", "MWQwNDY", "MmZkNDN"]
let bots = ["NjM2Y2Z", "ODBlNDk"]
let mods = []
var adm = {MTYwNjA: 2, MzhjMDQ: 1, MmZkM2Q: 4, NDViZjE: 1, MWQwODc: 2, ODBlNDk: 5, NjM2Y2Z: 5, MmYODM0: 4, MmE4ZDI: 2, OTBmYjI: 4, MWQwNDY: 4, MmZkNDN: 4}
var admstr = ["User", "Admin", "Owner", "Moderator", "Developer", "Bot", "Banned"]
var repeatedcmd = 0
setInterval(function(){
    sec++
},1000)
let pref = "^";
let Version = "v1.1.4"

bot.socket.on('_connected', function(data) {
  bot.send("Lifranny " + Version + "\nCopyright © 2020-2021 Magestick\n\nConnected!")
})

bot.on_update_users = data => {
  users = []
  for (let key in data) {
      let home = data[key].home
      if (!users[home]) {users[home] = []}
      users[home].push([(data[key].nick), data[key].color])
  }
}

const fs = require('fs');
var files = {};

fs.readFile('./files.json', 'utf-8', (e, d) => {try {
  if (e) throw e;
  files = JSON.parse(d);
  setInterval(() => {try {fs.writeFileSync('./files.json', JSON.stringify(files), 'utf-8')} catch (e) {console.error(e)}}, 5000);
} catch (e) {console.error(e)}});

var banned = {};

fs.readFile('./banned.json', 'utf-8', (e, d) => {try {
  if (e) throw e;
  banned = JSON.parse(d);
  setInterval(() => {try {fs.writeFileSync('./banned.json', JSON.stringify(banned), 'utf-8')} catch (e) {console.error(e)}}, 5000);
} catch (e) {console.error(e)}});

bot.on_message = async msg => {
  for (i = 0; i < banned.length; i++) {
    if (msg.home == banned[i]) return;
  }
  if(msg.nick.includes("*hugs")) {return}
  if(msg.content.includes("L3")) {return}
  if(msg.content.includes("hugs")) {return}
  if(bots.includes(msg.home)) {return}


  if (msg.content.toLowerCase() === pref+"help" || msg.content.toLowerCase() === pref+"h" || msg.content.toLowerCase() === pref+"hlp") {

    txt = "Lifranny "+Version+" Lime Edition\n===============================\nCommand usage: "+pref+"help [category]\n===============================\n* Utility\n* Other\n* Actions\n* Text\n* Admins\n===============================\nCopyright © 2020-2021 Magestick"
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
    }

  if (msg.content.toLowerCase() === pref+"help utility" || msg.content.toLowerCase() === pref+"h utility" || msg.content.toLowerCase() === pref+"hlp utility" || msg.content.toLowerCase() === pref+"help utils" || msg.content.toLowerCase() === pref+"h utils" || msg.content.toLowerCase() === pref+"hlp utils" || msg.content.toLowerCase() === pref+"utils" || msg.content.toLowerCase() === pref+"utility") {
    txt = "Utility Commands\n================\n"+pref+"help – Shows the help page\n"+pref+"userinfo <user> - Information about yourself/anyone else\n"+pref+"about – About this bot\n"+pref+"tb64 – Encode text using Base64\n"+pref+"fb64 – Decode text from Base64\n"+pref+"time – Shows time of hosted bot\n"+pref+"runtime – Shows how many time bot has runned\n"+pref+"users <room> - Shows users in the room\n"+pref+"whereis [user] - Shows user located is on room\n================"
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase() === pref+"help other" || msg.content.toLowerCase() === pref+"h other" || msg.content.toLowerCase() === pref+"hlp other" || msg.content.toLowerCase() === pref+"help others" || msg.content.toLowerCase() === pref+"h others" || msg.content.toLowerCase() === pref+"hlp others" || msg.content.toLowerCase() === pref+"other" || msg.content.toLowerCase() === pref+"others") {
    txt = "Other Commands\n==============\n"+pref+"urban [word] – Shows an Urban Dictionary definition\n"+pref+"duck [user] – You are duck!\n"+pref+"pkm – Randomly spawns a Pokemon to catch\n"+pref+"save - Save the file. Can be rewritten by everyone due to unstability\n"+pref+"read [file] - Read the file\n"+pref+"random – A random joke\n=============="
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase() === pref+"help actions" || msg.content.toLowerCase() === pref+"help act" || msg.content.toLowerCase() === pref+"h actions" || msg.content.toLowerCase() === pref+"h act" || msg.content.toLowerCase() === pref+"hlp actions" || msg.content.toLowerCase() === pref+"hlp act" || msg.content.toLowerCase() === pref+"actions" || msg.content.toLowerCase() === pref+"act") {
    txt = "Actions Commands\n==============\n"+pref+"kill [user] – Kills the user\n"+pref+"hug [user] – Hugs the user\n"+pref+"kiss [user] – Kisses the user\n"+pref+"slap [user] – Slap the user\n"+pref+"insult [user] – Insults the user\n"+pref+"play [game] - Play the game\n"+pref+"hack - Hack someone/something else!"+pref+"8ball [word] - A ball that answers questions\n=============="
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase() === pref+"help text" || msg.content.toLowerCase() === pref+"help txt" || msg.content.toLowerCase() === pref+"h text" || msg.content.toLowerCase() === pref+"h txt" || msg.content.toLowerCase() === pref+"hlp text" || msg.content.toLowerCase() === pref+"hlp txt" || msg.content.toLowerCase() === pref+"text" || msg.content.toLowerCase() === pref+"txt") {
    txt = "Text Commands\n==============\n"+pref+"vapor [text] – Spaces on every letter\n"+pref+"say [text] – Just repeats word you said\n"+pref+"echo [text] – Same as say command but it shows your name\n"+pref+"owoify [text] - Makes an owo text\n"+pref+"glitch [text] - Makes the text glitch\n=============="
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
    if (msg.content.toLowerCase() === pref+"help admin" || msg.content.toLowerCase() === pref+"h admin" || msg.content.toLowerCase() === pref+"hlp admin" || msg.content.toLowerCase() === pref+"hlp admins" || msg.content.toLowerCase() === pref+"help admins" || msg.content.toLowerCase() === pref+"h admins" || msg.content.toLowerCase() === pref+"hlp adm" || msg.content.toLowerCase() === pref+"h adm" || msg.content.toLowerCase() === pref+"help adm" || msg.content.toLowerCase() === pref+"admin" || msg.content.toLowerCase() === pref+"admins") {
      if (devs.includes(msg.home)){
    txt = "Admin Commands\n==================\n"+pref+"evaljs – Run JS! (very dangerous)\n"+pref+"changeroom - Change the room\n"+pref+"ban [home] - Ban the user\n"+pref+"unban [home] - Unban the user\n"+pref+"delete [file] - Delete the file\n=================="
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  bot.send("You arnt very amdin")
}
  if (msg.content.toLowerCase() === pref+"about" || msg.content.toLowerCase() === pref+"abt") {
    txt = "You are running Lifranny "+Version+" (nodejs v15.11.0_bot-build:248) Lime Edition.\nCopyright (C) 2020-2021. This bot was created by Magestick.\n\nAny requests is not allowed and they are subject to be declined.\n\nStealing the bot's code are illegal and very punishable under the laws of the Russian Federation.\n\nWhat's New (23.03.2021)\n==========================\n1. The commands can repeat now.\n2. Made some improvements.\n3. Fixed \"userinfo\" command so the bot will not crash."
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase() === pref+"ruhelp") {
    txt = "ОШИБКА 428: Файл russian.hlp не найден"
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase() === pref) {
    txt = "Please use "+pref+"help"
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase().startsWith(pref+"pkm")) {
    if (talkedRecently.has(msg.home)) {
      txt = "Please wait, cooldown is not off now."
      if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
} else {
    const text = require('./pokemon.json')

    txt = msg.nick+" found and caught a level "+(Math.floor(Math.random() * 40) + 1)+" "+text.pokemon[Math.round(Math.random()*text.pokemon.length-1)]+"!"
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }        talkedRecently.add(msg.home);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(msg.home);
  }, 60000);
}

if (msg.content.startsWith(pref + 'ban')) {
  if (devs.includes(msg.home) || mods.includes(msg.home)){
  let arg1 = msg.content.split(' ')[1];

  if (!arg1) {bot.send('You cannot ban the nothing!'); return};
  banned.unshift(arg1);
  bot.send(`Banned user "${arg1}"`);
}
bot.send("you arnt very amdin")}

if (msg.content.startsWith(pref + 'unban')) {
  if (devs.includes(msg.home) || mods.includes(msg.home)){
  let arg1 = msg.content.split(' ')[1];
  if (!arg1) {bot.send('Duck, insert an argument!'); return};
  for (let i = 0; i < banned.length; i++) {
    if (banned[i] == arg1) {banned = [...banned.slice(0, i), ...banned.slice(i + 1)]; i--}
  }
  bot.send(`Unbanned user "${arg1}"`)
}
bot.send("you arnt very amdin")}
  
    if (msg.content.toLowerCase() === pref+"back") {
      if (devs.includes(msg.home) || mods.includes(msg.home)){
    bot.send("/a")
  }
  return bot.send("You arnt very amdin")
    }

  if (msg.content.toLowerCase() === pref+"ognick" || msg.content.toLowerCase() === pref+"ogname") {
    bot.socket.emit('user joined','Lifranny ['+pref+'h]','LightBlue;bot','','','')
  }
  if (msg.content.toLowerCase().startsWith(pref+"name")) {
      var name = msg.content.replace(pref+"name","") //grab args
      if (name == pref+"name" || name == ""){
      bot.send("Nope! Type name!");
      return
      }
      if (name.toLowerCase().includes("gay") || name.toLowerCase().includes("exe") || name.toLowerCase().includes("frolov") || name.toLowerCase().includes("sex") || name.toLowerCase().includes("sonic") || name.toLowerCase().includes("nigg") || name.toLowerCase().includes("nygg") || name.toLowerCase().includes("fuc") || name.toLowerCase().includes("ass") || name.toLowerCase().includes("bitch") || name.toLowerCase().includes("cunt") || name.toLowerCase().includes("vagina") || name.toLowerCase().includes("shit") || name.toLowerCase().includes("bastard") || name.toLowerCase().includes("💩") || name.toLowerCase().includes("poop") || name.toLowerCase().includes("cum") || name.toLowerCase().includes("pussy") || name.toLowerCase().includes("trash") || name.toLowerCase().includes("e✖e")){
        return bot.send("Wait that's illegal you duck!");
        }
        if(msg.content.length > 20) {
        bot.send("This name is too long...")
        return;
        }
      CURRENTNAME=name;
    bot.socket.emit('user joined', name, '#0094FF;bot','','','')
}
  if (msg.content.toLowerCase() === pref+"othername") {
    bot.socket.emit('user joined','Leavanny ['+pref+'h]','#3DC12F;bot','','','')
  }
    
  if (msg.content.toLowerCase() === pref+"myspace") {
    txt = "MySpace Links\nMine: https://myspace.windows93.net/index.php?id=13516 \nMagestick's MySpace: https://myspace.windows93.net/index.php?id=4646"
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase().startsWith(pref+"duck ") || msg.content.toLowerCase() === pref+"duck"){
    var arg = msg.content.replace(pref+"duck ","")
    if (arg=="" || arg==pref+"duck"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"duck "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if(arg.toLowerCase().includes("luxray") || arg.toLowerCase().includes("nixtrome") || arg.toLowerCase().includes("tim sword") || arg.toLowerCase().includes("wigglytuff") || arg.toLowerCase().includes("chandelure") || arg.toLowerCase().includes("c488") || arg.toLowerCase().includes("xerneas")){
      return bot.send("You are duck for ducking the owner! You ain't gonna duck him!")
  }
  if(arg.toLowerCase().includes("lifranny")){
    return bot.send("I couldn't duck myself, you've been ducked!")
}
  if(arg.toLowerCase().includes("nixtou")){
    return bot.send("I don't think I should duck her.")
}
  if(arg.toLowerCase() == ("me")){
    return bot.send("You're ducked now, good bye.")
}
if(arg.toLowerCase().includes("you")){
  return bot.send("I can't duck myself! You are now duck!")
}
if(arg.toLowerCase().includes("antonhbh")){
  return bot.send("He's the owner's friend! I couldn't duck him! You are duck!")
}
    if(arg.length > 50) {
      bot.send("It is spammy!")
      return;
      }
    bot.send("Hey! "+ arg +" you are now duck!");
  }
  if (msg.content.startsWith('^whereis')) {
    var name = msg.content.replace('^whereis ','')
    var getUserByName = ((name) => {for (i = 0; i < bot.usercache.length; i++) {if (bot.usercache[i].nick == name) {return bot.usercache[i]}}; return false;})
    if (!getUserByName(name)) return bot.send('Specific nick is not found.');
    bot.send(`User ${require('he').decode(name).replace('hugs','nothing')} is on room: ${getUserByName(name).room}`)
    }
    
  
  if (msg.content.toLowerCase().startsWith(pref+"hug ") || msg.content.toLowerCase() === pref+"hug"){
    var arg = msg.content.replace(pref+"hug ","")
    if (arg=="" || arg==pref+"hug"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"hug "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("lifranny")){
      bot.send("You're hugging me? Aww, thanks!");
      return "hugs";
    }
    if(arg.length > 50) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(msg.nick+" hugs "+arg);
  }
    if (msg.content.toLowerCase().startsWith(pref+"play ") || msg.content.toLowerCase() === pref+"play"){
    var arg = msg.content.replace(pref+"play ","")
    if (arg=="" || arg==pref+"play"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"play "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if(arg.length > 100) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(msg.nick+" plays "+arg);
  }
  if (msg.content.toLowerCase().startsWith(pref+"kiss ") || msg.content.toLowerCase() === pref+"kiss"){
    var arg = msg.content.replace(pref+"kiss ","")
    if (arg=="" || arg==pref+"kiss"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"kiss "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("lifranny")){
      bot.send("Wtf what r u doing? But anyway, thanks.");
      return "kiss";
    }
    if(arg.length > 50) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(msg.nick+" kisses "+arg+", aww how cute!");
  }
  if (msg.content.toLowerCase().startsWith(pref+"random")) {
    const text = require("./random.json")
    txt = text.random[Math.round(Math.random()*text.random.length-1)]
    if (repeatedcmd == 0){ bot.send(txt); repeatedcmd=1;} else { bot.send(txt + "​"); repeatedcmd=0;}
  }
  if (msg.content.toLowerCase().startsWith(pref+"say ") || msg.content == pref+"say"){
    var arg = msg.content.replace(pref+"say ","")
    if (arg=="" || arg==pref+"say"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().startsWith("!")){
      return
      }
      if (arg.toLowerCase().startsWith("^")){
        return bot.send("failsafe command evaluate detected becuz you access catted!")
        }
      if (arg.toLowerCase().startsWith("/")){
        bot.send(`The "/" commands don't work.`)
        return
        }
      if (arg.toLowerCase().startsWith("%")){
        bot.send(`You can't use e✖eBOT do commands.`)
        return
        }
        if (arg.toLowerCase().includes("*hugs")){
          bot.send(`nope`)
          return
          }
          if (arg.toLowerCase().startsWith("$")){
            bot.send("Wait, thats illegal! Request ducked.")
            return;
            }
          if(arg.length > 250) {
            bot.send("It is spammy!")
            return;
            }
    bot.send(arg)
  }
  if (msg.content.toLowerCase().startsWith(pref+"hack ") || msg.content == pref+"hack"){
    var arg = msg.content.replace(pref+"hack ","")
    if (arg=="" || arg==pref+"hack"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
      if (arg.toLowerCase().includes("lifranny")){
        return bot.send("Nope dummy user, "+msg.nick+" you've been ducked!")
        }
          if(arg.length > 250) {
            bot.send("It is spammy!")
            return;
            }
    bot.send("Hacking "+arg+" now...")
    setTimeout(() => bot.send("Hacking IP..."), 2000);
    setTimeout(() => bot.send("IP Address Found: "+(Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 1)), 4000);
    setTimeout(() => bot.send("Hacking color code..."), 6000);
    setTimeout(() => bot.send("Parsing data..."), 8000);
    setTimeout(() => bot.send("Completed hacking "+arg+"\nThe totally real and dangerous hack is complete."), 10000);

  }
  if (msg.content.toLowerCase().startsWith(pref+"owoify ") || msg.content == pref+"owoify"){
    const owoify = require("owoify-js").default
    var arg = msg.content.replace(pref+"owoify ","")
    if (arg=="" || arg==pref+"owoify"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().startsWith("!")){
      return
      }
      if (arg.toLowerCase().startsWith("^")){
        return bot.send("failsafe command evaluate detected becuz you access catted!")
        }
      if (arg.toLowerCase().startsWith("/")){
        bot.send(`The "/" commands don't work.`)
        return
        }
        if (arg.toLowerCase().includes("*hugs")){
          bot.send(`nope`)
          return
          }
          if (arg.toLowerCase().startsWith("$")){
            bot.send("Wait, thats illegal! Request ducked.")
            return;
            }
          if(arg.length > 250) {
            bot.send("It is spammy!")
            return;
            }
    bot.send(owoify(arg, 'uwu'))
  }
  if (msg.content.toLowerCase().startsWith(pref+"glitch ") || msg.content == pref+"glitch"){
    var arg = msg.content.replace(pref+"glitch ","")
    if (arg=="" || arg==pref+"glitch"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().startsWith("!")){
      return
      }
      if (arg.toLowerCase().startsWith("^")){
        return bot.send("failsafe command evaluate detected becuz you access catted!")
        }
      if (arg.toLowerCase().startsWith("/")){
        bot.send(`The "/" commands don't work.`)
        return
        }
        if (arg.toLowerCase().includes("*hugs")){
          bot.send(`nope`)
          return
          }
          if (arg.toLowerCase().startsWith("$")){
            bot.send("Wait, thats illegal! Request ducked.")
            return;
            }
          if(arg.length > 250) {
            bot.send("It is spammy!")
            return;
            }
    bot.send("/zalgo "+arg)
  }
  if (msg.content.toLowerCase().startsWith(pref+"echo ") || msg.content == pref+"echo"){
    var arg = msg.content.replace(pref+"echo ","")
    if (arg=="" || arg==pref+"echo"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().startsWith("!")){
      return
      }
      if (arg.toLowerCase().startsWith("^")){
        return bot.send("failsafe command evaluate detected becuz you access catted!")
        }
      if (arg.toLowerCase().startsWith("/")){
        bot.send(`The "/" commands don't work.`)
        return
        }
        if (arg.toLowerCase().includes("*hugs")){
          bot.send(`nope`)
          return
          }
          if (arg.toLowerCase().startsWith("$")){
            bot.send("Wait, thats illegal! Request ducked.")
            return;
            }
          if(arg.length > 250) {
            bot.send("It is spammy!")
            return;
            }
    bot.send('"'+arg+'" ~~'+msg.nick)
  }
  if (msg.content.toLowerCase().startsWith(pref+"8ball ")){
    const txt = require("./ball.json")
    var arg = msg.content.replace(pref+"8ball ","")
    if (arg=="" || arg==pref+"8ball"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
          if(arg.length > 250) {
            bot.send("It is spammy!")
            return;
            }
            bot.send(txt.ball[Math.round(Math.random()*txt.ball.length-1)]);
  }
  if (msg.content.toLowerCase().startsWith(pref+"kill ") || msg.content.toLowerCase() === pref+"kill"){
    var arg = msg.content.replace(pref+"kill ","")
    if (arg=="" || arg==pref+"kill"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"kill "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("nixtrome") || arg.toLowerCase().includes("magestick") || arg.toLowerCase().includes("xerneas") || arg.toLowerCase().includes("lifranny") || arg.toLowerCase().includes("tim sword") || arg.toLowerCase().includes("wigglytuff") || arg.toLowerCase().includes("chandelure")){
      bot.send("No u, bitch! " +msg.nick+" you are now duck!");
      return "no kill";
      }
      if (arg.toLowerCase().includes("nixtou")){
        bot.send("You shouldn't kill the girl admin, you've been ducked!");
        return "no kill";
        }
        if (arg.toLowerCase().includes("antonhbh")){
          bot.send("You can't kill the owner's friend, you've been ducked!");
          return "no kill";
          }
        if (arg.toLowerCase() == ("me")){
          bot.send("Ok, you're dead now. Say an actual name to kill someone.");
          return "no kill";
          }
          if(arg.toLowerCase().includes("you")){
            return bot.send("I can't kill myself! You are now duck!")
          }
        if(arg.length > 50) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(msg.nick + " kills " + arg + ", ouch!");
  }
  if (msg.content.toLowerCase().startsWith(pref+"slap ") || msg.content.toLowerCase() === pref+"slap"){
    var arg = msg.content.replace(pref+"slap ","")
    if (arg=="" || arg==pref+"slap"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"slap "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("nixtrome") || arg.toLowerCase().includes("magestick") || arg.toLowerCase().includes("xerneas") || arg.toLowerCase().includes("lifranny") || arg.toLowerCase().includes("tim sword") || arg.toLowerCase().includes("wigglytuff") || arg.toLowerCase().includes("luxray") || arg.toLowerCase().includes("chandelure") || arg.toLowerCase().includes("antonhbh")){
      bot.send("No u, bitch! " +msg.nick+" you are now duck!");
      return "no kill";
      }
        if(arg.length > 50) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(msg.nick + " slaps " + arg + ", damn that's gotta hurt!");
  }
    if (msg.content.toLowerCase().startsWith(pref+"insult ") || msg.content.toLowerCase() === pref+"insult"){
      const text = require('./insult.json')
    var arg = msg.content.replace(pref+"insult ","")
    if (arg=="" || arg==pref+"insult"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"insult "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("nixtrome") || arg.toLowerCase().includes("magestick") || arg.toLowerCase().includes("xerneas") || arg.toLowerCase().includes("lifranny") || arg.toLowerCase().includes("tim sword") || arg.toLowerCase().includes("wigglytuff") || arg.toLowerCase().includes("chandelure")){
      bot.send("No u, bitch! " +msg.nick+" you are now duck!");
      return "no kill";
      }
        if(arg.length > 50) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(msg.nick + " insults " + arg + ", "+arg+" "+text.insult[Math.round(Math.random()*text.insult.length-1)]);
  }
  if (msg.content.startsWith(pref + 'save')) {
    let s = msg.content.split(' '), arg1 = s[1], arg2 = s.slice(2).join(' ');
    if (!arg1 || !arg2) {bot.send('Duck, insert an argument!'); return}
    if (arg2.length > 1000) {bot.send('It is spammy!'); return}
    if (arg2.startsWith("/") || arg2.includes("!send") || arg2.includes("!snd")) {bot.send("Wait, that's illegal you duck!"); return}
    if (arg1.toLowerCase() == ("con") || arg1.includes("aux") || arg1.includes("prn") || arg1.includes("nul") || arg1.includes("lpt1") || arg2.includes("lpt2") || arg1.includes("com1") || arg1.includes("com2")) {bot.send("The specified device name is invalid. ABORTING..."); return}
    files[arg1] = arg2;
    bot.send('File saved as "' + arg1 + '"');
  }
  if (msg.content.startsWith(pref + 'load') || msg.content.startsWith(pref + 'read')) {
    let arg1 = msg.content.split(' ')[1], d = files[arg1];
    if (d) {bot.send(`${d}`)} else bot.send(`File ${arg1} does not exist.`);
  }
  if (msg.content.startsWith(pref + 'remove') || msg.content.startsWith(pref + 'delete')) {
    if (devs.includes(msg.home) || mods.includes(msg.home)){
    let arg1 = msg.content.split(' ')[1];
    if (files[arg1]) {delete files[arg1]; bot.send(`Removed file "${arg1}"`)} else bot.send(`File "${arg1}" does not exist.`);
  }
  bot.send("You arnt very amdin")}

  if (msg.content.toLowerCase().startsWith(pref+"lowercase ") || msg.content == pref+"lowercase"){
    var arg = msg.content.replace(pref+"lowercase ","")
    if (arg=="" || arg==pref+"lowercase"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
          if (arg.toLowerCase().startsWith("$")){
            bot.send("Wait, thats illegal! Request ducked.")
            return;
            }
            if (arg.toLowerCase().startsWith("%")){
              bot.send("Wait, thats illegal! Request ducked.")
              return;
              }
    if (arg.toLowerCase().includes("*hugs")){
    bot.send("An illegal reflective access operation has occurred!")    
    return;
    }
    if (arg.startsWith("!")){
      return;
      }
      if(arg.length > 100) {
        bot.send("It is spammy!")
        return;
        }
    bot.send(arg.toLowerCase())
  }
  if (msg.content.toLowerCase().startsWith(pref+"uppercase ") || msg.content == pref+"uppercase"){
    var arg = msg.content.replace(pref+"uppercase ","")
    if (arg=="" || arg==pref+"uppercase"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().startsWith("$")){
        bot.send("Wait, thats illegal! Request ducked.")
        return;
        }
        if (arg.toLowerCase().startsWith("^")){
          bot.send("Wait, thats illegal! Request ducked.")
          return;
          }
        if (arg.includes("*hugs")){
        bot.send("An illegal reflective access operation has occurred!")    
        return;
        }
        if (arg.startsWith("!")){
          return;
          }
    bot.send(arg.toUpperCase())
  }
  if (msg.content.toLowerCase().startsWith(pref+"vapor ") || msg.content == pref+"vapor"){
    var arg = msg.content.replace(pref+"vapor ","")
    if (arg=="" || arg==pref+"vapor"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if(arg.length > 100) {
      bot.send("It is spammy!")
      return;
      }
    bot.send(arg.split("").join(" "))
  }
  if (msg.content.toLowerCase().startsWith(pref+"changeroom ") || msg.content == pref+"changeroom"){
    if (devs.includes(msg.home) || mods.includes(msg.home)){
    var arg = msg.content.replace(pref+"changeroom ","")
    if (arg=="" || arg==pref+"changeroom"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if(arg.length > 25) {
      bot.send("The room name is too long...")
      return;
      }
    bot.send("/r "+arg)
  }
  bot.send("You arnt very amdin")
  return}
if (msg.content.toLowerCase().startsWith(pref+"reverse ")) {
  if (msg.content.includes("sguh*")) return
  if (msg.content.endsWith("/")) {return bot.send(`The "/" commands don't work.`)}
  if (msg.content.endsWith("$")) {return bot.send(`Wait, thats illegal! Request ducked.`)}
  if (msg.content.endsWith("%")) {return bot.send(`You can't use e✖eBOT do commands.`)}
  if (msg.content.endsWith("^")) {return bot.send(`An unexpected failure occurred while evaluating this command in underlying error code 503.`)}
  msg.content = msg.content.slice(8);
  bot.send(msg.content.split('').reverse().join(''))
}
if (msg.content.startsWith(pref+"evaljs") || msg.content == pref+"evaljs"){
    var arg = msg.content.replace(pref+"evaljs ","") //grab args
    if (devs.includes(msg.home)){
    if (arg == pref+"evaljs" || arg == ""){
    bot.send("Nope! Type js!")
    return
    }
    if (arg==pref+"evaljs "){
        bot.send("Missing argument! ");
        return "missing arg";
    }
    try{
    if (arg.toLowerCase().includes('child_process')){
     bot.send("ERROR: Illegal access to computer detected!")
     return "illegal";
    }
        if (arg.toLowerCase().startsWith('eval =') || arg.toLowerCase().includes('eval == false')){
     bot.send("That's illegal you duck!")
     return "illegal";
    }
    if (arg.includes("*hugs") || arg.includes("!send") || arg.includes("!snd") || arg.includes("process.exit") || arg.includes("bot = false")){
      bot.send("I do this later, but not now!")    
      return;
      }
    bot.send("Returned: " + eval(arg))
  }catch (err){
    bot.send("There is an error when trying to run this code.\n" + err.toString())
    }
} else {
    bot.send("you arnt very amdin")
    }
    }
    if (msg.content.startsWith(pref+"runjs") || msg.content == pref+"runjs"){
      var arg = msg.content.replace(pref+"runjs ","") //grab args
      if (devs.includes(msg.home)){
      if (arg == pref+"runjs" || arg == ""){
      bot.send("Nope! Type js!")
      return
      }
      if (arg==pref+"runjs "){
          bot.send("Missing argument! ");
          return "missing arg";
      }
      try{
      if (arg.toLowerCase().includes('child_process')){
       bot.send("ERROR:Illegal access to computer detected!")
       return "illegal";
      }
      if (arg.includes("*hugs")){
        bot.send("I do this later, but not now!")    
        return;
        }
            if (arg.includes("!send")){
        bot.send("I do this later, but not now!")
        return;
        }
        if (arg.includes("bot.destroy" || arg.includes("process.exit"))){
          bot.send("I do this later, but not now!")
          return;
          }
      bot.send("Returned: " + eval(arg))
    }catch (err){
      bot.send("There is an error when trying to run this code.\n" + err.toString())
      }
  } else {
      bot.send("you arnt very amdin")
      }
      }
  if (msg.content.toLowerCase() == (pref+"runtime")) {
    var min = Math.floor(sec/60)%60
    var secs = sec%60
    var hour = Math.floor(sec/3600)%24
    var day = Math.floor(sec/86400)
    bot.send(`${day}d, ${hour}hr, ${min}min, ${secs}sec.`)
}
if (msg.content.toLowerCase() == (pref+"time")) {
    bot.send(new Date().toString())
}
if (msg.content.startsWith(pref+"tb64 ")) {
  if(msg.home.includes("MTIzMDc")) {return}
  const btoa = b => Buffer.from(b).toString('base64')
  var TEMP = msg.content.replace(pref+"tb64 ","")
  if (msg.content.toLowerCase().startsWith("!")){
    return
    }
    if (msg.content.toLowerCase().startsWith("/")){
      bot.send(`The "/" commands don't work.`)
      return
      }
      if (msg.content.toLowerCase().startsWith("Xm")){
        bot.send(`An unexpected failure occurred while logging in underlying error code 503.`)
        return
        }
      if (msg.content.toLowerCase().includes("*hugs")){
        bot.send(`nope`)
        return
        }
  bot.send(btoa(TEMP));
  }
if (msg.content.startsWith(pref+"fb64 ")) {
  if(msg.home.includes("MTIzMDc")) {return}
  if(msg.content.includes("Kmh1Z3M")) {return bot.send("Wait, that's illegal you duck!")}
  if(msg.content.includes("Xm")) {return bot.send("Not evaluted becuz you access catted!")}
  if(msg.content.includes("Xn")) {return bot.send("Not evaluted becuz you access catted!")}
  if(msg.content.includes("L2tpbGw")) {return bot.send("Not evaluted becuz you access catted!")}
  const atob = a => Buffer.from(a, 'base64').toString('binary')
  var TEMP = msg.content.replace(pref+"fb64 ","")
  bot.send(atob(TEMP));
  }
  if (msg.content.toLowerCase().startsWith(pref+"userinfo")) try{

    let hm = msg.content.slice(10), h = _findHome(hm)
    
    if (users[hm]) {
        let msg = "Home " + hm + " has " + users[hm].length + " name" + (users[hm].length != 1 ? "s" : "") + " attached to it:"
        users[hm].forEach(n => msg += "\n " + n[0] + ", with the color of " + n[1])
        bot.send(msg + "\n(And the perms of " + admstr[adm[hm] || 0] + ")")
    } else if (h.length == 1) {
        let u = users[h[0]][0]
        bot.send("Name  │ " + u[0] +
                               "\nColor │ " + u[1] +
                               "\nHome  │ " + h[0] +
                               "\nPerms │ " + admstr[adm[h[0]] || 0])
    } else if (h.length > 1) {
        let cls = "", hms = "", pms = ""
        h.forEach(h => {
            cls += ", " + users[h][1]
            hms += ", " + h
            pms += ", " + admstr[adm[h] || 0]
        })
        bot.send("Name   │ " + hm +
                               "\nColors │ " + cls.slice(2) +
                               "\nHomes  │ " + hms.slice(2) + 
                               "\nPerms  │ " + pms.slice(2))
    } else {bot.send("Name  │ " + msg.nick +
                                    "\nColor │ " + msg.color +
                                    "\nHome  │ " + msg.home +
                                    "\nPerms │ " + admstr[adm[msg.home] || 0])}
    
    
    function _findHome(nick) {
        var homes = []
        for (let key in users) {
            users[key].forEach(n => {if (n[0] == nick) {homes.push(key)}})
        }
        return homes
    }
}catch(err){
  bot.send("An error has occurred!\n"+err.toString())
}
}
};
bot.connect();
