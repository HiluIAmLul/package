const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
name: "advice",
category: "fun",
usage: "advice", 
description: "Provieds You a random advice",
run: async (client, message, args) => {

let data = await random.getAdvice()
    message.channel.send(data)


}
}
