/* eslint-disable @typescript-eslint/no-explicit-any */

function enumKeys<E extends { [k: string]: any }>(_enum: E): Array<keyof E> {
  return Object.keys(_enum).filter(key => isNaN(Number(key))) as Array<keyof E>;
}

function enumValues<E extends { [k: string]: any }>(_enum: E): E[] {
  return enumKeys(_enum).map(key => _enum[key]) as E[];
}

function enumEntries<E extends { [k: string]: any }>(_enum: E): Array<[keyof E, E]> {
  return enumKeys(_enum).map(key => [key, _enum[key]]) as Array<[keyof E, E]>;
}

export const Enum = {
  keys: enumKeys,
  values: enumValues,
  entries: enumEntries,
};
