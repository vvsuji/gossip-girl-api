import axios from 'axios';
import db from '../db/connection.js';
import Character from '../models/Character.js';
// import characters from './characters.json' assert { type: 'json' };

const insertData = async (characters) => {
	let charactersData = [];

	for (let char in characters) {
		charactersData.push({
			name: char,
			title: characters[char].title,
			blurb: characters[char].blurb,
			image_loading: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${char}_0.jpg`,
			image_splash: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${char}_0.jpg`,
			tags: characters[char].tags,
			partype: characters[char].partype,
		});
	}

	// reset database
	await db.dropDatabase();
	// insert data
	await Character.create(charactersData);
	// close db connection
	await db.close();
};

const fetchCharacters = async () => {
	let characters = await axios.get(
		'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json',
	);
	insertData(characters.data.data);
};

fetchCharacters();
