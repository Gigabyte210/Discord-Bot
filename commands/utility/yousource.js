const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('you-source')
		.setDescription('Its yousource!'),
	async execute(interaction) {
		await interaction.reply(`Heyo ${interaction.user.username}, welcome to robs presentation!`);
	},
};