import * as enDict from 'lang_dict_USen.json';
import {
  FILE_DICT,
  DIRECTORY_DICT,
  ASSET_PREFIX,
  SKILL_DICT,
} from './constants';

export const getImagePath = (type, name) => {
  return `src/assets/${DIRECTORY_DICT[type]}/${ASSET_PREFIX[type]||''}${name}.png`
};

export const getData = (type, id) => {
  const dict = `src/data/${FILE_DICT[type]}`;
  return dict?.find(x => x.id === id);
};

export const translateItem = (item) => {
  return enDict[item];
};

export const getWeapon = (id) => {
  let weaponData = getData("weapon", id);
  return {
    ...weaponData,
    image: getImagePath("weapon", weaponData.Name),
    Name: translatetem(weaponData.Name),
    Special: translatetem(weaponData.Special),
    Sub: translatetem(weaponData.Sub),
  }
};

export const getSkillIcon = (skill) => {
  return getImagePath("skill", SKILL_DICT[skill]);
};
