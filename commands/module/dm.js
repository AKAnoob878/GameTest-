var commandInfo = {
    cancelMessage: true,
    description: '每日簽到系統',
    usage: [
        'dm',
    ]
};

var today = new Date();

function execute(chatmsg, args, Minecraft) {
	const sender = chatmsg.sender.name;
	const data = Minecraft.Commands.run(`scoreboard players add ${sender} dm 0`)
	let Message = data.statusMessage;
	let sub = (Message.split(" "));
	let scoreN = sub[7];
	let score = scoreN.replace(")", "")
	if (score != today.getDate()) { 
	Minecraft.Commands.run(`tellraw "${sender}" {"rawtext":[{"text":"§l§b成功簽到!"}]}`)
	Minecraft.Commands.run(`scoreboard players set ${sender} dm ${today.getDate()}`);
	Minecraft.Commands.run(`give "${sender}" grass 1 0`)//自訂物品可搭配structure
	return
	}
	if (score = today.getDate()) return Minecraft.Commands.run(`tellraw "${sender}" {"rawtext":[{"text":"§l§c你今日已經簽到過，請明日再來!!!"}]}`)
}
export { commandInfo, execute };
