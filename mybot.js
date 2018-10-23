const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + ":boss times:")) {
    message.channel.send("Formen filas y saquenle las tripas >:D!");

  } else
  if(message.content.startsWith(prefix + "hola")) { 
     message.channel.send("Holaaaaaa?");

  } else
  if(message.content.startsWith(prefix + "sandwich")) { 
     message.channel.send("Quièn dijo sandwich? Yo quiero unirme");   

  } else
  if(message.content.startsWith(prefix + "Kiasco")) { 
     message.channel.send("Callate");   
     
  } else
  if(message.content.startsWith(prefix + "quiero mì cafe!")) { 
      message.channel.send("A la orden mì Sr. :3"); 

  } else
  if(message.content.startsWith(prefix + "Himeko quieres estar en mì sandwish?")) { 
      message.channel.send("Claro que sì"); 

  } else
    if(message.content.startsWith(prefix + "donde esta mì cafe!")) { 
      message.channel.send("lo siento mì Sr. me lo tome. ahorita le hago otro");

  } else
    if(message.content.startsWith(prefix + "que hora es?")) { 
     message.channel.send("Sandwich Time");

  }

});

client.login(config.token);