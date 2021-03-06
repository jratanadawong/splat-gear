import enDict from '../data/lang_dict_USen.json';

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

export const getSkillIcon = (skill) => {
  return getImagePath("skill", SKILL_DICT[skill]);
};
