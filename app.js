const Discord = require('discord.js');

const client = new Discord.Client();
const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();
const PREFIX = '/';

// [alpha]

client.once('ready', async () => {
	// [beta]
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
	if (message.author.bot) return;
	currency.add(message.author.id, 1);

	if (!message.content.startsWith(PREFIX)) return;
	const input = message.content.slice(PREFIX.length).trim();
	if (!input.length) return;
	const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);

	if (command === 'balance') {
		// [gamma]
	} else if (command === 'inventory') {
		// [delta]
	} else if (command === 'transfer') {
		// [epsilon]
	} else if (command === 'buy') {
		// [zeta]
	} else if (command === 'shop') {
		// [theta]
	} else if (command === 'leaderboard') {
		// [lambda]
	}
});

Reflect.defineProperty(currency, 'add', {
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});

Reflect.defineProperty(currency, 'getBalance', {
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

const storedBalances = await Users.findAll();
storedBalances.forEach(b => currency.set(b.user_id, b));

const target = message.mentions.users.first() || message.author;
return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);

const target = message.mentions.users.first() || message.author;
const user = await Users.findOne({ where: { user_id: target.id } });
const items = await user.getItems();

if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
return message.channel.send(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);

const currentAmount = currency.getBalance(message.author.id);
const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
const transferTarget = message.mentions.users.first();

if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

currency.add(message.author.id, -transferAmount);
currency.add(transferTarget.id, transferAmount);

return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${currency.getBalance(message.author.id)}💰`);

const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: commandArgs } } });
if (!item) return message.channel.send(`That item doesn't exist.`);
if (item.cost > currency.getBalance(message.author.id)) {
	return message.channel.send(`You currently have ${currency.getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
}

const user = await Users.findOne({ where: { user_id: message.author.id } });
currency.add(message.author.id, -item.cost);
await user.addItem(item);

message.channel.send(`You've bought: ${item.name}.`);

const items = await CurrencyShop.findAll();
return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });

return message.channel.send(
	currency.sort((a, b) => b.balance - a.balance)
		.filter(user => client.users.cache.has(user.user_id))
		.first(10)
		.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
		.join('\n'),
	{ code: true }
);

client.login('NzE0MTE5NzQwOTcyNTk3MzE4.XvOCPA.w2IYdBSaQU3_rjntQbCYDcHMzic');