const groupmenu = (prefix, salam, pushname, isOwner, Lolikiller, sender) => {
	return `╔═════════════════㋛︎
║┏━━「 𝗔𝗕𝗢𝗨𝗧 𝗨𝗦𝗘𝗥 」
║┃
║┣☢︎︎ ${salam} kak
║┣☢︎︎ *Nama* : ${pushname}
║┣☢︎︎ *Owner* : ${isOwner ? "true":"false"}
║┣☢︎︎ *Nomor* : ${sender.split('@')[0]}
║┗━━━━━━━━━━━━㋛︎
║┏━━「 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 」
║┃
║┣☢︎︎ ${prefix}tagall
║┣☢︎︎ ${prefix}listadmin
║┣☢︎︎ ${prefix}demote
║┣☢︎︎ ${prefix}promote
║┣☢︎︎ ${prefix}kick
║┣☢︎︎ ${prefix}add
║┣☢︎︎ ${prefix}setdesc
║┣☢︎︎ ${prefix}setnamegc
║┣☢︎︎ ${prefix}group
║┣☢︎︎ ${prefix}setppgc
║┣☢︎︎ ${prefix}leave
║┣☢︎︎ ${prefix}linkgc
║┣☢︎︎ ${prefix}getbio
║┣☢︎︎ ${prefix}antilink
║┣☢︎︎ ${prefix}revoke
║┣☢︎︎ ${prefix}kontag
║┗━━━━「 ${Lolikiller.user.name} 」
╚═════════════════㋛︎
`
}

exports.groupmenu = groupmenu
