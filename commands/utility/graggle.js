const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('graggle')
		.setDescription('Its gragglin time!'),
	async execute(interaction) {
		await interaction.reply(`Heyo ${interaction.user.username}, Graggle Simpson bcloelieves in you!`);
	},
};