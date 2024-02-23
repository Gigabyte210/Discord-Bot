const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcommand')
		.setDescription('testing time!'),
	async execute(interaction) {
		await interaction.reply(`This is your test command!`);
	},
};