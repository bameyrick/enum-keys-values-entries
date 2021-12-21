/* eslint-disable @typescript-eslint/no-explicit-any */

function enumKeys<E>(_enum: { [k: string]: E } | any): string[] {
  return Object.keys(_enum).filter(key => isNaN(Number(key)));
}

function enumValues<E>(_enum: { [k: string]: E } | any): E[] {
  return enumKeys(_enum).map(key => _enum[key]);
}

function enumEntries<E>(_enum: { [k: string]: E } | any): Array<[string, E]> {
  return enumKeys(_enum).map(key => [key, _enum[key]]);
}

export const Enum = {
  keys: enumKeys,
  values: enumValues,
  entries: enumEntries,
};
