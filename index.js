const Discord = require('discord.js'); //โมดูลหลัก Discord
const client = new Discord.Client(); //Client Discord
const language = "th-TH"; //ตัวแสดงภาษา จะมีอยู่ 2 ตัว คือ: en-US และ th-TH สามารถเปลี่ยนได้

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); //ตัวแสดงที่บ่งบอกว่า บอททำงานแล้ว
});

client.on('message', msg => {
  let lang;
  if(language == "th-TH"){
    lang = require(`command_th.json`); //ตัวดึงภาษาไทย
  } else {
    lang = require(`command_en.json`); //ตัวดึงภาษาอังกฤษ
  }
  
  if (msg.content === 'ping') {
    msg.reply(lang.pong); //ตัวที่ดึงมาในส่วน pong ในไฟล์ command.json
  }
});

client.login('token');
