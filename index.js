// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require("fs")
const request = require('request');
const moment = require("moment-timezone")
const axios = require("axios")
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch');
const { error } = require("qrcode-terminal")
const ms = require('parse-ms')
const toMs = require('ms')
const crypto = require('crypto')
const yts = require( 'yt-search')

const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { webp2mp4File} = require('./lib/webp2mp4')
const { recognize } = require('./lib/ocr')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))

const imagenya = JSON.parse(fs.readFileSync('./media/image.json'))
const usher = JSON.parse(fs.readFileSync('./database/user.json'))
const prem = JSON.parse(fs.readFileSync('./database/prem.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const gc_verify = JSON.parse(fs.readFileSync('./database/gcverify.json'))


banChats = true
offline = false
targetpc = '6283803728334'
owner = '6285785445365'
fake = 'AR BOTZ'
numbernye = '0'
waktu = '-'
alasan = '-'

const ownerNumber = ["6285852203076@s.whatsapp.net"]   

//=================================================//
module.exports = lolikiller = async (lolikiller, loli) => {
	try {
        if (!loli.hasNewMessage) return
        loli = loli.messages.all()[0]
		if (!loli.message) return
		if (loli.key && loli.key.remoteJid == 'status@broadcast') return
		global.blocked
        	loli.message = (Object.keys(loli.message)[0] === 'ephemeralMessage') ? loli.message.ephemeralMessage.message : loli.message
        	const content = JSON.stringify(loli.message)
		const from = loli.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(loli.message)[0]        
                const cmd = (type === 'conversation' && loli.message.conversation) ? loli.message.conversation : (type == 'imageMessage') && loli.message.imageMessage.caption ? loli.message.imageMessage.caption : (type == 'videoMessage') && loli.message.videoMessage.caption ? loli.message.videoMessage.caption : (type == 'extendedTextMessage') && loli.message.extendedTextMessage.text ? loli.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && loli.message.conversation.startsWith(prefix)) ? loli.message.conversation : (type == 'imageMessage') && loli.message.imageMessage.caption.startsWith(prefix) ? loli.message.imageMessage.caption : (type == 'videoMessage') && loli.message.videoMessage.caption.startsWith(prefix) ? loli.message.videoMessage.caption : (type == 'extendedTextMessage') && loli.message.extendedTextMessage.text.startsWith(prefix) ? loli.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? loli.message.conversation : (type === 'extendedTextMessage') ? loli.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = lolikiller.user.jid
		const botNumberss = lolikiller.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? loli.participant : loli.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await lolikiller.chats.all()
		const groupMetadata = isGroup ? await lolikiller.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = loli.key.fromMe ? lolikiller.user.jid : lolikiller.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = loli.key.fromMe ? lolikiller.user.name : conts.notify || conts.vname || conts.name || '-'


        //MESS
		mess = {
			wait: '❲❗❳ *LOADING*',
			success: '❲✔❳ *SUCCESS*',
			wrongFormat: '❲✗❳ *The format you entered is wrong*',
			error: {
				stick: `❲❗❳  *It's not a sticker*`,
				Iv: '❲✗❳  *Link error*'
			},
			only: {
				group: '❲❗❳ *Group only*',
				ownerB: '❲❗❳ *Owner bot only*',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            lolikiller.sendMessage(from, teks, text, {quoted:loli})
        }

        const sendMess = (hehe, teks) => {
            lolikiller.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? lolikiller.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : lolikiller.sendMessage(from, teks.trim(), extendedText, { quoted: loli, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            lolikiller.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/ward.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            lolikiller.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/ward2.jpeg'),quoted:loli,caption:yes})
        }
        const fakegroup = (teks) => {
            lolikiller.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/ward3.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        lolikiller.sendMessage(to, media, MessageType.sticker,{quoted:loli})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    lolikiller.sendMessage(to, media, type, { quoted: loli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!loli.key.remoteJid.endsWith('@g.us') && offline){
            if (!loli.key.fromMe){
            if (isAfk(loli.key.remoteJid)) return
            addafk(loli.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            lolikiller.sendMessage(loli.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (loli.key.remoteJid.endsWith('@g.us') && offline) {
        if (!loli.key.fromMe){
        if (loli.message.extendedTextMessage != undefined){
        if (loli.message.extendedTextMessage.contextInfo != undefined){
        if (loli.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of loli.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(loli.key.remoteJid)) return
        addafk(loli.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        lolikiller.sendMessage(loli.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!loli.key.fromMe &&!isOwner && banChats === true) return
switch (command) {
	case 'tes':
	fakegroup('*OK ✓*')
	break	
    case 'menu':
    case 'help':
    	var menu = `⚚ ❲ 𝔸ℝ 𝔹𝕆𝕋ℤ ❳ ⚚

乡 *ABOUT BOT* 
▹ ${prefix}runtime
▹ ${prefix}join

乡 *OWNER MENU* 
▹ ${prefix}on
▹ ${prefix}off
▹ ${prefix}self
▹ ${prefix}public
▹ ${prefix}upswtxt
▹ ${prefix}upswimg
▹ ${prefix}upswvideo
▹ ${prefix}setthumb
▹ ${prefix}setreply
▹ ${prefix}setfakeimg
▹ ${prefix}exec

乡 *CONVERTER MENU* 
▹ ${prefix}linkprev
▹ ${prefix}take
▹ ${prefix}stickerwm
▹ ${prefix}sticker
▹ ${prefix}tovn
▹ ${prefix}tomp3
▹ ${prefix}bass

乡 *GROUP MENU*

⚚ ❲ 𝔸ℝ 𝔹𝕆𝕋ℤ ❳ ⚚
`
        	fakestatus(menu)
           	break
case 'tupai':
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: loli})
				fs.unlinkSync(ran)
			})
			break
case 'bass':
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: loli})
				fs.unlinkSync(ran)
			})
			break
case 'tomp3':
			lolikiller.updatePresence(from, Presence.composing)
			if (!isQuotedVideo) return reply('itu video?')
			reply(mess.only.wait)
			encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Error')
				buffer = fs.readFileSync(ran)
				lolikiller.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: loli })
				fs.unlinkSync(ran)
			})
			break 
case 'join':
			try {
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
				ini_url = args[0]
				if (!q) return fakegroup2('*Enter group link!!')
				var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
				if (!codeInvite) return fakegroup('pastikan link sudah benar!')
				var response = await lolikiller.acceptInvite(codeInvite)
				fakestatus('SUKSES')
			} catch {
				fakegroup2('LINK ERROR!')
			}
			break
    case 'group':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!loli.key.fromMe & !isGroupAdmins) return reply(mess.only.group_admin)
			if (args[0] === 'open' ) {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, false)
				fakegroup(`*↦* Success Open Group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'close' ) {
				await lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, true)
				fakegroup(`*↦* Success Close Group\n*${groupMetadata.subject}*`)
			}
			break
case 'runtime':
			run = process.uptime()
			teks = `${kyun(run)}`
			fakegroup(teks)
			break
    case 'tovn': 
		 	  if ((isMedia && !loli.message.videoMessage || isQuotedImage) && args.length == 0) {
			  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
		 	  const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			  lolikiller.sendMessage(from, '*Wait!*', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "caption": `*lolikiller.herokuapp.com*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
			  await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
			  .then(teks => {								 
		  	  fs.unlinkSync(media)							                           
              lolikiller.updatePresence(from, Presence.recording) 
              const gtts = require('./lib/gtts')("id")
              const ndakbisa = `${teks}`             
              ranm = getRandom('.mp3')
              ndakbisa.length > 600
              ? reply('*Mostly text!!*')
              : gtts.save(ranm, ndakbisa, function() {
              lolikiller.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "caption": `*Nih!!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
              fs.unlinkSync(ranm)
              })
              })}	
              break
    case 'on':
            if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            offline = false
            fakestatus('*ONLINE MODE ✓*')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? 'OFFLINE' : 'ONLINE'}\n${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`)
            break
    case 'off':
            if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus('*OFFLINE MODE ✓*')
            break   
    case 'linkprev':
            if(!q) return reply('*Enter link!*')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break

    case 'reverse':
            if (!isQuotedVideo) return fakegroup('apa?')
            encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            lolikiller.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: loli })
            fs.unlinkSync(ran)
            })
            break

    case 'take':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, lolikiller, loli, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !loli.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
             media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            lolikiller.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: loli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            lolikiller.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: loli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && loli.message.videoMessage.seconds < 11 || isQuotedVideo && loli.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
            const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            lolikiller.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: loli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            lolikiller.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: loli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswtxt':
            if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (!q) return fakestatus('What is the text?!')
            lolikiller.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story whatsapp text ${q}`)
            break
    case 'upswimg':
            if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
            cihcih = await lolikiller.downloadMediaMessage(swsw)
            lolikiller.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            lolikiller.sendMessage(from, bur, text, { quoted: loli })
            } else {
            fakestatus('*Reply this image!*')
            }
            break
    case 'upswvideo':
            if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
            cihcih = await lolikiller.downloadMediaMessage(swsw)
            lolikiller.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            lolikiller.sendMessage(from, bur, text, { quoted: loli })
            } else {
            fakestatus('*Reply this video!*')
            }
            break

    case 'public':
          	if (!loli.key.fromMe && !isOwner) return fakestatus(mess.only.ownerB)
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`*PUBLIC MODE ✓*`)
          	break
	case 'self':
          	if (!loli.key.fromMe && !isOwner) return fakestatus(mess.only.ownerB)
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`*SELF MODE ✓*`)
          	break

    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !loli.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
            const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                lolikiller.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: loli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && loli.message.videoMessage.seconds < 11 || isQuotedVideo && loli.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(loli).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : loli
                const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            lolikiller.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: loli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               

	case 'setreply':
	case 'setfake':
	        if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`*Success ✓*`)
			break
	case 'setfakeimg':
	        if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
        	if ((isMedia && !loli.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
			delb = await lolikiller.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('*Success ✓*')
        	} else {
            reply(`Send a picture with a caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	        if ((isMedia && !loli.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(loli).replace('quotedM','m')).message.extendedTextMessage.contextInfo : loli
			delb = await lolikiller.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('*Success ✓*')
        	} else {
            reply(`Send a picture with a caption ${prefix}sethumb`)
          	}
			break	
	
	case 'exec':
	if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`AR BOTZ:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
    if (!loli.key.fromMe && !isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Enter group link')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('Make sure the link is correct!')
            var response = await lolikiller.acceptInvite(codeInvite)
            fakestatus('*Success ✓*')
            } catch {
            fakegroup('*LINK ERROR!*')
            }
            break

default:
if (budy.startsWith('x')){
try {
return lolikiller.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: loli})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
