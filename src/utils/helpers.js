import enDict from '../data/lang_dict_USen.json';
// import Clothes from '../data/GearInfo_Clothes.json';

import {
  FILE_DICT,
  DIRECTORY_DICT,
  ASSET_PREFIX,
  SKILL_DICT,
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

export const getData = (type) => {
  return getJson(type);
};

export const loadItem = (data, id) => {
  return data.find(x => x.Id == id);
};

export const translateItem = (item) => {
  return enDict[item];
};

export const getItem = (type, id) => {
  const data = getData(type);
  const item = loadItem (data, id);
  console.log('item: ', item);
  const itemCode = ASSET_PREFIX[type] + item.Name;
  return {
    image: getImagePath(type, item.Name),
    name: translateItem(itemCode) || translateItem(item.Name) || "",
    special: {
      name: translateItem(item.Special) || null,
      image: getImagePath("special", item.Special),
    },
    sub: {
      name: translateItem(item.Sub) || null,
      image: getImagePath("sub", item.Sub),
    },
  }
};

export const getSkillIcon = (skill) => {
  return getImagePath("skill", SKILL_DICT[skill]);
};
