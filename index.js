const tb = require("tb93");
const querystring = require('querystring');
const fetch = require("node-fetch")
const talkedRecently = new Set();
let bot = new tb.Trollbox(new tb.User("Lifranny [^h]", "LightBlue;bot"),true);
var sec = 0
let devs = ["MTYwNjA","MzhjMDQ", "MmZkM2Q", "NDViZjE"]
let mods = []
let banned = ["OTcxMFj"]
var adm = {MTYwNjA: 2, MzhjMDQ: 1, MmZkM2Q: 1, NDViZjE: 1, OTcxMFj: 4}
var admstr = ["User", "Admin", "Owner", "Moderator", "Banned"]
setInterval(function(){
    sec++
},1000)
let pref = "^";

bot.on_update_users = data => {
  users2 = []
  for (let key in data) {
      let home = data[key].home
      if (!users2[home]) {users2[home] = []}
      users2[home].push([(data[key].nick), data[key].color])
  }
}

bot.on_message = async msg => {
  if(msg.nick.includes("*hugs")) {return}
  if(msg.nick.includes("Tree's Tree")) {return}
  if(msg.content.includes("L3")) {return}
  if(msg.content.includes("hugs")) {return}
  if(banned.includes(msg.home)){return}


  if (msg.content.toLowerCase() === pref+"help" || msg.content.toLowerCase() === pref+"h" || msg.content.toLowerCase() === pref+"hlp") {
    bot.send("Lifranny v1.1.0 Vanilla Edition\n===============================\nCommand usage: "+pref+"help [category]\n===============================\n* Utility\n* Other\n* Actions\n* Developers\n===============================\nCopyright © 2020-2021 Nixtrome")
  }
  if (msg.content.toLowerCase() === pref+"help utility" || msg.content.toLowerCase() === pref+"h utility" || msg.content.toLowerCase() === pref+"hlp utility") {
    bot.send("Utility Commands\n================\n"+pref+"help – Shows the help page\n"+pref+"userinfo <user> - Information about yourself/anyone else\n"+pref+"about – About this bot\n"+pref+"tb64 – Encode text using Base64\n"+pref+"fb64 – Decode text from Base64\n"+pref+"time – Shows time of hosted bot\n"+pref+"runtime – Shows how many time bot has runned\n"+pref+"whereis <user> - Shows user located is on room\n================")
  }
  if (msg.content.toLowerCase() === pref+"help other" || msg.content.toLowerCase() === pref+"h other" || msg.content.toLowerCase() === pref+"hlp other") {
    bot.send("Other Commands\n==============\n"+pref+"vapor [word] – Spaces on every letter\n"+pref+"say [word] – Just repeats word you said\n"+pref+"duck [user] – You are duck!\n"+pref+"pkm – Randomly spawns a Pokemon to catch\n"+pref+"ascii – A random ascii\n==============")
  }
  if (msg.content.toLowerCase() === pref+"help actions" || msg.content.toLowerCase() === pref+"help act" ||msg.content.toLowerCase() === pref+"h actions" || msg.content.toLowerCase() === pref+"h act" || msg.content.toLowerCase() === pref+"hlp actions" || msg.content.toLowerCase() === pref+"hlp actions") {
    bot.send("Actions Commands\n==============\n"+pref+"kill [user] – Kills the user\n"+pref+"hug [user] – Hugs the user\n"+pref+"kiss [user] – Kisses the user\n"+pref+"slap [user] – Slap the user\n"+pref+"insult [user] – Insults the user\n"+pref+"play [game] - Play the game\n"+pref+"8ball [word] - A ball that answers questions\n==============")
  }
    if (msg.content.toLowerCase() === pref+"help developers" || msg.content.toLowerCase() === pref+"h developers" || msg.content.toLowerCase() === pref+"hlp developers") {
      if (devs.includes(msg.home)){
    bot.send("Developer Commands\n==================\n"+pref+"evaljs – Run JS! (very dangerous)\n"+pref+"changeroom - Change the room\n==================")
  }
  if (mods.includes(msg.home)){
    bot.send("Moderator Commands\n==================\n"+pref+"changeroom - Change the room\n==================")
  }
  bot.send("You arnt very amdin")
}
if (msg.content.toLowerCase() === pref+"help" || msg.content.toLowerCase() === pref+"h" || msg.content.toLowerCase() === pref+"hlp") {
  bot.send("Lifranny v1.1.0 Vanilla Edition\n===============================\nCommand usage: "+pref+"help [category]\n===============================\n* Utility\n* Other\n* Actions\n* Developers\n===============================\nCopyright © 2020-2021 Nixtrome")
}
  if (msg.content.toLowerCase() === pref+"about" || msg.content.toLowerCase() === pref+"abt") {
    bot.send("You are running Lifranny v1.1.0 (nodejs v15.8.0_bot-build:220) Vanilla Edition.\nCopyright (C) 2020-2021. This bot was created by Nixtrome.\nIf you block him, then this bot will also be blocked!")
  }
  if (msg.content.toLowerCase() === pref+"ruhelp") {
    bot.send("ОШИБКА 428: Файл russian.hlp не найден")
  }
  if (msg.content.toLowerCase().startsWith(pref+"pkm")) {
    if (talkedRecently.has(msg.home)) {
      bot.send("Please wait, cooldown is not off now.");
} else {
    const text = require('./pokemon.json')
    bot.send(msg.nick+" found and caught a level "+(Math.floor(Math.random() * 40) + 1)+" "+text.pokemon[Math.round(Math.random()*text.pokemon.length-1)]+"!")
  }        talkedRecently.add(msg.home);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(msg.home);
  }, 60000);
}
  
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
      if (name.toLowerCase().includes("gay") || name.toLowerCase().includes("exe") || name.toLowerCase().includes("frolov") || name.toLowerCase().includes("sex") || name.toLowerCase().includes("sonic") || name.toLowerCase().includes("nigg") || name.toLowerCase().includes("nygg") || name.toLowerCase().includes("fuc") || name.toLowerCase().includes("ass") || name.toLowerCase().includes("bitch") || name.toLowerCase().includes("cunt") || name.toLowerCase().includes("vagina") || name.toLowerCase().includes("shit") || name.toLowerCase().includes("bastard") || name.toLowerCase().includes("💩") || name.toLowerCase().includes("poop") || name.toLowerCase().includes("cum") || name.toLowerCase().includes("pussy")){
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
    bot.socket.emit('user joined','Lopunny ['+pref+'h]','Chocolate;bot','','','')
  }
    
  if (msg.content.toLowerCase() === pref+"myspace") {
    bot.send("MySpace Links\nMine: https://myspace.windows93.net/index.php?id=13516 \nMagestick's MySpace: https://myspace.windows93.net/index.php?id=4646")
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
  if(arg.toLowerCase().includes("souhou-chan:>")){
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
  if (msg.content.toLowerCase().startsWith(pref+"ascii")) {
    const text = require("./ascii.json")
    bot.send(text.ascii[Math.round(Math.random()*text.ascii.length-1)])
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
        if (arg.toLowerCase().includes("*hugs")){
          bot.send(`nope`)
          return
          }
          if (arg.toLowerCase().startsWith("$")){
            bot.send("Wait, thats illegal! Request ducked.")
            return;
            }
          if(arg.length > 150) {
            bot.send("It is spammy!")
            return;
            }
    bot.send(arg)
  }
  if (msg.content.toLowerCase().startsWith(pref+"8ball ")){
    const txt = require("./ball.json")
    var arg = msg.content.replace(pref+"8ball ","")
    if (arg=="" || arg==pref+"8ball"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
          if(arg.length > 150) {
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
      if (arg.toLowerCase().includes("souhou-chan:>")){
        bot.send("You shouldn't kill the girl admin, you've been ducked!");
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
    if (arg.toLowerCase().includes("nixtrome") || arg.toLowerCase().includes("magestick") || arg.toLowerCase().includes("xerneas") || arg.toLowerCase().includes("lifranny") || arg.toLowerCase().includes("tim sword") || arg.toLowerCase().includes("wigglytuff") || arg.toLowerCase().includes("luxray") || arg.toLowerCase().includes("chandelure")){
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
  if (msg.content.toLowerCase().startsWith(pref+"userinfo")) {
    
    {
    }

    let hm = msg.content.slice(10), h = _findHome(hm)
    
    if (users2[hm]) {
        let msg = "Home " + hm + " has " + users2[hm].length + " name" + (users2[hm].length != 1 ? "s" : "") + " attached to it:"
        users2[hm].forEach(n => msg += "\n " + n[0] + ", with the color of " + n[1])
        bot.send(msg + "\n(And the perms of " + admstr[adm[hm] || 0] + ")")
    } else if (h.length == 1) {
        let u = users2[h[0]][0]
        bot.send("Name  │ " + u[0] +
                               "\nColor │ " + u[1] +
                               "\nHome  │ " + h[0] +
                               "\nPerms │ " + admstr[adm[h[0]] || 0])
    } else if (h.length > 1) {
        let cls = "", hms = "", pms = ""
        h.forEach(h => {
            cls += ", " + users2[h][1]
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
        for (let key in users2) {
            users2[key].forEach(n => {if (n[0] == nick) {homes.push(key)}})
        }
        return homes
    }
}

//msg.content.toLowerCase() - content of message
//msg.nick - username
//msg.home - home-id
//msg.date - date when message created
};
bot.connect();