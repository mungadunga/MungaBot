module.exports = {
    name: 'insult',
    description: "do not try to insult mungabot... and do not prepare a comeback cuz ur about to get smashed...",
    execute(message, args){

        const Discord = require('discord.js');
        let user = message.mentions.members.first();
        let guild = message.guild
        var d = Math.random();

        if (d > 0.66){
            message.channel.send(`You're an idiot. A moron of the highest order. You're so stupid it's a wonder and a pity you can remember to breath. Intelligent ideas bounce off your head as if it were coated with teflon. Creative thoughts take alternate transportation in order to avoid even being in the same state as you. If you had an original thought it would die of loneliness before the hour was out. On an intelligence scale of 1 to 10 (10 corresponding to the highest attainable IQ) you're rating is so far into negative numbers that one would need to travel into another quantum reality in order to even catch a distant glimpse of it. Shut up and go away lest you achieve the physical retribution your behaviour merits.`);
        } else if (d < 0.33){
            message.channel.send(`What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.`);
        } else {
            message.channel.send("Listen here you toe-eyed cabbage, i wasn't born into this world so your fat ass could choke out low level insults at me. I hope you stub your toe in the dark and have to crawl around your bedroom at 3:47am in horrific pain after going to the kitchen for a midnight snack of cheese and crackers you absolute gormless minger")
        }
    }
}