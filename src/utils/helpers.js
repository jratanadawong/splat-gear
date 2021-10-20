import enDict from '../data/lang_dict_USen.json';
import weapons from '../data/WeaponInfo_Main.json';

import {
  FILE_DICT,
  DIRECTORY_DICT,
  ASSET_PREFIX,
  SKILL_DICT,
  TYPE_DICT,
} from './constants';

export const getImagePath = (type, name) => {
  name = SKILL_DICT[name] || name;
  const path = `${DIRECTORY_DICT[type]}/${ASSET_PREFIX[type]||''}${name}.png`;
  return path;
};

export const getFilePath = (type) => {
  return `@/data/${FILE_DICT[type]}`;
};

export const getJson = (type) => {
  const json = require('../data/' + FILE_DICT[type]);
  return json;
};

export const getData = (type, id) => {
  const dict = getJson(type);
  return dict.find(x => x.Id == id);
};

export const translateItem = (item) => {
  return enDict[item];
};

export const getItem = (type, id) => {
  let data = getData(type, id);
  const itemCode = ASSET_PREFIX[type] + data.Name;
  return {
    image: getImagePath(type, data.Name),
    name: translateItem(itemCode) || translateItem(data.Name) || "",
    special: {
      name: translateItem(data.Special) || null,
      image: getImagePath("special", data.Special),
    },
    sub: {
      name: translateItem(data.Sub) || null,
      image: getImagePath("sub", data.Sub),
    },
  }
};

export const getItemNameTranslation = (name) => Object.keys(enDict).find(key => enDict[key].toLowerCase() === name.toLowerCase());

export const getItemByName = (name) => {
  const itemName = getItemNameTranslation(name);
  const [type] = getItemNameTranslation(name).split(/_(.+)/);
  const json = getJson(TYPE_DICT[type] || "main");
  const item = json.find(x => x?.ModelName === itemName || x?.Name === itemName);
  console.log("item ", item);
  return item;
};

export const createLoadout = (loadout) => {
  const headSkills = loadout.gear.head.skills.split(" ");
  const clothesSkills = loadout.gear.clothes.skills.split(" ");
  const shoesSkills = loadout.gear.shoes.skills.split(" ");
  const weaponId = getItemByName(loadout.weapon).Id;
  const headId = getItemByName(loadout.gear.head.name).Id;
  const clothesId = getItemByName(loadout.gear.clothes.name).Id;
  const shoesId = getItemByName(loadout.gear.shoes.name).Id;
  return {
    image: loadout?.image,
    name: loadout.weapon,
    weapon: getItem("main", weaponId),
    gear: {
      head: {
        ...getItem("head", headId),
        main: headSkills[0],
        skills: headSkills.slice(1),
      },
      clothes: {
        ...getItem("clothes", clothesId),
        main: clothesSkills[0],
        skills: clothesSkills.slice(1),
      },
      shoes: {
        ...getItem("shoes", shoesId),
        main: shoesSkills[0],
        skills: shoesSkills.slice(1),
      },
    },
    background: loadout?.background,
  };
};

export const getSkillIcon = (skill) => {
  return getImagePath("skill", SKILL_DICT[skill]);
};

export const exportToCSV = () => {
  let CSV = '';
  weapons.forEach(weapon => {
    CSV = CSV + `${translateItem(weapon.Name)},${translateItem(weapon.Sub)},${translateItem(weapon.Special)},${weapon.Range}\n`
  })
  return CSV;
}
