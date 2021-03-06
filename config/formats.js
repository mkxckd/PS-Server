'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
	},
	{
		name: "[Gen 7] Random",
		desc: [
			`Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Unrated Random",

		mod: 'gen7',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['[Gen 7] Random'],
	},
	{
		name: "[Gen 7] Random (no PotD)",

		mod: 'gen7',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621042/">OU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621329/">OU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3626219/">OU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 7] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587184/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3623296/">Ubers Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3599816/">Ubers Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3627043/">UU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3626124/">UU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621217/">UU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] UU (suspect test)",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3630113/">UU Suspect Test</a>`],

		mod: 'gen7',
		ruleset: ['[Gen 7] UU'],
		unbanlist: ['Slowbro-Mega'],
	},
	{
		name: "[Gen 7] RU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3625382/">RU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3622740/">RU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3622057/">RU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'BL2', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3628085/">NU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3622107/">NU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3612396/">NU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'BL3', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3625646/">PU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3614892/">PU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3614470/">PU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'BL4'],
	},
	{
		name: "[Gen 7] LC",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3629645/">LC Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/dex/sm/formats/lc/">LC Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621440/">LC Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3588679/">LC Sample Teams</a>`,
		],

		mod: 'gen7',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Little Cup'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Torchic', 'Vulpix-Base', 'Yanma',
			'Eevium Z', 'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: [
			`All the Pok&eacute;mon on a team must share a type.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3621036/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3622349">Monotype Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3599682/">Monotype Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587441/">Anything Goes</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3591711/">AG Resources</a>`,
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 7] CAP",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587865/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3597893/">CAP Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/7203358/">CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Allow CAP'],
		banlist: ['Tomohawk + Earth Power', 'Tomohawk + Reflect'],
	},
	{
		name: "[Gen 7] CAP LC",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3599594/">CAP LC</a>`],

		mod: 'gen7',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['[Gen 7] LC', 'Allow CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Roles Compendium</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3593055/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
	},
	{
		name: "[Gen 7] Random Doubles Battle",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Doubles OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3629155/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3623347/">Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3590987/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder'],
	},
	{
		name: "[Gen 7] Doubles Ubers",

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Dark Void'],
	},
	{
		name: "[Gen 7] Doubles UU",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3598014/">Doubles UU Metagame Discussion</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 7] VGC 2018",

		mod: 'gen7',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {starting: 6 * 60 + 30 - 10, perTurn: 10, maxPerTurn: 55, maxFirstTurn: 90, timeoutAutoChoose: true},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Unown'],
		requirePlus: true,
	},
	{
		name: "[Gen 7] VGC 2017",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
		],

		mod: 'vgc17',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {starting: 15 * 60 - 10, perTurn: 10, maxPerTurn: 60, maxFirstTurn: 90, timeoutAutoChoose: true},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod', 'Alola Pokedex'],
		banlist: ['Illegal', 'Unreleased', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega'],
		requirePlus: true,
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Battle Spot Special 9",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3629823/">Battle Spot Special 9</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [2, 6],
			battle: 2,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Eviolite', 'Focus Sash'],
		onValidateSet: function (set, format) {
			if (set.item) {
				let item = this.getItem(set.item);
				if (item.megaStone || item.zMove) return [`${set.name || set.species} has ${item.name}, which is banned in ${format.name}.`];
			}
		},
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 3,
	},
	{
		name: "[Gen 7] 2v2 Doubles",
		desc: [
			`Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3606989/">2v2 Doubles</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		// searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Gen 7] Doubles OU'],
		banlist: ['Salamence-Mega', 'Tapu Lele', 'Focus Sash', 'Perish Song'],
	},
	{
		name: "[Gen 7] Nature Swap",
		desc: [
			`Pok&eacute;mon have their base stats swapped depending on their nature.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3612727/">Nature Swap</a>`,
		],

		mod: 'natureswap',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Blissey', 'Chansey', 'Cloyster', 'Hoopa-Unbound', 'Kyurem-Black', 'Stakataka'],
	},
	{
		section: "Other Metagames",
		column: 3,
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: [
			`Anything that can be hacked in-game and is usable in local battles is allowed.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587475/">Balanced Hackmons</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3588586/">BH Suspects and Bans Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3593766/">BH Resources</a>`,
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'CFZ Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Arena Trap', 'Huge Power', 'Innards Out', 'Magnet Pull', 'Moody', 'Parental Bond', 'Protean', 'Psychic Surge', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Chatter', 'Comatose + Sleep Talk'],
	},
	{
		name: "[Gen 7] 1v1",
		desc: [
			`Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587523/">1v1</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3592842/">1v1 Resources</a>`,
		],

		mod: 'gen7',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: [
			'Illegal', 'Unreleased', 'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh',
			'Jirachi', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Focus Sash', 'Flash', 'Kinesis', 'Leaf Tornado', 'Mirror Shot', 'Mud Bomb', 'Mud-Slap', 'Muddy Water', 'Night Daze', 'Octazooka', 'Perish Song', 'Sand Attack', 'Smokescreen',
			'Chansey + Charm + Seismic Toss', 'Chansey + Charm + Psywave',
		],
	},
	{
		name: "[Gen 7] Mix and Mega",
		desc: [
			`Mega Stones and Primal Orbs can be used on almost any fully evolved Pok&eacute;mon with no Mega Evolution limit.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587740/">Mix and Mega</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3591580/">Mix and Mega Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Pokemon', 'Standard', 'Mega Rayquaza Clause', 'Team Preview'],
		banlist: ['Shadow Tag', 'Gengarite', 'Baton Pass', 'Electrify'],
		restrictedStones: ['Beedrillite', 'Blazikenite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Ultranecrozium Z'],
		cannotMega: [
			'Arceus', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
		],
		onValidateTeam: function (team) {
			let itemTable = {};
			for (const set of team) {
				let item = this.getItem(set.item);
				if (!item) continue;
				if (itemTable[item] && item.megaStone) return ["You are limited to one of each Mega Stone.", "(You have more than one " + this.getItem(item).name + ")"];
				if (itemTable[item] && (item.id === 'blueorb' || item.id === 'redorb')) return ["You are limited to one of each Primal Orb.", "(You have more than one " + this.getItem(item).name + ")"];
				itemTable[item] = true;
			}
		},
		onValidateSet: function (set, format) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb' && item.id !== 'ultranecroziumz') return;
			if (template.baseSpecies === item.megaEvolves || (template.baseSpecies === 'Groudon' && item.id === 'redorb') || (template.baseSpecies === 'Kyogre' && item.id === 'blueorb') || (template.species.substr(0, 9) === 'Necrozma-' && item.id === 'ultranecroziumz')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			let uberStones = format.restrictedStones || [];
			let uberPokemon = format.cannotMega || [];
			if (uberPokemon.includes(template.name) || set.ability === 'Power Construct' || uberStones.includes(item.name)) return ["" + template.species + " is not allowed to hold " + item.name + "."];
		},
		onBegin: function () {
			for (const pokemon of this.p1.pokemon.concat(this.p2.pokemon)) {
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.getTemplate(pokemon.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 7] Almost Any Ability",
		desc: [
			`Pok&eacute;mon can use any ability, barring the few that are restricted to their natural users.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587901/">Almost Any Ability</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3595753/">AAA Resources</a>`,
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Ability Clause', 'Ignore Illegal Abilities'],
		banlist: ['Archeops', 'Dragonite', 'Hoopa-Unbound', 'Kartana', 'Keldeo', 'Kyurem-Black', 'Regigigas', 'Shedinja', 'Slaking', 'Terrakion'],
		unbanlist: ['Genesect', 'Landorus', 'Metagross-Mega', 'Naganadel'],
		restrictedAbilities: [
			'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Innards Out',
			'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Stakeout', 'Water Bubble', 'Wonder Guard',
		],
		onValidateSet: function (set, format) {
			let restrictedAbilities = format.restrictedAbilities || [];
			if (restrictedAbilities.includes(set.ability)) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		},
	},
	{
		name: "[Gen 7] Camomons",
		desc: [
			`Pok&eacute;mon change type to match their first two moves.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3598418/">Camomons</a>`,
		],
		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Kartana', 'Kyurem-Black', 'Shedinja'],
		onModifyTemplate: function (template, target, source) {
			if (source) return;
			let types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.getMove(move.id).type))];
			return Object.assign({}, template, {types: types});
		},
		onSwitchInPriority: 2,
		onSwitchIn: function (pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega: function (pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 7] STABmons",
		desc: [
			`Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3587949/">STABmons</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', 'STABmons Move Legality'],
		banlist: ['Blacephalon', 'Kartana', 'Komala', 'Kyurem-Black', 'Porygon-Z', 'Silvally', 'Tapu Koko', 'Tapu Lele', 'Aerodactylite', 'King\'s Rock', 'Metagrossite', 'Razor Fang'],
		restrictedMoves: ['Acupressure', 'Belly Drum', 'Chatter', 'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows'],
	},
	{
		name: "[Gen 6] Gen-NEXT OU",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 7] New Year Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Valentine Random",

		mod: 'valentinerandom',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Battle Factory",
		desc: [`Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`],

		mod: 'gen7',
		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] BSS Factory",
		desc: [
			`Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3604845/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen7',
		team: 'randomBSSFactory',
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
	},
	{
		name: "[Gen 7] Monotype Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Challenge Cup 1v1",

		mod: 'gen7',
		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Challenge Cup 2v2",

		mod: 'gen7',
		team: 'randomCC',
		gameType: 'doubles',
		teamLength: {
			battle: 2,
		},
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: [`Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`],

		mod: 'gen7',
		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Doubles Hackmons Cup",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 6] Random",

		mod: 'gen6',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 6] Battle Factory",
		desc: [`Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`],

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 5] Random",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Random",

		mod: 'gen4',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Random",

		mod: 'gen3',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Random",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] Random",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] 1v1 Random",

		mod: 'gen7',
		teamLength: {
			battle: 1
		},
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Uber Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] OU/UU Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] RU/NU Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] PU Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] LC Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Generational Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Kanto Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Johto Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Hoenn Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Sinnoh Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Unova Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Kalos Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Alola Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Color Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Inverse Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
		onNegateImmunity: false,
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "[Gen 7] Metronome 3v3 Random",

		mod: 'gen7',
		teamLength: {
			validate: [3, 6],
			battle: 3
		},
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Metronome 6v6 Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},
	{
		name: "[Gen 7] Orb Random",

		mod: 'gen7',
		team: 'random',
		ruleset: ['[Gen 7] Random (no PotD)'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 3,
	},
	{
		name: "[Gen 1] 1v1",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/posts/7523781/">RBY 1v1</a>`],

		mod: 'gen1',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 1] OU', 'Team Preview'],
		banlist: [
			'Flash', 'Kinesis', 'Sand Attack', 'Smokescreen',
			'Bind', 'Clamp', 'Fire Spin', 'Wrap',
			'Explosion', 'Self-Destruct',
			'Hypnosis', 'Lovely Kiss', 'Sing', 'Sleep Powder', 'Spore',
		],
	},
	{
		name: "[Gen 4] UU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3532624/">DPP UU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3503638/">DPP UU Viability Ranking</a>`,
		],

		mod: 'gen4',
		// searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL'],
	},
	{
		name: "[Gen 3] OU (no Tyranitar)",

		mod: 'gen3',
		ruleset: ['[Gen 3] OU'],
		banlist: ['Tyranitar'],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 3,
	},
	{
		name: "[Gen 6] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "[Gen 5] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3599678/">BW2 OU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
	},
	{
		name: "[Gen 4] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3506147/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3551992/">DPP OU Viability Ranking</a>`,
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 3] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3503019/">ADV OU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431087/">ADV Sample Teams</a>`,
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 2] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3556533/">GSC OU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431086/">GSC Sample Teams</a>`,
		],

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3572352/">RBY OU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431045/">RBY Sample Teams</a>`,
		],

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Singles",
		column: 4,
	},
	{
		name: "[Gen 6] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3522911/">ORAS Ubers</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3535106/">ORAS Ubers Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dex/xy/tags/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Baton Pass'],
	},
	{
		name: "[Gen 6] RU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'BL2'],
	},
	{
		name: "[Gen 6] NU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'BL3'],
	},
	{
		name: "[Gen 6] PU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'BL4', 'Chatter'],
		unbanlist: ['Baton Pass'],
	},
	{
		name: "[Gen 6] LC",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "[Gen 6] Monotype",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/posts/7421332/">ORAS Monotype</a>`],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Charizard-Mega-X', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Metagross-Mega',
			'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Damp Rock', 'Smooth Rock', 'Soul Dew',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 6] CAP",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3545628/">ORAS CAP Viability Rankings</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/5594694/">ORAS CAP Sample Teams</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', 'Allow CAP'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Doubles/Triples",
		column: 4,
	},
	{
		name: "[Gen 6] Doubles OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3498688/">ORAS Doubles OU Banlist</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3535930/">ORAS Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder'],
	},
	{
		name: "[Gen 6] VGC 2016",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Illegal', 'Unreleased', 'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy', 'Darkrai',
			'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		requirePentagon: true,
		onValidateTeam: function (team) {
			const legends = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde'];
			let n = 0;
			for (const set of team) {
				let baseSpecies = this.getTemplate(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3560824/">ORAS BSD Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "B2/W2 Singles",
		column: 4,
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3550881/">BW2 Ubers Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6446463/">BW2 Ubers Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
	},
	{
		name: "[Gen 5] UU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3474024/">BW2 UU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3473124/">BW2 RU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning'],
	},
	{
		name: "[Gen 5] NU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3484121/">BW2 NU Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] LC",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'B2/W2 Doubles',
		column: 4,
	},
	{
		name: "[Gen 5] Doubles OU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3533424/">BW2 Doubles Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3533421/">BW2 Doubles Viability Ranking</a>`,
		],

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Jirachi',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop',
		],
	},
	{
		name: "[Gen 5] GBU Doubles",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Singles",
		column: 5,
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/posts/7433831/">DPP Ubers Information &amp; Resources</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3505128/">DPP Ubers Viability Ranking</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] NU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3583742/">DPP NU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/3512254/">DPP NU Viability Ranking</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] UU'],
		banlist: ['UU', 'BL2'],
	},
	{
		name: "[Gen 4] LC",
		desc: [
			`&bullet; <a href="http://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/7336500/">DPP LC Viability Ranking</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['LC Uber', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma', 'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Doubles",
		column: 5,
	},
	{
		name: "[Gen 4] Doubles OU",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3618411/">DPP Doubles</a>`],

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 4] OU'],
		banlist: ['Explosion', 'Soul Dew'],
		unbanlist: ['Garchomp', 'Latias', 'Latios', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 5,
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/posts/7433832/">ADV Ubers Information &amp; Resources</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3536426/">ADV Ubers Viability Ranking</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] UU",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3585923/">ADV UU Metagame Discussion</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/threads/3548578/">ADV UU Viability Rankings</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['[Gen 3] OU'],
		banlist: ['OU', 'BL'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/posts/7433879/">GSC Ubers Information &amp; Resources</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431086/">GSC Sample Teams</a>`,
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] UU",
		desc: [`&bullet; <a href="http://www.smogon.com/forums/threads/3576710/">GSC UU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'BL'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3541329/">RBY Ubers Viability Ranking</a>`,
			`&bullet; <a href="http://www.smogon.com/forums/posts/6431045/">RBY Sample Teams</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] OU (tradeback)",
		desc: [
			`RBY OU with movepool additions from the Time Capsule.`,
			`&bullet; <a href="http://www.smogon.com/articles/rby-tradebacks-ou/">Information</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Allow Tradeback', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Stadium",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
];
