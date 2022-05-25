const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = process.env.PREFIX;
let nbr1 = 30;
let idowner = "902278011691368458";

client.on('ready', () => {
 console.log("Made by Kazehaya#3276");

});

client.on("guildMemberAdd", member => {
  try {

    function makeid(length) 
		{
			var result           = [];
			var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for ( var i = 0; i < length; i++ ) {
			  result.push(characters.charAt(Math.floor(Math.random() * 
		 charactersLength)));
		   }
		   return result.join('');
		}

		const passwordsuper = (makeid(nbr1)) // Storing the key in a variable


    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
      if(db.tiene(`${passwordsuper}`)) return member.send("**ERROR KEY:** The key already exists.")
    db.establecer(`${passwordsuper}.${member.id}`, {keys: passwordsuper}, {iddiscord: member.id})

          const embedguildMemberAdd = new Discord.RichEmbed()
          .setTitle("Wlecome » ProtonDev!")
          .setColor(0x00AE86)
          .setImage('https://c.tenor.com/LDuF2jVabwoAAAAC/banner-welcome.gif')
          .setDescription(`• Enter the code to be verified\n\n**Your access code:** ||\`${passwordsuper}\`||`)
          .setFooter(`Developped By OldModz95`);

      member.send(embedguildMemberAdd);
  } catch (error){
      console.log(`Error : ${error}`)
  }
});

client.on('message', async message => {

  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const memberaction = message.author.id;

 if(command === 'random-key'){
    
      if(message.channel.type === 'dm') return;

      if (message.author.id !== idowner)
      return message.channel.send("The command can only be used by OldModz95.")
      message.delete()
      //Add
      function makeid(length) 
		{
			var result           = [];
			var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for ( var i = 0; i < length; i++ ) {
			  result.push(characters.charAt(Math.floor(Math.random() * 
		 charactersLength)));
		   }
		   return result.join('');
		}

		const passwordsuper = (makeid(nbr1)) // Storing the password in a variable


    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
      if(db.tiene(`${passwordsuper}`)) return message.author.send("**ERROR KEY:** The license already exists.")
    db.establecer(`${passwordsuper}.${message.author.id}`, {keys: passwordsuper, membre: memberaction})

          const GenLicense = new Discord.RichEmbed()
          .setTitle("License Generate » ProtonDev!")
          .setColor(0x00AE86)
          .setDescription(`• **Key access:** ||\`${passwordsuper}\`||`)
          .setFooter(`Developped By OldModz95`);

          message.author.send(GenLicense);
  }
 
 
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
