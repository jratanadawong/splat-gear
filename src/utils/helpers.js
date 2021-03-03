import enDict from '../data/lang_dict_USen.json';
import {weapons} from '../data/WeaponInfo_Main';

import {
  FILE_DICT,
  DIRECTORY_DICT,
  ASSET_PREFIX,
  SKILL_DICT,
} from './constants';

export const getImagePath = (type, name) => {
  return `${DIRECTORY_DICT[type]}/${ASSET_PREFIX[type]||''}${name}.png`
};

export const getFilePath = (type) => {
  return `@/data/${FILE_DICT[type]}`;
};

export const getData = (type, id) => {
  return weapons.find(x => x.Id == id);
};

export const translateItem = (item) => {
  return enDict[item];
};

export const getWeapon = (id) => {
  let weaponData = getData("main", id);
  console.log("enDict[weaponData.Name]: ", enDict[weaponData.Name]);
  return {
    image: getImagePath("main", weaponData.Name),
    name: translateItem(weaponData.Name),
    special: translateItem(weaponData.Special),
    sub: translateItem(weaponData.Sub),
  }
};

export const getSkillIcon = (skill) => {
  return getImagePath("skill", SKILL_DICT[skill]);
};
