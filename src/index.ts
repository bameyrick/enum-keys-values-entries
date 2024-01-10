/* eslint-disable @typescript-eslint/no-explicit-any */

function enumKeys<E, K extends string>(_enum: { [key in K]: E }): K[] {
  return Object.keys(_enum).filter(key => isNaN(Number(key))) as K[];
}

function enumValues<E, K extends string>(_enum: { [key in K]: E }): E[] {
  return enumKeys(_enum).map(key => _enum[key]) as E[];
}

function enumEntries<E, K extends string>(_enum: { [key in K]: E }): [K, E][] {
  return enumKeys(_enum).map(key => [key, _enum[key]] as [K, E]);
}

export const Enum = {
  keys: enumKeys,
  values: enumValues,
  entries: enumEntries,
};
