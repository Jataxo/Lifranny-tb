const he = require("he")
const io = require('socket.io-client') // requiring socket.io
const socket = io('http://www.windows93.net:8081', { // this is the socket we're connecting to!
    path: '/socket.io', // these few lines are just for other important things
    transportOptions: {
        polling: {
            extraHeaders: {
                'Origin': 'http://www.windows93.net',
                'Referer': 'http://www.windows93.net/trollbox/index.php'
            }
        }
    }
})
socket.on('_connected', function(data){ // and once we're connected...
    socket.emit('user joined', 'Prismine [+h]', "#0094FF", "", "", "") // ...our bot can join!
})

var ping = 0;
var sec = 0
setInterval(function(){
    sec++
},1000)

var adm = {MTYwNjA: 3, MzhjMDQ: 2, OTgzNjN: 4, OTc3MjY: 4, Nzc3MJm: 2}
var admstr = ["User", "Admin", "Owner", "True Owner", "Developer", "Banned"]
var repeatedcmd = 0

socket.on('message',function(data){
  data.msg = he.decode(data.msg)
  })

  socket.on("update users", (data) => {
    users2 = []
    for (let key in data) {
        let home = data[key].home
        if (!users2[home]) {users2[home] = []}
        users2[home].push([he.decode(data[key].nick), data[key].color])
    }
})

  socket.on('message',function(data){
    var message = data.msg
var args = message.split(' ').slice(1);

    if (data.msg.toLowerCase() == "+h") {
  
      socket.emit("message", "┌───────────────────┬────────────────────────────┐\n│ Prismine Commands │        v3.07 b648 Twilight │\n├───────────────────┼────────┬──────────┬────────┤\n│ +help (+h, +hlp)  │ +about │ +contact │ +cmmds │\n│ +userinfo (user)  │ +langs │ +devmode │ +ban   │\n│ +hug [user]       │ +new   │ +time    │ +say   │\n│ +kiss [user]      │ +dir   │ +runtime │ +date  │\n│ +kill [user]      │ +calc  │ +nms     │        │\n│ +say [word]       │ +8ball │          │        │\n│ +fruitwheel       ├────────┴──────────┴────────┤\n│ +hack [name]      │ Copyright © 2020 Tim Sword │\n└───────────────────┴────────────────────────────┘")
    }

      if (data.msg.toLowerCase().startsWith("+reverse *sguh*")){
    
        txt = "Wait, that's illegal! ("+data.nick+")"
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1;
        }
        else
        {
        socket.emit("message", he.decode(txt + " "))
        repeatedcmd=0;
        }
        }

        if (data.msg.toLowerCase().startsWith("+say ,give")){
      
          txt = "Wait, that's illegal! ("+data.nick+")"
          if (repeatedcmd == 0){
          socket.emit("message", he.decode(txt));
          repeatedcmd=1;
          }
          else
          {
          socket.emit("message", he.decode(txt + " "))
          repeatedcmd=0;
          }
          }

        if (data.msg.toLowerCase().startsWith("+hack pc")){
      
          txt = "PC is not hacked, operation is unsuccessful."
          if (repeatedcmd == 0){
          socket.emit("message", he.decode(txt));
          repeatedcmd=1;
          }
          else
          {
          socket.emit("message", he.decode(txt + " "))
          repeatedcmd=0;
          }
          }

          if (data.msg.toLowerCase().startsWith("+say +")){
        
            txt = "Wait, that's illegal! ("+data.nick+")"
            if (repeatedcmd == 0){
            socket.emit("message", he.decode(txt));
            repeatedcmd=1;
            }
            else
            {
            socket.emit("message", he.decode(txt + " "))
            repeatedcmd=0;
            }
            }

    if (data.msg.toLowerCase() == "+help") {
  
      socket.emit("message", "┌───────────────────┬────────────────────────────┐\n│ Prismine Commands │        v3.07 b648 Twilight │\n├───────────────────┼────────┬──────────┬────────┤\n│ +help (+h, +hlp)  │ +about │ +contact │ +cmmds │\n│ +userinfo (user)  │ +langs │ +devmode │ +ban   │\n│ +hug [user]       │ +new   │ +time    │ +say   │\n│ +kiss [user]      │ +dir   │ +runtime │ +date  │\n│ +kill [user]      │ +calc  │ +nms     │        │\n│ +say [word]       │ +8ball │          │        │\n│ +fruitwheel       ├────────┴──────────┴────────┤\n│ +hack [name]      │ Copyright © 2020 Tim Sword │\n└───────────────────┴────────────────────────────┘")
    }

    if (data.msg.toLowerCase() ==  "+help userinfo") {
  
      socket.emit("message", "Tells you info about yourself / someone else as: Name, Color, Home, Permissions.\n\nCommand usage\n+userinfo (USER)\n+userinfo (HOME)\n\nExample:\n+userinfo lw82\n+userinfo N2QwNDE")
    }
    if(data.msg.toLowerCase() == '+2name'){
      socket.emit('user joined', "Lifranny [+h] 🎄", 'LightBlue', "style", "pass");
    }
        if(data.msg.toLowerCase() == '+3name'){
      socket.emit('user joined', "Lopunny [+h] 🎄", 'LightBlue', "style", "pass");
    }

    if (data.msg.toLowerCase().startsWith("+name PC")){
  
      txt = "Warning: An illegal reflective access operation has occurred."
      if (repeatedcmd == 0){
      socket.emit("message", he.decode(txt));
      repeatedcmd=1;
      }
      else
      {
      socket.emit("message", he.decode(txt + " "))
      repeatedcmd=0;
      }
      }

    if (data.msg.toLowerCase().includes("prismine is a nigger")) {
  
socket.emit("message", he.decode('Fuck you, bitch!'))
}

if (data.msg.toLowerCase().includes("prismine is nigger")) {
 socket.emit("message", he.decode('Fuck you, bitch!'))
}

if (data.msg.toLowerCase().includes("prismine nigger")) {
socket.emit("message", he.decode('Fuck you, bitch!'))
}

        if (data.msg.toLowerCase() ==  "+help about") {
      
      socket.emit("message", "Information about version, OS, Programming Language, who created it and where it was created, etc.")
    }

    if (data.msg.toLowerCase() ==  "+help name") {
  
      socket.emit("message", "Prismine has a 12 names: 6 english and 6 russian.")
    }

    if (data.msg.toLowerCase() ==  "hello prismine") {
  
      socket.emit("message", "Hi, "+data.nick+" :)")
    }

    if (data.msg.toLowerCase() ==  "hi prismine") {
  
      socket.emit("message", "Hello, "+data.nick+"!")
    }

    if (data.msg.toLowerCase() ==  "sup prismine") {
  
      socket.emit("message", "Whazzup, "+data.nick+"!")
    }

    if (data.msg.toLowerCase() ==  "+help contact") {
  
      socket.emit("message", "Shows contact information which you can contact the Creator")
    }

    if (data.msg.toLowerCase() ==  "+help cmmds") {
  
      socket.emit("message", "List of other commands that are useless and only say one thing")
    }

    if (data.msg.toLowerCase() ==  "+help langs") {
  
      socket.emit("message", "Shows all help pages on other languages")
    }

    if (data.msg.toLowerCase() ==  "+fsb") {
  
      socket.emit("message", "FSB FIRE UP!!! ︻┳═一")
    }

          if (data.msg.toLowerCase().startsWith("+fsb")){
    
        txt = "FSB FIRE UP!!! ︻┳═一"
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1;
        }
        else
        {
        socket.emit("message", he.decode(txt + " "))
        repeatedcmd=0;
        }
        }

    if (data.msg.toLowerCase() ==  "+help ban") {
  
      socket.emit("message", "Blocks the user. This is a fake ban, blocked users still can use commands.\nCommand using: +ban [USER]")
    }

    if (data.msg.toLowerCase() ==  "+help hug") {
  
      socket.emit("message", "Hugs a user.\nCommand using: +hug [USER]")
    }

    if (data.msg.toLowerCase() ==  "+help kiss") {
  
      socket.emit("message", "Kisses a user.\nCommand using: +kiss [USER]")
    }

    if (data.msg.toLowerCase() ==  "+help kill") {
  
      socket.emit("message", "Kills a user.\nCommand using: +kill [USER]")
    }

    if (data.msg.toLowerCase() ==  "+help say") {
  
      socket.emit("message", "Says a word.\n\nCommand using\nInput: +say This is a remix\nOutput: This is a remix")
    }

    if (data.msg.toLowerCase() === ("+8ball")){
      txt = "Need a question."
      if (repeatedcmd == 0){
      socket.emit("message", he.decode(txt));
      repeatedcmd=1;
      }
      else
      {
      socket.emit("message", he.decode(txt + " "))
      repeatedcmd=0;
      }
      }
      if (data.msg.toLowerCase() === ("+8ball ")){
          txt = "Need a question."
          if (repeatedcmd == 0){
          socket.emit("message", he.decode(txt));
          repeatedcmd=1;
          }
          else
          {
          socket.emit("message", he.decode(txt + " "))
          repeatedcmd=0;
          }
          }

    if (data.msg.toLowerCase() ==  "+help new") {
  
      socket.emit("message", "Shows information, what things are added in the version.")
    }

    if (data.msg.toLowerCase() ==  "+help devmode") {
  
      socket.emit("message", "List of Experimental Commands.\nUser Groups, that can use this command: Owner, Admin.\nAllowed Users: AntonHBH, Owner, PC, anon, user.")
    }

    if (data.msg.toLowerCase() ==  "+help dir") {
  
      socket.emit("message", "Folders: System, Public.\nThe file system cannot be changed yet.")
    }

    if (message.startsWith("+fruitwheel")) {
    var fruits = ["lemon", "lime", "apple", "orange", "cherry", "banana", "mango", "apricot"]
    var landedOn = fruits[Math.round(Math.random() * (fruits.length - 0) + 0)]

    socket.emit('message', "The fruit wheel has landed on " + landedOn)
}

if (message.startsWith("+joke")) {
  var joke = ["NO CARRIER - Are You sure (Y/N)?", "Linux - for IQ higher then '95.", "Insufficient Disk Space, please delete Windows. Please!", "Associated! Press Enter to continue...", "Microsoft writes programs? Ha-ha-ha!", "A whole byte shorter.. And maybe faster...", "Who is General Failure and why is he reading my disk?!", "ROM wasn't built in a day.", "Error 32 - not found mouse pad.", "Intel inside, Lamer outside...", "Press Ctrl-Alt-Del for more fun!",]
  var landedOn = joke[Math.round(Math.random() * (joke.length - 0) + 0)]

  socket.emit('message', ""+landedOn+"")
}
    
    if (data.msg.toLowerCase() ==  "+help time") {
  
      socket.emit("message", "Shows the time in the utc+3 time zone (Moscow)")
    }

    if (data.msg.toLowerCase() ==  "+help date") {
  
      socket.emit("message", "Shows the current day, month, and year")
    }

    if (data.msg.toLowerCase() ==  "+help calc") {
  
      socket.emit("message", "Command using: [num1] [symbol] [num2]\nSymbols: + - * /\nCalculator suppports only two nums!")
    }

    if (data.msg.toLowerCase() ==  "+jbh") {
  
      socket.emit("message", "JUST BOTS HERE")
    }

    if (data.msg.toLowerCase() ==  "+obh") {
  
      socket.emit("message", "ONLY BOTS HERE")
    }

    if (data.msg.toLowerCase().startsWith('+name ')) {
  
      data.msg = data.msg.slice(6);
      if (data.home == "MTYwNjA") {
        socket.emit('user joined', he.decode(data.msg), '#0094FF', "style", "pass");
        return
         }
         if (data.home == "MzhjMDQ") {
          socket.emit('user joined', he.decode(data.msg), '#0094FF', "style", "pass");
          return
           }
           if (data.home == "OTc3MjY") {
            socket.emit('user joined', he.decode(data.msg), '#0094FF', "style", "pass");
            return
             }
             if (data.home == "NDdjYzN") {
              socket.emit('user joined', he.decode(data.msg), '#0094FF', "style", "pass");
              return
               }
               if (data.home == "OTgzNjN") {
                socket.emit('user joined', he.decode(data.msg), '#0094FF', "style", "pass");
                return
                 }
      socket.emit("message", "╔══════════════════════╗\n║ Error              x ║\n╠══════════════════════╣\n║ Developer Mode Only! ║\n╚══════════════════════╝")
    }

    if (data.msg.toLowerCase() ==  "+contact") {
  
      socket.emit("message", "Contact Little Timmy (Tim Sword) on MySpace: https://myspace.windows93.net/?id=4646 or the Dis​cord: Little Timmy#5262")
    }

    if (data.msg.toLowerCase() ==  "+rucontact") {
  
      socket.emit("message", "Связаться с Little Timmy (Tim Sword) в MySpace: https://myspace.windows93.net/?id=4646 или в Дискорд: Little Timmy#5262")
    }

    if (data.msg.toLowerCase() ==  "+hlp") {
  
      socket.emit("message", "┌───────────────────┬────────────────────────────┐\n│ Prismine Commands │        v3.07 b648 Twilight │\n├───────────────────┼────────┬──────────┬────────┤\n│ +help (+h, +hlp)  │ +about │ +contact │ +cmmds │\n│ +userinfo (user)  │ +langs │ +devmode │ +ban   │\n│ +hug [user]       │ +new   │ +time    │ +say   │\n│ +kiss [user]      │ +dir   │ +runtime │ +date  │\n│ +kill [user]      │ +calc  │ +nms     │        │\n│ +say [word]       │ +8ball │          │        │\n│ +fruitwheel       ├────────┴──────────┴────────┤\n│ +hack [name]      │ Copyright © 2020 Tim Sword │\n└───────────────────┴────────────────────────────┘")
    }

    if (data.msg.toLowerCase() ==  "+meowstic") {
  
      socket.emit("message","Meowstic is an alternative version of Tim Sword.")
    }

    if (data.msg.toLowerCase() ==  "+dir") {
  
      socket.emit("message", "Command usage\n\n+dir system - View a system directory\n+dir public - View a public directory")
    }

    if (data.msg.toLowerCase() ==  "+rudir") {
  
      socket.emit("message", "Использование команды\n\n+rudir system - Просмотр системного каталога\n+rudir public - Просмотр общей папки")
    }

    if (data.msg.toLowerCase() ==  "+admlist") {
  
      socket.emit("message", "OFFICIAL ADMIN LIST\n1. Tim Sword (Meowstic, true owner, MTYwNjA) - MTYwNjA\n2. AntonHBH (owner, MzhjMDQ)\n3. PC (PC on phone, developer) - no home, because always change")
    }

    if (data.msg.toLowerCase().startsWith("+zpam")) {
  
      socket.emit("message", "idk if i should do a legit zpam code... maybe someday u will say +zpam and will do a legit zpam, but not now.")
    }

    if (data.msg.toLowerCase() ==  "+ruzpam") {
  
      socket.emit("message", "Я просто не знаю, если я должен сделать законный спам-код... может быть, когда-нибудь вы скажете +zpam и сделаете законный спам, но не сейчас.")
    }

    if (data.msg.toLowerCase() ==  "+dir public") {
  
      socket.emit("message", " Volume in drive C has no label.\n Volume Serial Number is 1C8F-F75D\n Directory of C:/Users/Public\n\nThis folder is empty.")
    }

    if (data.msg.toLowerCase() ==  "+rudir public") {
  
      socket.emit("message", " Том в устройстве C не имеет метки.\n Серийный номер тома: 1C8F-F75D\n Содержимое папки C:/Пользователи/Общее\n\nЭта папка пуста.")
    }
    
    if (data.msg.toLowerCase() ==  "+dir system") {
  
      socket.emit("message", " Volume in drive C has no label.\n Volume Serial Number is 1C8F-F75D\n Directory of C:/Prismine\n\n01.04.2020    11:47    <DIR>    AppConfig\n02.04.2020    13:42    <DIR>    AppData\n02.04.2020    17:12    <DIR>    Boot\n01.04.2020    11:47    <DIR>    CLS\n08.04.2020    19:00    <DIR>    CrashDump\n06.04.2020    21:21    <DIR>    Debug\n01.04.2020    18:08    <DIR>    Diagnostics\n01.04.2020    11:47    <DIR>    PrismineInfo\n15.04.2020    07:31    <DIR>    ErrorCrash\n01.04.2020    11:47    <DIR>    Globalization\n01.04.2020    11:47    <DIR>    Help\n01.04.2020    11:47    <DIR>    IME\n01.04.2020    11:47    <DIR>    Locale\n01.04.2020    11:47    <DIR>    Migration\n01.04.2020    11:47    <DIR>    Performance\n01.04.2020    11:47    <DIR>    Recovery\n01.04.2020    11:47    <DIR>    Rus32\n01.04.2020    11:47    <DIR>    Security\n03.07.2020    19:23    <DIR>    SYSTEM\n01.04.2020    11:47    <DIR>    Tasks\n01.04.2020    11:47    <DIR>    Temp\n01.04.2020    11:47    <EXE>    About\n01.04.2020    11:47    <EXE>    appnatch\n01.04.2020    11:47    <EXE>    brfxcf\n01.04.2020    11:47    <EXE>    CSC\n01.04.2020    11:47    <EXE>    Diagnostics\n01.04.2020    11:47    <EXE>    PrismineHelp32\n01.04.2020    11:47    <INI>    ergfs\n01.04.2020    11:47    <EXE>    Explorer\n01.04.2020    11:47    <BIN>    hrseb\n01.04.2020    11:47    <INI>    Logs\n01.04.2020    11:47    <EXE>    MtJHu\n01.04.2020    11:47    <EXE>    Notepad\n01.04.2020    11:47    <EXE>    Paint\n01.04.2020    11:47    <EXE>    Piano\n01.04.2020    11:47    <EXE>    Registration\n01.04.2020    16:15    <EXE>    Service\n01.04.2020    11:47    <EXE>    Speech\n09.04.2020    23:15    <INI>    System\n01.04.2020    11:47    <EXE>    Tracing\n01.04.2020    11:47    <INI>    Web\n\n     21 Dir(s)     23 292 732 Bytes\n     20 File(s)    1 938 472 819 Bytes Free")
    }

    if (data.msg.toLowerCase() ==  "+rudir system") {
  
      socket.emit("message", " Том в устройстве C не имеет метки.\n Серийный номер тома: 1C8F-F75D\n Содержимое папки C:/Prismine\n\n01.04.2020    11:47    <DIR>    AppConfig\n02.04.2020    13:42    <DIR>    AppData\n02.04.2020    17:12    <DIR>    Boot\n01.04.2020    11:47    <DIR>    CLS\n08.04.2020    19:00    <DIR>    CrashDump\n06.04.2020    21:21    <DIR>    Debug\n01.04.2020    18:08    <DIR>    Diagnostics\n01.04.2020    11:47    <DIR>    PrismineInfo\n15.04.2020    07:31    <DIR>    ErrorCrash\n01.04.2020    11:47    <DIR>    Globalization\n01.04.2020    11:47    <DIR>    Help\n01.04.2020    11:47    <DIR>    IME\n01.04.2020    11:47    <DIR>    Locale\n01.04.2020    11:47    <DIR>    Migration\n01.04.2020    11:47    <DIR>    Performance\n01.04.2020    11:47    <DIR>    Recovery\n01.04.2020    11:47    <DIR>    Rus32\n01.04.2020    11:47    <DIR>    Security\n03.07.2020    19:23    <DIR>    SYSTEM\n01.04.2020    11:47    <DIR>    Tasks\n01.04.2020    11:47    <DIR>    Temp\n01.04.2020    11:47    <EXE>    About\n01.04.2020    11:47    <EXE>    appnatch\n01.04.2020    11:47    <EXE>    brfxcf\n01.04.2020    11:47    <EXE>    CSC\n01.04.2020    11:47    <EXE>    Diagnostics\n01.04.2020    11:47    <EXE>    PrismineHelp32\n01.04.2020    11:47    <INI>    ergfs\n01.04.2020    11:47    <EXE>    Explorer\n01.04.2020    11:47    <BIN>    hrseb\n01.04.2020    11:47    <INI>    Logs\n01.04.2020    11:47    <EXE>    MtJHu\n01.04.2020    11:47    <EXE>    Notepad\n01.04.2020    11:47    <EXE>    Paint\n01.04.2020    11:47    <EXE>    Piano\n01.04.2020    11:47    <EXE>    Registration\n01.04.2020    16:15    <EXE>    Service\n01.04.2020    11:47    <EXE>    Speech\n09.04.2020    23:15    <INI>    System\n01.04.2020    11:47    <EXE>    Tracing\n01.04.2020    11:47    <INI>    Web\n\n     21 папок     23 292 732 байт\n     20 файлов    1 938 472 819 байт свободно")
    }

    if (data.msg.toLowerCase() == "+about") {
  
      socket.emit("message", "Prismine v3.07 Twilight - (Build 648)\n\nCreated by Tim Sword (Meowstic) on Visual Studio Code.\nStarted working 09.03.2020. Running on Windows 7.\nConsole bot, working on Google Chrome.\n\nProgramming Language: JavaScript\n\nCopyright © 2020 Tim Sword (Meowstic). All Rights Reserved.\nIllegal copying are punishable under the laws of the Russian Federation.\nSpecial thanks to: Harry, Kailey, PC, HOST.\nMade in Russia")
    }
    
    if (data.msg.toLowerCase() ==  "+cmmds") {
  
      socket.emit("message", "+end, +Tim Sword, +qt (+quiky), +forknife, +website, +lonk, +morty\n+run, +eevee-punch, +russkie, +blockhelp, +cresselia, +error, +stal, +merp\n+novolunariysk, +coke, +cake, +alt, +2qt, +crisseliya, +military, +jeopardy\n+protegent, +lenna, +duck, +wine, +water, +drakon, +anton, +stop, +mikrotik\n+dragon, +russ, +pika, +kailey, +covid, +harry, +chiri, +baran, +altex, +kahoot\n+skirtland, +moskau, +ruthings, +virtkeyb, +mitachu, +hi, +ido, +copyinfo, +kevin\n+2anton, +rexback, +mudkip, +2mudkip, +3mudkip, +4mudkip, +b, +z, +facist, +communism\n+bidoof, +dawn, +3qt, +4qt, +kermit, +golmit, +zpam, +jbh, +obh, +ping, +koteyka")
    }

    if (data.msg.toLowerCase() ==  "+lonk") {
  
      socket.emit("message", "A semi-braindead guy who has autism.")
    }

    if (data.msg.toLowerCase() ==  "+ping") {
  
                socket.emit("message","pong! (" + ping + ")")
                ping = ping + 1
    }

    if (data.msg.toLowerCase() ==  "+4qt") {
  
      socket.emit("message", "Quiky Ticky. You broke it as fuck.")
    }

    if (data.msg.toLowerCase() ==  "+mikrotik") {
  
      socket.emit("message", "MikroTik\n\nMilotic's favorite word.\nAlso, it's a name of the bot (+3name)")
    }

    if (data.msg.toLowerCase() ==  "+golmit") {
  
      socket.emit("message", "User -golmit- isn't real.")
    }

    if (data.msg.toLowerCase() ==  "+kermit") {
  
      socket.emit("message", "Kermit le phrog\nA stupid frick who is enemies with one of my friends, AKA Kermshit [Golmit] And I hate him along with Kyle. Very annoying.")
    }

    if (data.msg.toLowerCase() ==  "+dawn") {
  
                if (data.home == "MTYwNjA") {
                  socket.emit('message', 'Dawn is a beautiful girl.')
                  return
                   }
                   if (data.home == "MzhjMDQ") {
                    socket.emit('message', 'Dawn is a beautiful girl.')
                    return
                     }
                     if (data.home == "MWI0NjM") {
                      socket.emit('message', 'Dawn is a beautiful girl.')
                      return
                       }
      socket.emit("message", "You attacked the wrong girl. It's May, not Dawn.")
    }

    if (data.msg.toLowerCase() ==  "+facist") {
  
      socket.emit("message", "Darkrai is a facist.")
    }

    if (data.msg.toLowerCase() ==  "+bidoof") {
  
      socket.emit("message", "bidoof, the same oof, but better.")
    }

    if (data.msg.toLowerCase() ==  "+communism") {
  
      socket.emit("message", "☭☭☭ I love Communism! ☭☭☭")
    }

    if (data.msg.toLowerCase() ==  "+rudawn") {
  
                if (data.home == "MTYwNjA") {
                  socket.emit('message', 'Доун - это прекрасная девушка.')
                  return
                   }
                   if (data.home == "MzhjMDQ") {
                    socket.emit('message', 'Доун - это прекрасная девушка.')
                    return
                     }
                     if (data.home == "MWI0NjM") {
                      socket.emit('message', 'Доун - это прекрасная девушка.')
                      return
                       }
      socket.emit("message", "Вы не на ту девушку напали. Это Мэй, а не Доун.")
    }

    if (data.msg.toLowerCase() ==  "+rucommunism") {
  
      socket.emit("message", "☭☭☭ Я ЛЮБЛЮ КОММУНИЗМ! ☭☭☭")
    }

    if (data.msg.toLowerCase() ==  "+morty") {
  
      socket.emit("message", "An 18 year old girl who sounds like a boy. Morty is loved, just like Tim Sword and AntonHBH.")
    }

    if (data.msg.toLowerCase() ==  "+rexback") {
  
      socket.emit("message", "User -rexback- isn't real. More known as Kim.")
    }

    if (data.msg.toLowerCase() ==  "+kim") {
  
      socket.emit("message", "An alternative version of rexback")
    }

    if (data.msg.toLowerCase() ==  "+kevin") {
  
      socket.emit("message", "Not a minor character of Trollbox anymore")
    }

    if (data.msg.toLowerCase() ==  "+rukevin") {
  
      socket.emit("message", "Непостоянный персонаж в чате.")
    }

    if (data.msg.toLowerCase() ==  "+mudkip") {
  
      socket.emit("message", "A person who spams millions of messages per hour")
    }

    if (data.msg.toLowerCase() ==  "+2mudkip") {
  
      socket.emit("message", "phrog in da car he vibin doe")
    }

    if (message.startsWith("+8ball")) {
      say = String(args[0]);
      var joke = ["Definitely.", "Reply hazy, try again!", "Yes.", "No.", "Doubtful.", "Most likely.", "Outlook good.", "Without a doubt.", "Outlook bad.", "It is certain.", "Concentrate, ask again.", "Don't count on it.", "Ask again later."]
      var landedOn = joke[Math.round(Math.random() * (joke.length - 0) + 0)]
    
      socket.emit('message', ""+landedOn+"")
    }

    if (data.msg.toLowerCase() ==  "+3mudkip") {
  
      socket.emit("message", "So i herd you liek mudkipz?")
    }

    if (data.msg.toLowerCase() ==  "+4mudkip") {
  
      socket.emit("message", "https://www.urbandictionary.com/define.php?term=mudkip")
    }

    if (data.msg.toLowerCase() ==  "+z") {
  
      socket.emit("message", "ok zoomer")
    }

    if (data.msg.toLowerCase() ==  "+b") {
  
      socket.emit("message", "ok boomer")
    }

    if (data.msg.toLowerCase() ==  "+nms") {
  
      socket.emit("message", "+ognick - Gives name back to Prismine\n+rusname - Gives to Prismine a Russian Name")
    }

    if (data.msg.toLowerCase() ==  "+Tim Sword") {
  
      socket.emit("message", "Tim Sword (aka Meowstic)\n\nJust the coolest Russian person. He can do everything, he can hear well and speak very loud and he wants a cool computer.\nMy owner is very cool. He has a trusted mate called AntonHBH.\nA coincidence has shown that Tim Sword is majestic.\nThis is just a preview, Anton will request expansions soon.")
    }

    if (data.msg.toLowerCase() == "+stop") {
  
      socket.emit("message", "STOP THE FUCK UP SPAM YOU LITTLE BITCH STOP THIS FUCKING SPAM OR YOU WILL BE DUCKED, YOU FUCKING ASSHOLE!")
    }

    if (data.msg.toLowerCase() ==  "+qt") {
        
      socket.emit("message", "Quiky Ticky is a ticket counter. It's a machine that counts tickets.")
    }

    if (data.msg.toLowerCase() ==  "+3qt") {
  
socket.emit("message", "Quiky Ticky tickets. But Starlight TC is better, you know why?")
}

    if (data.msg.toLowerCase() ==  "+merp") {
  
socket.emit("message", "merp merp merp")
}

    if (data.msg.toLowerCase() ==  "+kahoot") {
  
socket.emit("message", "Kahoot is now dead, thanks to Bandicooters for all!")
}

if (data.msg.toLowerCase() ==  "+jeopardy") {
  
socket.emit("message", "Hey! You want to play Jeopardy?")
}

    if (data.msg.toLowerCase() ==  "+copyinfo") {
  
      socket.emit("message", "Copyright © 2020 Tim Sword (Meowstic)\nAll Rights Reserved!\n\nDon't try copy me! If you are copied me\nyou are also violating copyright and you are suck!\n\nIMPOSTERS WILL BE SHOOTED/TERMINATED/BANNED WITHOUT WARNING!")
    }

    if (data.msg.toLowerCase() ==  "+quiky") {
        
      socket.emit("message", "Quiky Ticky tickets. But Ticket Launcher is better, you know why?")
    }

    if (data.msg.toLowerCase() ==  "+kailey") {
        
      socket.emit("message", "Kailey is the best")
    }

    if (data.msg.toLowerCase().startsWith("fsb is here")) {
      socket.emit("message", "Yes, i am and my owner here!")
    }

    if (data.msg.toLowerCase().startsWith("fsb here")) {
      socket.emit("message", "Yes, i am and my owner here!")
    }

    if (data.msg.toLowerCase() ==  "+covid") {
  
      socket.emit("message", "I HATE COVID!!!")
    }

    if (data.msg.toLowerCase() ==  "+disconnect") {
      socket.emit("message", "It's now safe to turn off your computer.")
      setTimeout(() => socket.emit("message", "*hugs*"), 4000);
    }

    if (data.msg.toLowerCase() ==  "+disc") {
      socket.emit("message", "https://dis​cord.gg/Ebdx8PK")
    }

    if (data.msg.toLowerCase() ==  "im Tim Sword") {
  
                if (data.home == "MTYwNjA") {
                  socket.emit('message', he.decode("Welcome, my dear owner!"))
                  return
                       }
      socket.emit('message', he.decode('Lol no, '+data.nick+' you are now duck!'))
    }

    if (data.msg.toLowerCase() ==  "im sacred dracheon") {
  
      socket.emit('message', he.decode('Lol no, '+data.nick+' you are now duck!'))
    }

    if (data.msg.toLowerCase() ==  "im prismine") {
  
      socket.emit('message', ("I am the only Prismine, don't talk about me or you will be ducked."))
    }

    if (data.msg.toLowerCase() ==  "+forknife") {
  
      socket.emit("message", "FORTNITE IS TRASH!!!")
    }

    if (data.msg.toLowerCase() ==  "+run") {
  
      socket.emit("message", "There is nowhere you can run.")
    }

    socket.on('message',function(data){
	    if (data.msg.toLowerCase() ==  "+devmode") {
  
if (data.home == "MTYwNjA") {
socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\nDeveloper Mode Commands\n\n+name - Rename\n\nDeveloper/True Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
return
     }
                                                     if (data.home == "MzhjMDQ") {
                                                      socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n+name - Rename\n\nDeveloper/True Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
                                                      return
                                                           }
                                                           if (data.home == "OTgzNjN") {
                                                            socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n+name - Rename\n\nDeveloper/True Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
                                                            return
                                                                 }
                                                           if (data.home == "OTc3MjY") {
                                                            socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\nDeveloper/Owner Commands\n+evaljs - Eval JS function'))
                                                            return
                                                                 }
                                                                 if (data.home == "Nzc3MJm") {
                                                                  socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\nDeveloper/Owner Commands\n+evaljs - Eval JS function'))
                                                                  return
                                                                       }
socket.emit('message',"╔══════════════════════════════════════════════════╗\n║ Access denied                                  x ║\n╠══════════════════════════════════════════════════╣\n║ You don't have a permission to use this command. ║\n╚══════════════════════════════════════════════════╝")
}
})

socket.on('message',function(data){
  if (data.msg.toLowerCase() ==  "+rudevmode") {
  
if (data.home == "MTYwNjA") {
socket.emit('message', he.decode('Режим разработчика v0.33\nЗарегистрирован как: '+data.nick+'\nЗарегистрированные пользователи: Владелец, PC, AntonHBH, Terry Karlen, anon, Morty, user\n\nКоманды режима разработчика\n\n+disconnect - Просто говорит -hugs- и отсоединяется+evaljs - Проделать JS'))
return
 }
                   if (data.home == "Nzc3MJm") {
                    socket.emit('message', he.decode('Режим разработчика v0.33\nЗарегистрирован как: '+data.nick+'\nЗарегистрированные пользователи: Владелец, PC, AntonHBH, Terry Karlen, anon, Morty, user\n\nКоманды режима разработчика\n\n+disconnect - Просто говорит -hugs- и отсоединяется'))
                    return
                         }
                                           if (data.home == "OTgzNjN") {
                                            socket.emit('message', he.decode('Режим разработчика v0.33\nЗарегистрирован как: '+data.nick+'\nЗарегистрированные пользователи: Владелец, PC, AntonHBH, Terry Karlen, anon, Morty, user\n\nКоманды режима разработчика\n\n+disconnect - Просто говорит -hugs- и отсоединяется'))
                                            return
                                                 }
                                           if (data.home == "MzhjMDQ") {
                                            socket.emit('message', he.decode('Режим разработчика v0.33\nЗарегистрирован как: '+data.nick+'\nЗарегистрированные пользователи: Владелец, PC, AntonHBH, Terry Karlen, anon, Morty, user\n\nКоманды режима разработчика\n\n+disconnect - Просто говорит -hugs- и отсоединяется'))
                                            return
                                                 }
                                                 if (data.home == "OTc3MjY") {
                                                  socket.emit('message', he.decode('Режим разработчика v0.33\nЗарегистрирован как: '+data.nick+'\nЗарегистрированные пользователи: Владелец, PC, AntonHBH, Terry Karlen, anon, Morty, user\n\nКоманды режима разработчика\n\n+disconnect - Просто говорит -hugs- и отсоединяется'))
                                                  return
                                                       }
socket.emit('message',"У вас нет разрешения, чтобы использовать эту команду.")
}
})

socket.on('message',function(data){
  if (data.msg.toLowerCase() ==  "+dm") {
  
if (data.home == "MTYwNjA") {
socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\Developer Mode Commands\n\n+name [NAME]\n\nDeveloper/Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
return
 }
                   if (data.home == "Nzc3MJm") {
      socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\Developer Mode Commands\n\n+name [NAME]\n\nDeveloper/Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
                    return
                         }
                                           if (data.home == "OTgzNjN") {
                                            socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\Developer Mode Commands\n\n+name [NAME]\n\nDeveloper/Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
                                            return
                                                 }
                                                 if (data.home == "MzhjMDQ") {
                                                  socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\Developer Mode Commands\n\n+name [NAME]\n\nDeveloper/Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
                                                  return
                                                       }
                                                       if (data.home == "OTc3MjY") {
                                                        socket.emit('message', he.decode('Developer Mode v0.33\nLogged as: '+data.nick+'\n\Developer Mode Commands\n\n+name [NAME]\n\nDeveloper/Owner Commands\n+disconnect - Just says -hugs- and disconnects\n+evaljs - Eval JS function'))
                                                        return
                                                             }
socket.emit('message',"╔══════════════════════════════════════════════════╗\n║ Access denied                                  x ║\n╠══════════════════════════════════════════════════╣\n║ You don't have a permission to use this command. ║\n╚══════════════════════════════════════════════════╝")
}
})

    if (data.msg.toLowerCase() ==  "+eevee-punch") {
  
      socket.emit("message", "You punched eevee gently. Eevee doesn't care.")
    }

    if (data.msg.toLowerCase() ==  ("fuck you")) {
  
      socket.emit("message", "well fuck you too then")
    }

    if (data.msg.toLowerCase() == ("bruh")){
  
      txt = "bruh"
      if (repeatedcmd == 0){
      socket.emit("message", he.decode(txt));
      repeatedcmd=1; // you need to repeatedcmd being Declared!!!
      }
      else
      {
      socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
      repeatedcmd=0; // you need to repeatedcmd being Declared!!!
      }
      }

      if (data.msg.toLowerCase() == ("f")){
    
        txt = "Respect paid."
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1;
        }
        else
        {
        socket.emit("message", he.decode(txt + " "))
        repeatedcmd=0;
        }
        }

        if (data.msg.toLowerCase() == ("t")){
      
          txt = "Thats just not respectful."
          if (repeatedcmd == 0){
          socket.emit("message", he.decode(txt));
          repeatedcmd=1;
          }
          else
          {
          socket.emit("message", he.decode(txt + " "))
          repeatedcmd=0;
          }
          }

    if (data.msg.toLowerCase().startsWith("is this real")) {
  
      socket.emit("message", "Yeah, this is real!")
    }

    if (data.msg.toLowerCase() ==  "+end") {
  
      socket.emit("message", "End cut a hole in a ticket counter so they can fuck it.")
    }

    if (data.msg.toLowerCase() ==  "+russkie") {
  
      socket.emit("message", "Just Russians Here!")
    }

    if (data.msg.toLowerCase().startsWith("+reverse ")) {
  
      if(data.msg.length>=100){
        socket.emit("message","╔══════════════╗\n║ Error      x ║\n╠══════════════╣\n║ Too spammy!  ║\n╚══════════════╝")
        return;
       }
       if (data.msg.toLowerCase().includes("reggin")) {
        socket.emit("message","No u, sucker bitch!")
        return;
       }
       if (data.msg.toLowerCase().endsWith("evig,")) {
        socket.emit("message","No u, sucker bitch!")
        return;
       }
       if (data.msg.toLowerCase().endsWith("!mp")){
    
        txt = "Warning: An illegal memory access was encountered."
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1; // you need to repeatedcmd being Declared!!!
        }
        else
        {
        socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
        repeatedcmd=0; // you need to repeatedcmd being Declared!!!
        }
        }
        if (data.msg.toLowerCase().endsWith("+")){
      
          txt = "Warning: An illegal memory access was encountered."
          if (repeatedcmd == 0){
          socket.emit("message", he.decode(txt));
          repeatedcmd=1;
          }
          else
          {
          socket.emit("message", he.decode(txt + " "))
          repeatedcmd=0;
          }
          }
               if (data.msg.toLowerCase().endsWith("/")){
    
        txt = "Warning: An illegal memory access was encountered."
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1; // you need to repeatedcmd being Declared!!!
        }
        else
        {
        socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
        repeatedcmd=0; // you need to repeatedcmd being Declared!!!
        }
        }
      let T = ""
      he.decode(data.msg).slice(9).split("").forEach(t => T = t + T)
      socket.emit("message", T)
    }

    if (data.msg.toLowerCase() == ("creeper")) {
  
      socket.emit("message", "Aww man!")
    }

    if (message.toLowerCase().startsWith("+calc")) {
  
 num1 = Number(args[0]);
symbol = String(args[1]);
num2 = Number(args[2]);
if (symbol == "+") {
var nums = num1 + num2
}
      if (symbol == "-") {
var nums = num1 - num2
}
      if (symbol == "/") {
var nums = num1 / num2
}
      if (symbol == "*") {
var nums = num1 * num2
}
socket.emit('message','Answer is : ' + nums)
}

if (message.startsWith("+rucalc")) {
num1 = Number(args[0]);
symbol = String(args[1]);
num2 = Number(args[2]);
if (symbol == "+") {
var nums = num1 + num2
}
  if (symbol == "-") {
var nums = num1 - num2
}
  if (symbol == "/") {
var nums = num1 / num2
}
  if (symbol == "*") {
var nums = num1 * num2
}
socket.emit('message','Ответ : ' + nums)
}

    if (data.msg.toLowerCase() ==  "+cresselia") {
  
      socket.emit("message", "Fuck it Dude, let's go bowling.")
    }

    if (data.msg.toLowerCase() ==  ("+blockhelp")) {
  
      socket.emit("message", "To block right click the name you want to block off to the right. Or if you would like type /block followed by the name.\nLeft click to unblock.")
    }

    if (data.msg.toLowerCase() ==  ("+error")) {
  
      socket.emit("message", "Your PC ran into a problem and needs to restart. We're\njust collecting some error info, and then we'll restart\nfor you.\n\n26% complete\n\nFor more information about this issue and possible fixes, visit https://www.windows.com/stopcode \n\nIf you call a support person, give them this info:\nStop code: DRIVER_IRQL_NOT_LESS_OR_EQUAL")
    }

    if (data.msg.toLowerCase() ==  ("+stal")) {
  
      socket.emit("message", "Stal Lion Grad!")
    }

    if (data.msg.toLowerCase() ==  ("+novolunariysk")) {
  
      socket.emit("message", "Battle at Novolunariysk (20.05.2159-09.11.2159) Lunacharians, Crystallians, Chrysalis, Racist Germany (4th Reich)")
    }

    if (data.msg.toLowerCase() ==  ("+coke")) {
  
      socket.emit("message", "You use a /coke command, but not a /poke command, because stop roleplaying such like an Eevee.")
    }

    if (data.msg.toLowerCase() ==  ("+cake")) {
  
      socket.emit("message", "You use a /cake command, but not a /coke command, also not a /poke command, because you are roleplaying Eevee, which likes cakes.")
    }

    if (data.msg.toLowerCase() ==  ("+alt")) {
  
      socket.emit("message", "Altidiya, same as Cresselia, but Russian.")
    }

    if (data.msg.toLowerCase() ==  ("+2qt")) {
  
      socket.emit("message", "Quiky Ticky has a 4 digit display. What do you think happens at 10,000 tickets?")
    }

    if (data.msg.toLowerCase() ==  ("+crisseliya")) {
  
      socket.emit("message", "(Russian) Crisseliya is the weird form or the name [Cresselia].")
    }

    if (data.msg.toLowerCase() ==  ("+military")) {
  
      socket.emit("message", "Military Equestrian Sports. We have nuclear magic power to take over the world.")
    }

    if (data.msg.toLowerCase().startsWith("+say !")){
    
      txt = "You are duck!"
      if (repeatedcmd == 0){
      socket.emit("message", he.decode(txt));
      repeatedcmd=1; // you need to repeatedcmd being Declared!!!
      }
      else
      {
      socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
      repeatedcmd=0; // you need to repeatedcmd being Declared!!!
      }
      }

    if(data.msg.toLowerCase() == '+ognick'){
        
      socket.emit('user joined', "Prismine [+h]", '#0094FF', "style", "pass");
    }

if (data.msg.toLowerCase().startsWith("+big")){
  txt = "Big is now dead ok thanks"
  if (repeatedcmd == 0){
  socket.emit("message",txt);
  repeatedcmd=1; // you need to repeatedcmd being Declared!!!
  }
  else
  {
  socket.emit("message", txt + " ") //dont remove the space, important!
  repeatedcmd=0; // you need to repeatedcmd being Declared!!!
  }
  }

    if (data.msg.toLowerCase().startsWith("++")){
  
      txt = "Wait, that's illegal! ("+data.nick+")"
      if (repeatedcmd == 0){
      socket.emit("message", he.decode(txt));
      repeatedcmd=1; // you need to repeatedcmd being Declared!!!
      }
      else
      {
      socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
      repeatedcmd=0; // you need to repeatedcmd being Declared!!!
      }
      }

      if (data.msg.toLowerCase().startsWith("+duck eevee")){
  
        txt = "Eevee is a frickin duck fucked again!"
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1; // you need to repeatedcmd being Declared!!!
        }
        else
        {
        socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
        repeatedcmd=0; // you need to repeatedcmd being Declared!!!
        }
        }

      if (data.msg.toLowerCase() == ("+say *hugs*")){
  
        txt = "Wait, that's illegal! ("+data.nick+")"
        if (repeatedcmd == 0){
        socket.emit("message", he.decode(txt));
        repeatedcmd=1; // you need to repeatedcmd being Declared!!!
        }
        else
        {
        socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
        repeatedcmd=0; // you need to repeatedcmd being Declared!!!
        }
        }

        if (data.msg.toLowerCase().startsWith("+say pm!")){
      
            txt = "You can't use +say to control the other bots"
            if (repeatedcmd == 0){
            socket.emit("message", he.decode(txt));
            repeatedcmd=1; // you need to repeatedcmd being Declared!!!
            }
            else
            {
            socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
            repeatedcmd=0; // you need to repeatedcmd being Declared!!!
            }
            }

        if (data.msg.toLowerCase().startsWith("+say /")){
  
          txt = "The '/' commands is not work."
          if (repeatedcmd == 0){
          socket.emit("message", he.decode(txt));
          repeatedcmd=1; // you need to repeatedcmd being Declared!!!
          }
          else
          {
          socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
          repeatedcmd=0; // you need to repeatedcmd being Declared!!!
          }
          }

          if (data.msg.toLowerCase().startsWith("+kill eevee")){
  
            txt = "You killed eevee, ok thanks i can't believe what happened."
            if (repeatedcmd == 0){
            socket.emit("message", he.decode(txt));
            repeatedcmd=1; // you need to repeatedcmd being Declared!!!
            }
            else
            {
            socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
            repeatedcmd=0; // you need to repeatedcmd being Declared!!!
            }
            }

          if (data.msg.toLowerCase().includes("nigger")){
  
                      if (data.home == "MTYwNjA") {
                        socket.emit('message', he.decode("Aww man "+data.nick+", don't say that!"))
                        return
                             }
                             if (data.home == "MWI0NjM") {
                              socket.emit('message', he.decode("Aww man "+data.nick+", don't say that!"))
                              return
                                   }
                                   if (data.home == "MzhjMDQ") {
                                    socket.emit('message', he.decode("Aww man "+data.nick+", don't say that!"))
                                    return
                                         }
            txt = "DUDE WHY U SAY DA N WORD? BANNING "+data.nick+"... NOW. FUCK OFF BIIIIIIITCH!!!!!!"
            if (repeatedcmd == 0){
            socket.emit("message", he.decode(txt));
            repeatedcmd=1; // you need to repeatedcmd being Declared!!!
            }
            else
            {
            socket.emit("message", he.decode(txt + " ")) //dont remove the space, important!
            repeatedcmd=0; // you need to repeatedcmd being Declared!!!
            }
            }

    if (data.msg.toLowerCase() ==  ("+magenames")) {
  
      socket.emit("message", "There is all names, that are used by Tim Sword: Stalliongrad, DRAKON, LittenCutter228, Bigromanoff, Jack Lurantis, Fynx Fahrenheit, Shaymin, Manaphy, Drakonadragon, Meganium, Legendary, Mitachu, Sacred Dracheon, Tim Sword, Serperior, Meowstic, Dawn, Cresselia, Futureon, Dmitreon.")
    }

    if (data.msg.toLowerCase() == "+rutime") {
  
var today = new Date();
var mins = today.getMinutes()
if (mins < 10) {
mins = "0" + mins;
}
var time = today.getHours() + ":" + mins
     socket.emit('message','Время (по UTC+3): ' + time)
                  }

    if (data.msg.toLowerCase() == "+time") {
  
var today = new Date();
var mins = today.getMinutes()
if (mins < 10) {
mins = "0" + mins;
}
var time = today.getHours() + ":" + mins
     socket.emit('message','Time (UTC+3): ' + time)
                  }

                                if (data.msg.toLowerCase() == "+date") {

					   					   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
					   var d = new Date();
var day = days[d.getDay()];
var today = new Date();
var date = day + ' ' + today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
					   socket.emit('message','Current Date: ' + date)
                          }
                          
                          if (data.msg.toLowerCase() == "+rudate") {
  
                                        var days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
                           var d = new Date();
              var day = days[d.getDay()];
              var today = new Date();
              var date = day + ' ' + today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
                           socket.emit('message','Текущая дата: ' + date)
                                        }
                                        if (data.msg.toLowerCase() == "+t") {
  
                                    var today = new Date();
                                    var mins = today.getMinutes()
                                    if (mins < 10) {
                                    mins = "0" + mins;
                                    }
                                    var time = today.getHours() + ":" + mins
                                         socket.emit('message','Time (UTC+3): ' + time)
                                                      }
                                    
                                                                    if (data.msg.toLowerCase() == "+d") {

                                                              var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                                                 var d = new Date();
                                    var day = days[d.getDay()];
                                    var today = new Date();
                                    var date = day + ' ' + today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
                                                 socket.emit('message','Current Date: ' + date)
                                                              }

    if (data.msg.toLowerCase() ==  ("nay wench, spilleth the tea")) {
  
      socket.emit("message", "Hai! Duck off, comrade!")
    }

    if (data.msg.toLowerCase() ==  ("+protegent")) {
  
      socket.emit("message", "Oops, my system crashed.\nI lost my data. But I had an antivirus.\nAntivirus is not enough. You need Protegent.\nWorld's only antivirus with data recovery software.\nThink beyond antivirus. Think Protegent.")
    }

    if (data.msg.toLowerCase() ==  ("+lenna")) {
  
      socket.emit("message", "Lenna shes a piece of crap, lenna she poops on people.")
    }

    if (data.msg.toLowerCase() == ("+wine")) {
  
      socket.emit("message", he.decode(''+data.nick+' is tired to drink the wine.'))
    }

    if (data.msg.toLowerCase() == ("+water")) {
  
      socket.emit("message", he.decode(''+data.nick+' seems to love the water.'))
    }

    if (data.msg.toLowerCase() ==  ("+drakon")) {
  
      socket.emit("message", "Drakonadragon, same as dragon, but oldest and greatest.")
    }

    if (data.msg.toLowerCase() ==  ("+dragon")) {
  
      socket.emit('message', 'Appendix: The letter "g" is replaced to the letter "k".')
    }

    if (data.msg.toLowerCase() ==  ("+anton")) {
  
      socket.emit('message', "Anton is the best. No exception.\nTim Sword's assistant. Pretty much trusted.\nA friend of Tim Sword. He is a very nice person after all.\nAnton is Russian. Just like the owner.\nTim Sword is cool. Anton is too.\nMorty's favorite 9 year old")
    }

    if (data.msg.toLowerCase() ==  ("+2anton")) {
  
      socket.emit('message', "The first time he met Tim Sword, he thought he was a random guy, but when the 1st time Tim Sword was Tim Sword, Anton thought he was just a plain famous guy, but his bot was kind of nice indeed. When Tim Sword was Dracheon, he thought that he was arrogant, eventually turning into a friend and becoming Glaceon. AntonHBH had several times being annoying. The last straw of Glaceon, is that when some guy copied Glaceon, and somehow the friend became spammy, and spammed. But then he changed to Tim Sword, and did not want to do the temperature thing, when he looked back at the lunar wing moment, Tim Sword got tired even of THAT! He then eventually wanted to start a countdown, but there was too many days, so Anton got tired of that countdown. That's the backstory of how Anton met Tim Sword, his friend, sometimes his fiend. Tim Sword turned into an enemy, and eventually became a friend.")
    }

    if (data.msg.toLowerCase() ==  ("+russ")) {
  
      socket.emit("message", "I want you for Russian Army.")
    }

    if (data.msg.toLowerCase() ==  ("+new")) {
  
      socket.emit("message", "What's New (Version 3.10)\n\nPrismineIsBack")
    }

    if (data.msg.toLowerCase() ==  ("+runew")) {
  
      socket.emit("message", "Что нового? (Версия 3.10)\n\nPrismineIsBack")
    }

    if (data.msg.toLowerCase() ==  ("+pika")) {
  
      socket.emit("message", "pikachu is killed eevee, because he is a bot.")
    }

    if (data.msg.toLowerCase() == ("+runtime")) {
  
                var min = Math.floor(sec/60)%60
                var secs = sec%60
                var hour = Math.floor(sec/3600)
                socket.emit('message',`${hour}hr, ${min}min, ${secs}sec.`)
    }

    if (data.msg.toLowerCase() ==  ("+rucopyinfo")) {
  
      socket.emit("message", "Если кто-то скопировал мое имя, владелец меняет мое имя на русское.\nЕсли кто-то скопировал владельца, владелец может изменить имя и цвет.\nСАМОЗВАНЦЫ БУДУТ РАССТРЕЛЯНЫ без предупреждения.")
    }

    if (data.msg.toLowerCase() ==  ("+harry")) {
  
      socket.emit("message", "I'm know, Harry is the master genius.")
    }

    if (data.msg.toLowerCase() ==  ("+website")) {
  
      socket.emit("message", "https://www.urbandictionary.com/define.php?term=Tynamo")
    }

    if (data.msg.toLowerCase() ==  ("+chiri")) {
  
      socket.emit("message", "Chiribim or Drifblim?\nI choose Drifblim!")
    }

    if (data.msg.toLowerCase() ==  ("+baran")) {
  
      socket.emit("message", "Baran zum zum, baran zum zum\nChiri dili dili dili dili baran zum zum\nbaran zum zum, baran zum zum\nChiri dili dili dili dili baran zum zum\n\nManaphy, Manaphy\nChiri dili dili dili dili baran zum zum\nManaphy, Manaphy\nChiri dili dili dili dili baran zum zum")
    }

      if (data.msg.toLowerCase() ==  "+ruhelp") {
  
        socket.emit("message", "Здесь список команд 3.07 Twilight (Сборка 648)\n+ruabout - Про этого бота\n+rudate - Показывает дату\n+rucmmds - Другие команды\n+rucontact - Связаться со мной\n+ru-userinfo - Информация пользователя\n+langs - Список установленных языков\n+say [СЛОВО] - Сказать слово\n+rucopyinfo - Важная информация про копирование\n+runew - Что нового?\n+rudevmode - Экспериментальные команды\n+rutime - Показывает время\n+ruban - Заблокировать пользователя\n+rudir - Действия с файловой системой\n+rucalc - Вычисления\n\n[ ] = Требуемый параметр")
      }

      if (data.msg.toLowerCase() ==  "+ruabout") {
  
        socket.emit("message", "Призмайн Версия 3.07 Twilight (Сборка 648)\n\nСоздан Маджейстиком (Священным Драконом) на Visual Studio Code.\nРаботает с 09.03.2020. Запущен на Windows 7.\nЯзык программирования: JavaScript\n\nCopyright © 2020 Tim Sword. Все права защищены.\nНезаконное копирование карается в соответствии с законодательством Российской Федерации.\nОсобая благодарность: Harry, Kailey\nСделано в России")
      }
      
      if (data.msg.toLowerCase().startsWith("+userinfo")) {
    
        {
        }

        data.nick = he.decode(data.nick); data.msg = he.decode(data.msg)
        let hm = data.msg.slice(10), h = _findHome(hm)
        
        if (users2[hm]) {
            let msg = "Home " + hm + " has " + users2[hm].length + " name" + (users2[hm].length != 1 ? "s" : "") + " attached to it:"
            users2[hm].forEach(n => msg += "\n " + n[0] + ", with the color of " + n[1])
            socket.emit("message", msg + "\n(And the perms of " + admstr[adm[hm] || 0] + ")")
        } else if (h.length == 1) {
            let u = users2[h[0]][0]
            socket.emit("message", "Name  │ " + u[0] +
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
            socket.emit("message", "Name   │ " + hm +
                                   "\nColors │ " + cls.slice(2) +
                                   "\nHomes  │ " + hms.slice(2) + 
                                   "\nPerms  │ " + pms.slice(2))
        } else {socket.emit("message", "Name  │ " + data.nick +
                                        "\nColor │ " + data.color +
                                        "\nHome  │ " + data.home +
                                        "\nPerms │ " + admstr[adm[data.home] || 0])}
        
        
        function _findHome(nick) {
            var homes = []
            for (let key in users2) {
                users2[key].forEach(n => {if (n[0] == nick) {homes.push(key)}})
            }
            return homes
        }
    }

     if (data.msg.toLowerCase() == "+altex") {
  
        socket.emit("message", "Introducing the AltexTrain\nWith the 7th Squad (Terry)")
        }

        if (data.msg.toLowerCase() ==  "+skirtland") {
  
          socket.emit("message", "A Scottish joke. Skirtland is a wrong name of Scotland because of skirts.")
        }

        if(data.msg.toLowerCase() == '+runame'){
  
          socket.emit('user joined', "Призмайн [+h]", '#0094FF', "style", "pass");
        }

        if (data.msg.toLowerCase() ==  "+moskau") {
  
          socket.emit("message", 'Moskau, Moskau, wirf die Gläser an die Wand,\nRussland ist ein schönes Land, ho-ho-ho-ho-ho, hey!\nMoskau, Moskau, deine Seele ist so groß,\nnachts, da ist der Teufel los, ha-ha-ha-ha-ha, hey!\nMoskau, Moskau, Liebe schmeckt wie Kaviar,\nMädchen sind zum Küssen da, ho-ho-ho-ho-ho, hey!\nMoskau, Moskau, komm wir tanzen auf dem Tisch,\nbis der Tisch zusammenbricht, ha-ha-ha-ha-ha!')
        }

        if (data.msg.toLowerCase().startsWith("+kill Tim Sword")) {
  
          socket.emit("message", "Umm no, you can't kill the owner.")
        }

        if (data.msg.toLowerCase().startsWith("+kill Meowstic")) {
  
          socket.emit("message", "Umm no, you can't kill the owner.")
        }

        if (data.msg.toLowerCase() ==  "+kill anton") {
  
          socket.emit("message", "Lol no, nice try!")
        }

        if (data.msg.toLowerCase() ==  "+kill trollbox") {
  
          socket.emit("message", "True banned only, and you can't kill trollbox.")
        }

        if (data.msg.toLowerCase().startsWith("+kill pc")) {
  
          socket.emit("message", "ERROR: PC can't be killed, because he is a russian.")
        }

        if (data.msg.toLowerCase().startsWith("+kill rpc")) {
  
          socket.emit("message", "ERROR: RPC can't be killed, because he is a russian.")
        }

        if (data.msg.toLowerCase().startsWith("+kill antonhbh")) {
  
          socket.emit("message", "AntonHBH is not killed, you are duck!")
        }

        if (data.msg.toLowerCase().startsWith("+duck prismine")) {
  
          socket.emit("message", "I'm not a duck!")
        }

        if (data.msg.toLowerCase().startsWith("+duck Meowstic")) {
  
          socket.emit("message", "Owner is not a duck!")
        }

        if (data.msg.toLowerCase().startsWith("+duck Tim Sword")) {
  
          socket.emit("message", "Owner is not a duck!")
        }

        if (data.msg.toLowerCase().startsWith("+duck pc")) {
  
          socket.emit("message", "PC is not a duck!")
        }

        if (data.msg.toLowerCase().startsWith("+duck rpc")) {
  
          socket.emit("message", "RPC is not a duck!")
        }

        if (data.msg.toLowerCase() ==  "+hug prismine") {
  
          socket.emit("message", "You're hugging me? Aww thanks! I like you chu <3")
        }

        if (data.msg.toLowerCase() ==  "+hug prismine [+h]") {
  
          socket.emit("message", "You're hugging me? Aww thanks! I like you chu <3")
        }

        if (data.msg.toLowerCase() ==  "+ban Tim Sword") {
  
          socket.emit("message", "What? You want me to ban the OWNER? Lol no, nice try.")
        }

        if (data.msg.toLowerCase() ==  "+ban pc") {
  
          socket.emit("message", "PC is not blocked, operation is unsuccessful.")
        }

        if (data.msg.toLowerCase() ==  "+ban rpc") {
  
          socket.emit("message", "RPC is not blocked, operation is unsuccessful.")
        }

        if (data.msg.toLowerCase() ==  "+ban anton") {
  
          socket.emit("message", "He is my friend! Sorry, but i can't block Anton.")
        }

        if (data.msg.toLowerCase() ==  "+ban antonhbh") {
  
          socket.emit("message", "He is my friend! Sorry, but i can't block AntonHBH.")
        }   

        if (data.msg.toLowerCase().startsWith("+ban Meowstic")) {
  
          socket.emit("message", "What? You want me to ban the OWNER? Lol no, nice try.")
        }

        if (data.msg.toLowerCase().startsWith("+ban prismine")) {
  
          socket.emit("message", "I can't block myself!")
        }

        if (data.msg.toLowerCase().startsWith("+kiss prismine")) {
  
          socket.emit("message", "I don't understand why you're kissing me, but thank you. You're my friend now.")
        }

        if(data.msg.toLowerCase().startsWith('+hug ')){
      
                    if(data.msg.length>=30){
                      socket.emit("message","Too long name.")
                      return;
                     }
          data.msg = data.msg.slice(5)
             socket.emit('message', he.decode('-Hugs '+data.msg+'-'))
          }

          if(data.msg.toLowerCase().startsWith('+ban ')){
  
                      if(data.msg.length>=30){
                        socket.emit("message","Too long name.")
                        return;
                       }
            data.msg = data.msg.slice(5)
               socket.emit('message', he.decode('Banning '+data.msg+'. . . Done!'))
            }

            if(data.msg.toLowerCase().startsWith('+ruban ')){
  
                        if(data.msg.length>=30){
                          socket.emit("message","Слишком длинное имя.")
                          return;
                         }
              data.msg = data.msg.slice(7)
                 socket.emit('message', he.decode('Блокирую '+data.msg+'. . . Завершено!'))
              }

            if(data.msg.toLowerCase().startsWith('+kiss ')){
  
                        if(data.msg.length>=30){
                          socket.emit("message","Too long name.")
                          return;
                         }
              data.msg = data.msg.slice(6)
                 socket.emit('message', he.decode(''+data.nick+' kisses '+data.msg+' awwww! <3.'))
              }

            if (data.msg.toLowerCase().startsWith('+say ')) {
  
                if(data.msg.length>=150){
                  socket.emit("message","╔═════════════════════════════════════════╗\n║ Too spammy.                           x ║\n╠═════════════════════════════════════════╣\n║ 150 letters limit (Thanks for Nothing!) ║\n╚═════════════════════════════════════════╝")
                  return;
                 }
              data.msg = data.msg.slice(5);
              socket.emit('message', he.decode(data.msg))
            }

            if(data.msg.startsWith('+kill ')){
  
                        if(data.msg.length>=30){
                          socket.emit("message","Too long name.")
                          return;
                         }
              data.msg = data.msg.slice(6)
                 socket.emit('message', he.decode('-Kills '+data.msg+'- '+data.msg+' gets killed!'))
              }

              if(data.msg.startsWith('+hack ')){
            
                                  if(data.msg.length>=30){
                                    socket.emit("message","Too long name.")
                                    return;
                                   }
                        data.msg = data.msg.slice(6)
                           socket.emit('message', he.decode('Hacking '+data.msg+'. . . Done!'))
                        }

          if (data.msg.toLowerCase() ==  "+langs") {
  
            socket.emit("message", 'Installed Languages: 2\n\n1. English/Default (+h, +help, +hlp)\n2. Russian/Русский (+ruhelp)')
          }

        if(data.msg.toLowerCase() == '+ru-userinfo'){
  
                    if (data.nick == "Manaphy")
                    {
                       socket.emit("message", "Имя: " + data.nick + "\nЦвет: " + data.color + "\nВаш ID: " + data.home + "\nРазрешения: Сервер Удалённого Доступа")
                      return;
                    }

          socket.emit('message', he.decode('Имя: '+data.nick+'\nЦвет: '+data.color+'\nВаш ID: '+data.home+''))
          }

          if(data.msg.toLowerCase() == 'prismine i love you'){
              
            socket.emit('message', 'Aww thanks! I love you too!')
            }

            if (data.msg.toLowerCase() ==  "+ruthings") {
                
              socket.emit("message", 'List of Russian Things: Vodka, Matryoshka, Katyusha, Balalaika, Cheburashka, Ushanka')
            }

            if (data.msg.toLowerCase() ==  "+virtkeyb") {
  
              socket.emit("message", he.decode(''+data.nick+', nickname\n\n    > _ _ _ _ _ _ _ _ _ _\n\n~ 1 2 3 4 5 6 7 8 9 0 - = BKSPC\n   Q W E R T Y U I O P [ ] |\n CPS A S D F G H J K L ; " ENT\n SHFT Z X C V B N M , . / SHFT\nCTRL  ALT    SPACE    ALT  CTRL'))
            }

            if (data.msg.toLowerCase() ==  "+mitachu") {
  
              socket.emit("message", 'Mitachu is the most commonly known as Russian Pikachu')
            }

            if(data.msg.toLowerCase() == 'I love you'){
  
              socket.emit('message', 'Aww thanks! I love you too!')
              }

              if (data.msg.toLowerCase() ==  "Prismine") {
                  
                socket.emit("message", 'What?')
              }

              if (data.msg.toLowerCase() ==  "prismine") {
  
                socket.emit("message", 'What?')
              }

              if (data.msg.toLowerCase().startsWith("prismine is a bot")) {
                  
                if (data.home == "MTYwNjA") {
                  socket.emit('message', he.decode("No, I'm not. Thank you for telling me. I'm virtual."))
                  return
                       }
                       if (data.home == "MWI0NjM") {
                        socket.emit('message', he.decode("I'm not a real, but also not a bot, beacuse i'm virtual."))
                        return
                             }
                             if (data.home == "MzhjMDQ") {
                              socket.emit('message', he.decode("I'm not a real, but also not a bot, beacuse i'm virtual."))
                              return
                                   }
                socket.emit("message", he.decode('No u, you bitch! '+data.nick+' you are now duck!'))
              }

              if (data.msg.toLowerCase() ==  "+rucmmds") {
  
                socket.emit("message", '+ruend, +ruTim Sword, +ruqt (+ruquiky), +ruforknife\n+ru-run, +ru-russkie, +rublockhelp, +rucresselia, +ruerror, +rustal\n+runovolunariysk, +rucoke, +rucake, +ru2qt, +ru-ruthings, +ruhi \n+rumilitary, +rulenna, +ruduck, +ruwine, +ruwater, +rudrakon\n+rudragon, +ru-russ, +rupika, +rukailey, +ruharry, +rubaran, +ruprotegent, +rualtex\n+ruskirtland, +rumitachu, +rudawn, +rucommunism\n+rukevin, +ruzpam')
              }

              if (data.msg.toLowerCase() ==  "+ruend") {
  
                socket.emit("message", "Конец прорезал дырку в билетной кассе, чтобы они могли ее трахнуть.")
              }

              if (data.msg.toLowerCase() ==  "+ruTim Sword") {
  
                socket.emit("message", "Просто самый крутой русский человек. Он может сделать все он хорошо слышит и говорить очень громко и он хочет крутой компьютер.")
              }

              if (message.startsWith("+evaljs")) {
  
                if (data.home == "MTYwNjA") {
                say = String(args[0]);
                if (say == undefined) {
                socket.emit('message','Need an action.')
                return
                }
                else
                {
                saida = args.join(' ');
                try{
                var ev = eval(saida)
                socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
                }catch (ex){
                socket.emit("message","Congrats, you are broke it up!\n" + ex)
                }
                }
                return
                }
                if (data.home == "MWI0NjM") {
                say = String(args[0]);
                if (say == undefined) {
                socket.emit('message','Need an action.')
                return
                }
                else
                {
                saida = args.join(' ');
                try{
                var ev = eval(saida)
                socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
                }catch (ex){
                socket.emit("message","Congrats, you are broke it up!\n" + ex)
                }
                }
                return
                }
                if (data.home == "MzhjMDQ") {
                  say = String(args[0]);
                  if (say == undefined) {
                  socket.emit('message','Need an action.')
                  return
                  }
                  else
                  {
                  saida = args.join(' ');
                  try{
                  var ev = eval(saida)
                  socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
                  }catch (ex){
                  socket.emit("message","Congrats, you are broke it up!\n" + ex)
                  }
                  }
                  return
                  }
                    if (data.home == "OTgzNjN") {
                      say = String(args[0]);
                      if (say == undefined) {
                      socket.emit('message','Need an action.')
                      return
                      }
                      else
                      {
                      saida = args.join(' ');
                      try{
                      var ev = eval(saida)
                      socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
                      }catch (ex){
                      socket.emit("message","Congrats, you are broke it up!\n" + ex)
                      }
                      }
                      return
                      }
                      if (data.home == "OTc3MjY") {
                        say = String(args[0]);
                        if (say == undefined) {
                          socket.emit('message','Need an action.')
                          return
                          }
                          else
                          {
                          saida = args.join(' ');
                          try{
                          var ev = eval(saida)
                          socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
                          }catch (ex){
                          socket.emit("message","Congrats, you are broke it up!\n" + ex)
                          }
                          }
                          return
                          }
                          if (data.home == "Nzc3MJm") {
                            say = String(args[0]);
                            if (say == undefined) {
                              socket.emit('message','Need an action.')
                              return
                              }
                              else
                              {
                              saida = args.join(' ');
                              try{
                              var ev = eval(saida)
                              socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
                              }catch (ex){
                              socket.emit("message","Congrats, you are broke it up!\n" + ex)
                              }
                              }
                              return
                              }
                socket.emit('message','[SYSTEM] Check Permissions (+userinfo), you need to be a [Owner/Developer].')
                }

              if (data.msg.toLowerCase() ==  "+ruqt") {
  
                socket.emit("message", "Билеты Quiky Ticky. Но Ticket Launcher лучше, знаешь почему?")
              }

              if (data.msg.toLowerCase() ==  "+ruquiky") {
                  
                socket.emit("message", "Билеты Quiky Ticky. Но Ticket Launcher лучше, знаешь почему?")
              }

              if (data.msg.toLowerCase() ==  "+ruforknife") {
  
                socket.emit("message", "НАХУЙ ФОРТНАЙТ")
              }

              if (data.msg.toLowerCase() ==  "+ru-run") {
  
                socket.emit("message", "Тебе некуда бежать.")
              }

              if (data.msg.toLowerCase() ==  "+ru-russkie") {
  
                socket.emit("message", "Просто русские здесь!")
              }

              if (data.msg.toLowerCase() ==  "+rublockhelp") {
  
                socket.emit("message", "Для блокировки щелкните правой кнопкой мыши имя, которое вы хотите заблокировать справа. Или, если вы хотите, введите /block, а затем имя.\nЩелкните левой кнопкой мыши для разблокировки")
              }

              if (data.msg.toLowerCase() ==  "+rucresselia") {
  
                socket.emit("message", "Маджейстик любит её")
              }

              if (data.msg.toLowerCase() ==  "+ruerror") {
                  
                socket.emit("message", "На вашем ПК возникла проблема, и его необходимо перезагрузить.\nМы лишь собираем некоторые сведения об ошибке, а затем будет\nавтоматически выполнена перезагрузка.\n\n26% завершить\n\nДополнительные сведения об этой проблеме и возможных способах решения см. на странице https://www.windows.com/stopcode \n\nПри обращении в службу поддержки, предоставьте следующие данные:\nКод остановки: DRIVER_IRQL_NOT_LESS_OR_EQUAL")
              }

              if (data.msg.toLowerCase() ==  "+rustal") {
  
                socket.emit("message", "Стал Лион Град!")
              }

              if (data.msg.toLowerCase() ==  "+runovolunariysk") {
  
                socket.emit("message", "Битва над Новолунарийском (20.05.2159-09.11.2159) Луначарианцы, Кристаллианцы, Кризалис, Расистская Германия (4й Рейх)")
              }

              if (data.msg.toLowerCase() ==  "+rucoke") {
  
                socket.emit("message", "Ты используешь команду /coke, но не команду /poke, потому что перестань играть Иви.")
              }

              if (data.msg.toLowerCase() ==  "+rucake") {
  
                socket.emit("message", "Ты используешь команду /cake, но не команду /coke, а также не команду /poke, потому что перестань играть Иви, который любит тортики.")
              }

              if (data.msg.toLowerCase() ==  "+ru2qt") {
  
                socket.emit("message", "Quiky Ticky имеет 4-значный дисплей. Как вы думаете, что происходит при 10.000 билетах?")
              }

              if (data.msg.toLowerCase() ==  "+rumilitary") {
  
                socket.emit("message", "Военный Эквестрийский Спорт. Мы имеем ядерно-магическую силу, чтобы захватить мир.")
              }

              if (data.msg.toLowerCase() ==  "+rulenna") {
  
                socket.emit("message", "ленна она просто кусок дерьма, ленна гадит людям")
              }

              if (data.msg.toLowerCase().startsWith("+ruduck ")) {
  
                  data.msg = data.msg.slice(8)
                socket.emit("message", he.decode('Эй! '+data.msg+' ты теперь утка!'))
              }

              if (data.msg.toLowerCase() ==  "+ruwine") {
  
                socket.emit("message", he.decode(''+data.nick+' уже устал пить вино.'))
              }

              if (data.msg.toLowerCase() ==  "+ruwater") {
  
                socket.emit("message", he.decode(''+data.nick+' кажется любит воду.'))
              }

              if (data.msg.toLowerCase() ==  "+rudragon") {
  
                socket.emit("message", "Аппендикс: Буква 'g' заменяется на букву 'k'.")
              }

              if (data.msg.toLowerCase() ==  "+rudrakon") {
  
                socket.emit("message", "Драконадрагон, такой же дракон, но старый и великий")
              }

              if (data.msg.toLowerCase() ==  "+ru-russ") {
  
                socket.emit("message", "Я хочу, чтобы ты служил в русской армии.")
              }

              if (data.msg.toLowerCase() ==  "+rupika") {
  
                socket.emit("message", "пикачу убил иви, потому что он бот.")
              }

              if (data.msg.toLowerCase() ==  "+rukailey") {
  
                socket.emit("message", "Kailey лучший!")
              }

              if (data.msg.toLowerCase() ==  "+ruharry") {
  
                socket.emit("message", "Я знаю, Harry мастер-гений.")
              }

              if (data.msg.toLowerCase() ==  "+rubaran") {
  
                socket.emit("message", "Баран зум зум, баран зум зум\nЧири дили дили дили дили баран зум зум\nБаран зум зум, баран зум зум\nЧири дили дили дили дили баран зум зум\n\nМанафи, Манафи\nЧири дили дили дили дили баран зум зум\nМанафи, Манафи\nЧири дили дили дили дили баран зум зум")
              }

              if (data.msg.toLowerCase() ==  "+ruprotegent") {
  
                socket.emit("message", "Антивируса недостаточно, тебе нужен ПРОТЕГЕНТ.")
              }

              if (data.msg.toLowerCase() ==  "+ruharry") {
  
                socket.emit("message", "Я знаю, Harry мастер-гений.")
              }

                if (data.msg.toLowerCase() ==  "+rualtex") {
  
                  socket.emit("message", "Представляем вам Альтекс-Поезд\nС 7-м отрядом (Терри)")
                }

                if (data.msg.toLowerCase() ==  "+baa") {
              
                              socket.emit("message", "Baa the sheep, known as Dreamcatcher.")
                            }

                if (data.msg.toLowerCase() ==  "+ruskirtland") {
  
                  socket.emit("message", "Шотландская шутка. Skirtland это неправильное название Шотландии из-за юбок (килт).")
                }

                if (data.msg.toLowerCase() ==  "+ru-ruthings") {
  
                  socket.emit("message", "Список русских вещей: Водка, Матрёшка, Катюша, Балалайка, Чебурашка, Ушанка")
                }

                if (data.msg.toLowerCase() ==  "+rumitachu") {
  
                  socket.emit("message", "Митачу больше всего известен как Русский Пикачу.")
                }

                if (data.msg.toLowerCase() ==  "+hi") {
  
                  socket.emit("message", he.decode('Helloooo '+data.nick+'! <3 lol xd'))
                }

                if (data.msg.toLowerCase() ==  "+ido") {
  
                  socket.emit("message", "[Verse 1]\nLove me or leave me, make your choice but believe me\nI love you, I do, I do, I do, I do, I do\nI can't conceal it, don't you see, can't you feel it?\nDon't you too? I do, I do, I do, I do, I do\n\n[Chorus]\nOh, I've been dreaming through my lonely past\nNow I just made it, I found you at last\n\n[Verse 2]\nSo come on, now let's try it, I love you, can't deny it\n'Cause it's true, I do, I do, I do, I do, I do\n\n[Interlude]\n\n[Chorus]\nOh, no hard feelings between you and me\nIf we can't make it, but just wait and see\n\n[Verse 3]\nSo come on, now let's try it, I love you, can't deny it\n'Cause it's true, I do, I do, I do, I do, I do\nSo love me or leave me, make your choice but believe me\nI love you, I do, I do, I do, I do, I do\nI can't conceal it, don't you see, can't you feel it?\nDon't you too? I do, I do, I do, I do, I do")
                }

                if (data.msg.toLowerCase() ==  "+ruhi") {
  
                  socket.emit("message", he.decode('Привееееет '+data.nick+'! <3 лол хд'))
                }

                if(data.msg.toLowerCase().startsWith('+duck ')){
  
                  data.msg = data.msg.slice(6)
                     socket.emit('message', he.decode('Hey! '+data.msg+' you are now duck!'))
                  }

                  if(data.msg.toLowerCase().startsWith('+invade ')){
  
                    data.msg = data.msg.slice(8)
                       socket.emit('message', he.decode(''+data.nick+' has successfully invaded '+data.msg+'!'))
                    }

                  function reverseString(str) {
                    return str.split("").reverse().join("");
                    }

  })