// import React from 'react';
// import MenuItem from './MenuItem';
import { useState, useEffect } from 'react';
import CharactersItem from './CharactersItem';
// import {characters} from '../Table';

// let characters = [
//   {
//     "id": 1,

//     "atk": "",
//     "def":"",
//     "pv":"",    
//     "name": "Luke Skywalker",
//     "height": 1.72,
//     "mass": 73,
//     "gender": "male",
//     "homeworld": "tatooine",
//     "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
//     "image": "./assets/LukeSkywalker.png",
//     "born": -19,
//     "bornLocation": "polis massa",
//     "died": 34,
//     "diedLocation": "ahch-to",
//     "species": "human",
//     "hairColor": "blond",
//     "eyeColor": "blue",
//     "skinColor": "light",
//     "cybernetics": "Prosthetic right hand",
//     "affiliations": [
//       "Alliance to Restore the Republic",
//       "Red Squadron",
//       "Rogue Squadron",
//       "Massassi Group",
//       "Leia Organa's team",
//       "Endor strike team",
//       "Jedi Order",
//       "Bright Tree tribe",
//       "New Republic",
//       "Resistance"
//     ],
//     "masters": ["Obi-Wan Kenobi", "Yoda"],
//     "apprentices": [
//       "Leia Organa",
//       "Ben Solo (along with a dozen apprentices)",
//       "Rey"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 2,

//     "atk": "",
//     "def":"",
//     "pv":"",    
//     "name": "C-3PO",
//     "height": 1.71,
//     "mass": 75,
//     "gender": "male",
//     "homeworld": "tatooine",
//     "species": "droid",
//     "wiki": "http://starwars.wikia.com/wiki/C-3PO",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
//     "dateCreated": -32,
//     "dateDestroyed": 3,
//     "destroyedLocation": "bespin, rebuilt shortly after",
//     "creator": "Anakin Skywalker",
//     "manufacturer": "Cybot Galactica",
//     "model": "3PO unit",
//     "class": "Protocol droid",
//     "sensorColor": "yellow",
//     "platingColor": "gray, later primarily golden",
//     "equipment": "TranLang III communication module",
//     "affiliations": [
//       "Skywalker family",
//       "Confederacy of Independent Systems",
//       "Royal House of Naboo",
//       "Galactic Republic",
//       "House of Organa",
//       "Galactic Empire",
//       "Alliance to Restore the Republic",
//       "Massassi Group",
//       "Leia Organa's team",
//       "Pathfinders",
//       "Endor strike team",
//       "Bright Tree tribe",
//       "New Republic",
//       "Resistance",
//       "Resistance spy droid network"
//     ],
//     "skinColor": "gold",
//     "eyeColor": "yellow",
//     "born": -112,
//     "formerAffiliations": []
//   },
//   {
//     "id": 3,

//     "atk": "",
//     "def":"",
//     "pv":"",    
//     "name": "R2-D2",
//     "height": 1.09,
//     "mass": 32,
//     "gender": "male",
//     "homeworld": "naboo",
//     "species": "droid",
//     "wiki": "http://starwars.wikia.com/wiki/R2-D2",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
//     "manufacturer": "Industrial Automaton",
//     "productLine": "R-series",
//     "model": "R2 series astromech droid",
//     "class": "Astromech droid",
//     "sensorColor": "red",
//     "platingColor": "bluesilver",
//     "equipment": [
//       "Buzz saw",
//       "Electric pike",
//       "Drinks tray (Only on Jabba's Sail Barge)",
//       "Fusion welder",
//       "Data probe",
//       "Power recharge coupler",
//       "Rocket booster",
//       "Holoprojector",
//       "Motorized, all-terrain treads",
//       "Retractable third leg"
//     ],
//     "affiliations": [
//       "Royal House of Naboo",
//       "Galactic Republic",
//       "501st Legion",
//       "R2-D2's battle droid squadron",
//       "D-Squad",
//       "House of Organa",
//       "Galactic Empire",
//       "Alliance to Restore the Republic",
//       "Massassi Group",
//       "Red Squadron",
//       "Leia Organa's team",
//       "Endor strike team",
//       "Bright Tree tribe",
//       "Resistance"
//     ],
//     "skinColor": "white, blue",
//     "eyeColor": "red",
//     "born": -33,
//     "formerAffiliations": []
//   },
//   {
//     "id": 4,

//     "atk": "",
//     "def":"",
//     "pv":"",    
//     "name": "Darth Vader",
//     "height": 2.03,
//     "mass": 120,
//     "gender": "male",
//     "homeworld": "tatooine",
//     "wiki": "http://starwars.wikia.com/wiki/Anakin_Skywalker",
//     "image": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
//     "born": -41,
//     "died": 4,
//     "diedLocation": "death star ii, endor system",
//     "species": "human",
//     "hairColor": "blond",
//     "eyeColor": "blue, yellow (dark side)",
//     "skinColor": "light, later pale",
//     "cybernetics": "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
//     "affiliations": [
//       "501st Legion",
//       "Sith",
//       "Galactic Empire",
//       "Imperial High Command"
//     ],
//     "masters": [
//       "Qui-Gon Jinn (informal Jedi Master)",
//       "Obi-Wan Kenobi (Jedi Master)",
//       "Darth Sidious (Sith Master)",
//       "Yoda (Force spirit teacher)"
//     ],
//     "apprentices": ["Ahsoka Tano (Padawan)", "Inquisitorius"],
//     "formerAffiliations": [
//       "Jedi Order",
//       "Jedi High Council",
//       "Galactic Republic"
//     ]
//   },
//   {
//     "id": 5,

//     "atk": "",
//     "def":"",
//     "pv":"",    
//     "name": "Leia Organa",
//     "height": 1.5,
//     "mass": 51,
//     "gender": "female",
//     "homeworld": "alderaan",
//     "wiki": "http://starwars.wikia.com/wiki/Leia_Organa",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
//     "born": -19,
//     "bornLocation": "polis massa (2 days after empire day)",
//     "species": "human",
//     "hairColor": "brown, later graying",
//     "eyeColor": "brown",
//     "skinColor": "light",
//     "affiliations": [
//       "Elder Houses",
//       "House of Organa",
//       "Galactic Empire",
//       "Imperial Senate",
//       "Alliance to Restore the Republic",
//       "Massassi Group",
//       "Leia Organa's team",
//       "Endor strike team",
//       "Alliance High Command",
//       "Bright Tree tribe",
//       "New Republic",
//       "Populists",
//       "Resistance"
//     ],
//     "masters": "Luke Skywalker",
//     "formerAffiliations": []
//   },

 
//   {
//     "id": 6,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Obi-Wan Kenobi",
//     "height": 1.82,
//     "mass": 81,
//     "gender": "male",
//     "homeworld": "stewjon",
//     "wiki": "http://starwars.wikia.com/wiki/Obi-Wan_Kenobi",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
//     "born": -57,
//     "died": 0,
//     "diedLocation": "death star, alderaan system",
//     "species": "human",
//     "hairColor": "light brown, later white",
//     "eyeColor": "gray-blue",
//     "skinColor": "light",
//     "affiliations": [
//       "Jedi Order",
//       "Jedi High Council",
//       "Galactic Republic",
//       "212th Attack Battalion",
//       "Alliance to Restore the Republic"
//     ],
//     "masters": ["Qui-Gon Jinn", "Yoda"],
//     "apprentices": ["Anakin Skywalker", "Luke Skywalker"],
//     "formerAffiliations": []
//   },
//   {
//     "id": 7,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Anakin Skywalker",
//     "height": 2.03,
//     "mass": 120,
//     "gender": "male",
//     "homeworld": "tatooine",
//     "wiki": "http://starwars.wikia.com/wiki/Anakin_Skywalker",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
//     "born": -41,
//     "died": 4,
//     "diedLocation": "death star ii, endor system",
//     "species": "human",
//     "hairColor": "blond",
//     "eyeColor": "blue, yellow (dark side)",
//     "skinColor": "light, later pale",
//     "cybernetics": "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
//     "affiliations": [
//       "501st Legion",
//       "Sith",
//       "Galactic Empire",
//       "Imperial High Command"
//     ],
//     "masters": [
//       "Qui-Gon Jinn (informal Jedi Master)",
//       "Obi-Wan Kenobi (Jedi Master)",
//       "Darth Sidious (Sith Master)",
//       "Yoda (Force spirit teacher)"
//     ],
//     "apprentices": ["Ahsoka Tano (Padawan)", "Inquisitorius"],
//     "formerAffiliations": [
//       "Jedi Order",
//       "Jedi High Council",
//       "Galactic Republic"
//     ]
//   },
//   {
//     "id": 8,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Wilhuff Tarkin",
//     "height": 1.82,
//     "gender": "male",
//     "homeworld": "eriadu",
//     "wiki": "http://starwars.wikia.com/wiki/Wilhuff_Tarkin",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
//     "born": -64,
//     "died": 0,
//     "diedLocation": " death star, yavin system",
//     "species": "human",
//     "hairColor": "auburn, later gray",
//     "eyeColor": "gray-blue",
//     "skinColor": "light",
//     "affiliations": [
//       "Galactic Republic",
//       "Sullust Sector Spacefarers Academy",
//       "Judicial Forces",
//       "Republic Navy",
//       "Strategic Advisory Cell",
//       "Outland Regions Security Force",
//       "Outland's anti-pirate taskforce",
//       "Galactic Empire",
//       "Battle Station Command",
//       "Imperial Officer Corps",
//       "Imperial Navy",
//       "Tarkin Initiative"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 9,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Chewbacca",
//     "height": 2.28,
//     "mass": 112,
//     "gender": "male",
//     "homeworld": "kashyyyk",
//     "wiki": "http://starwars.wikia.com/wiki/Chewbacca",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
//     "born": -200,
//     "bornLocation": "kashyyyk",
//     "species": "wookiee",
//     "hairColor": "brown",
//     "eyeColor": "blue",
//     "affiliations": [
//       "Galactic Republic",
//       "Alliance to Restore the Republic",
//       "Leia Organa's team",
//       "Pathfinders",
//       "Endor strike team",
//       "Bright Tree tribe",
//       "New Republic",
//       "Resistance"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 10,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Han Solo",
//     "height": 1.8,
//     "mass": 80,
//     "gender": "male",
//     "homeworld": "corellia",
//     "wiki": "http://starwars.wikia.com/wiki/Han_Solo",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
//     "born": -29,
//     "bornLocation": "corellia",
//     "died": 34,
//     "diedLocation": "starkiller base",
//     "species": "human",
//     "hairColor": "brown, later gray",
//     "eyeColor": "hazel",
//     "skinColor": "light",
//     "affiliations": [
//       "Galactic Empire",
//       "Jabba Desilijic Tiure's criminal empire",
//       "Alliance to Restore the Republic",
//       "Leia Organa's team",
//       "Endor strike team",
//       "Kingdom of Han",
//       "Bright Tree tribe",
//       "New Republic",
//       "New Republic Pilots Commission",
//       "Han Solo's shipping company",
//       "Resistance"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 11,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Greedo",
//     "height": 1.74,
//     "mass": 74,
//     "gender": "male",
//     "homeworld": ["Rodia", "Tatooine"],
//     "wiki": "http://starwars.wikia.com/wiki/Greedo",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
//     "died": 0,
//     "diedLocation": "tatooine",
//     "species": "rodian",
//     "eyeColor": "purple",
//     "skinColor": "green",
//     "affiliations": ["Trade Federation"],
//     "born": -44,
//     "formerAffiliations": []
//   },
//   {
//     "id": 12,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Jabba Desilijic Tiure",
//     "height": 3.9,
//     "mass": 1358,
//     "gender": "male",
//     "homeworld": "tatooine",
//     "wiki": "http://starwars.wikia.com/wiki/Jabba_Desilijic_Tiure",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
//     "born": -600,
//     "died": 4,
//     "diedLocation": "tatooine",
//     "species": "hutt",
//     "eyeColor": "orange",
//     "skinColor": "green and tan",
//     "kajidic": "Desilijic",
//     "affiliations": [
//       "Hutt Clan",
//       "Grand Hutt Council",
//       "Jabba Desilijic Tiure's criminal empire",
//       "Galactic Republic",
//       "Shadow Collective",
//       "Crymorah syndicate",
//       "Galactic Empire"
//     ],
//     "formerAffiliations": []
//   },
  
//   {
//     "id": 13,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Yoda",
//     "height": 0.66,
//     "mass": 13,
//     "gender": "male",
//     "wiki": "http://starwars.wikia.com/wiki/Yoda",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
//     "born": -896,
//     "died": 4,
//     "diedLocation": "dagobah",
//     "species": "yoda's species",
//     "hairColor": "white",
//     "eyeColor": "green-gold",
//     "skinColor": "green",
//     "affiliations": [
//       "Jedi Order",
//       "Jedi High Council",
//       "Galactic Republic",
//       "Grand Army of the Republic"
//     ],
//     "masters": [
//       "Unidentified Jedi (Jedi Master)",
//       "Garro (stonepower master)",
//       "Qui-Gon Jinn (as Force spirit)"
//     ],
//     "apprentices": [
//       "Dooku (Padawan)",
//       "Obi-Wan Kenobi",
//       "Luke Skywalker",
//       "Anakin Skywalker (as Force spirit)"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 14,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Palpatine",
//     "height": 1.78,
//     "mass": 75,
//     "gender": "male",
//     "homeworld": "naboo",
//     "wiki": "http://starwars.wikia.com/wiki/Palpatine",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
//     "born": -82,
//     "bornLocation": "naboo",
//     "died": 4,
//     "diedLocation": "death star ii (original body)",
//     "species": "human",
//     "hairColor": "red, later gray and white",
//     "eyeColor": "blue; yellow/red (dark side)",
//     "skinColor": "fair, later pale",
//     "era": ["Rise of the Empire era", "Rebellion era", "New Republic era"],
//     "affiliations": [
//       "House Palpatine",
//       "Damask Holdings",
//       "Royal House of Naboo",
//       "Sith",
//       "Order of the Sith Lords",
//       "Naboo Diplomatic Corps",
//       "Galactic Republic",
//       "Galactic Senate",
//       "Trade Federation",
//       "Confederacy of Independent Systems",
//       "Galactic Empire",
//       "Dark Empire"
//     ],
//     "masters": "Darth Plagueis",
//     "apprentices": [
//       "Darth Maul",
//       "A Nikto",
//       "Vergere",
//       "Darth Tyranus",
//       "Garth Ezzar",
//       "Darth Vader",
//       "Ferus Olin (informal)",
//       "Mara Jade",
//       "Cronal",
//       "Lumiya",
//       "Luke Skywalker (briefly)"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 15,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Boba Fett",
//     "height": 1.83,
//     "mass": 78,
//     "gender": "male",
//     "homeworld": "kamino",
//     "wiki": "http://starwars.wikia.com/wiki/Boba_Fett",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png",
//     "born": "Shortly after the Battle of Naboo",
//     "species": "human",
//     "hairColor": "black",
//     "eyeColor": "brown",
//     "skinColor": "tan",
//     "affiliations": [
//       "Confederacy of Independent Systems",
//       "Boba Fett's syndicate",
//       "Jabba Desilijic Tiure's criminal empire",
//       "Galactic Empire"
//     ],
//     "formerAffiliations": []
//   },
  

//   {
//     "id": 16,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Qui-Gon Jinn",
//     "height": 1.93,
//     "mass": 89,
//     "gender": "male",
//     "homeworld": "coruscant",
//     "wiki": "http://starwars.wikia.com/wiki/Qui-Gon_Jinn",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg",
//     "died": -32,
//     "diedLocation": "naboo",
//     "species": "human",
//     "hairColor": "brown",
//     "eyeColor": "blue",
//     "skinColor": "light",
//     "affiliations": ["Jedi Order", "Galactic Republic"],
//     "masters": "Dooku",
//     "apprentices": [
//       "Obi-Wan Kenobi",
//       "Anakin Skywalker (informally)",
//       "Yoda (as Force spirit)"
//     ],
//     "born": -92,
//     "formerAffiliations": []
//   },
//   {
//     "id": 17,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Nute Gunray",
//     "height": 1.91,
//     "mass": 90,
//     "gender": "male",
//     "homeworld": "neimoidia",
//     "wiki": "http://starwars.wikia.com/wiki/Nute_Gunray",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png",
//     "died": -19,
//     "diedLocation": "mustafar",
//     "species": "neimoidian",
//     "eyeColor": "red",
//     "skinColor": "green",
//     "affiliations": [
//       "Trade Federation",
//       "Confederacy of Independent Systems",
//       "Separatist Council"
//     ],
//     "formerAffiliations": []
//   },
//   {
//     "id": 18,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Finis Valorum",
//     "height": 1.7,
//     "gender": "male",
//     "homeworld": "coruscant",
//     "wiki": "http://starwars.wikia.com/wiki/Finis_Valorum",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png",
//     "species": "human",
//     "hairColor": "white",
//     "eyeColor": "blue",
//     "skinColor": "fair",
//     "affiliations": ["House Valorum", "Galactic Republic", "Galactic Senate"],
//     "born": -91,
//     "formerAffiliations": []
//   },
//   {
//     "id": 19,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Padmé Amidala",
//     "height": 1.65,
//     "mass": 45,
//     "gender": "female",
//     "homeworld": "naboo",
//     "wiki": "http://starwars.wikia.com/wiki/Padm%C3%A9_Amidala",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg",
//     "born": -46,
//     "bornLocation": "naboo",
//     "died": -19,
//     "diedLocation": "polis massa (2 days after empire day)",
//     "species": "human",
//     "hairColor": "brown",
//     "eyeColor": "light brown",
//     "skinColor": "light",
//     "affiliations": [
//       "Apprentice Legislators",
//       "Legislative Youth Program",
//       "Royal House of Naboo",
//       "Galactic Republic",
//       "Loyalist Committee",
//       "Delegation of 2,000",
//       "Galactic Empire",
//       "Imperial Senate"
//     ],
//     "formerAffiliations": []
//   },
  
//   {
//     "id": 20,
//     "atk": "",
//     "def":"",
//     "pv":"",
//     "name": "Darth Maul",
//     "height": 1.75,
//     "mass": 80,
//     "gender": "male",
//     "homeworld": "dathomir",
//     "wiki": "http://starwars.wikia.com/wiki/Darth_Maul",
//     "image": "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png",
//     "died": -2,
//     "diedLocation": "tatooine",
//     "species": "dathomirian zabrak",
//     "eyeColor": "yellow and red",
//     "skinColor": "red (black tattoos)",
//     "cybernetics": ["Six-legged apparatus (formerly)", "Two cybernetic legs"],
//     "affiliations": [
//       "Nightbrothers",
//       "Sith",
//       "Cad Bane's group",
//       "Death Watch",
//       "Shadow Collective"
//     ],
//     "masters": "Darth Sidious",
//     "apprentices": "Savage Opress",
//     "born": -54,
//     "formerAffiliations": ["Trade Federation"]
//   }
// ];


// function Characters() {
//   useEffect(() => {
//     console.log("je suis dans useEffect");
//   /*fetch("https://github.com/Miadil/starwars-api/blob/master/api/cardGames.json", {mode:'cors'})
//   .then((res) => console.log(res))
//   .then((data) => console.log(data));*/
//   console.log(characters);
//   },[]);
     
  // return (
  //   <div>
  //     {console.log("je suis dans le return")}
  //   </div>
  // );
  // }


// значение по умолчанию [] чтобы не было ошибки, если ничего не передано в characters
function CharactersList({ characters = [] }) {
  // при добавлении/удалении из избранного,
  // находим по id челика, по которому кликнули
  // и меняем у него значение ключа favorite на то,
  // что передали из компонента CharactersItem,
  // т.е. на значение переменной isFavorite
  const handleChangeFavorite = (id, isFavorite) => {
    characters.find(item => item.id === id).favorite = isFavorite
  }

  return (
    <div>
      {characters.map((character) => (
        <CharactersItem
          onChangeFavorite={(isFavorite) => handleChangeFavorite(character.id, isFavorite)}
          key={character.id}
          name={character.name}
          gender={character.gender}
          image={character.image}
          favorite={character.favorite}
        />
      ))}
    </div>
  );
}

export default CharactersList;