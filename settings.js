//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +51919465759
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "" //ur yt chanel name
global.socialm = "" //ur github or insta name
global.location = "Peru" //ur location

//new
global.botname = 'Zxc Bot' //ur bot name
global.ownernumber = '929766663' //ur owner number
global.ownername = '𝙅𝙤𝙨𝙪𝙚 🐘' //ur owner name
global.websitex = ""
global.wagc = ""
global.themeemoji = '🪀'
global.wm = "Zxc Bot"
global.botscript = '' //script link
global.packname = "Sticker By"
global.author = "Sotware Beta\n\nCreador : Josue\nNumber : 929766663"
global.creator = "51929766663@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["51929766663"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: '¡Tu límite ha llegado!',
	nsfw: 'Nsfw está deshabilitado en este grupo. Dígale al administrador que lo habilite.',
    done: 'Hecho✓',
    error: 'Error!',
    success: 'Aquí tienes!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})