const Discord = require("discord.js");
const Client = new Discord.Client();
let prefix = process.env.PREFIX;

client.on('ready', () => {
 console.log("========================");
 console.log("Made by Kazehaya#3276");
 console.log("========================")

});

client.on('message', async (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

      if(command === 'add-key'){
    
      if(message.channel.type === 'dm') return;

      if (message.author.id !== '') //Put your id of discord in the ''
      return message.channel.send("This command can only be used by: Kazehaya#3276")
      message.delete()
      //Add
    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
    if(!args[0]) return message.channel.send("Write an argument to enter a new key.")
      if(db.tiene(`${args[0]}`)) return message.channel.send("This key already exists.")
    db.establecer(`${args[0]}.${message.author.id}`, {keys: args[0]})
    message.channel.send(`**Key Added: **||${args[0]}||`)
  }
    if(command === 'delete-key'){

      if(message.channel.type === 'dm') return;
        if (message.author.id !== '') //Put your id of discord in the ''
          return message.channel.send("This command can only be used by: Kazehaya#3276")
           message.delete()
  //delete
    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene(`${args[0]}`)) return message.channel.send("There is no keys called like this.")
    if(db.tiene(`${args[0]}`)){
      db.eliminar(`${args[0]}`) 
    message.channel.send(`**Key Removed:** ||${args[0]}||`)

  }
  
}

   if(command === 'redeem'){

    if(message.channel.type === 'dm') return;
    
  const Discord = require("discord.js")
  const megadb = require("megadb")
  const db = new megadb.crearDB("keys")
  let member = message.member;
  if(!db.tiene(`${args[0]}`)) return message.channel.send("Wrong key")
  
  const embed = new Discord.RichEmbed() 
    .setTitle("Redeem » Successfully!")
    .setColor(0x00AE86)
    .setDescription(`• ${message.author}, You just got the **Vip** role and you can use the generator now.`)
    .setThumbnail("https://images-ext-1.discordapp.net/external/t_vikGsLiBbjaGG4NwT-q2N6B4bcenOFUstYmDXLhe4/%3Fwidth%3D424%26height%3D318/https/images-ext-1.discordapp.net/external/UEu3Cx_CnK2HB4MXx6l1hypTiwG1YWAVO1dIDyDe4h8/https/i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif?width=212&height=159")
    .setFooter(`redeem used by ${message.author.tag}`);
    member.addRole("") //Put the id of the role you want the user to get into the ""
        
    message.channel.send(embed)
      if(db.tiene(`${args[0]}`)){
    db.eliminar(`${args[0]}`)
  
    }
  }



});

client.login("process.env.TOKEN")