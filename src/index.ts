type EnumType<E> = Record<keyof E, number | string> & { [k: string]: keyof E };

function enumKeys<E>(_enum: E): string[] {
  return Object.keys(_enum).filter(key => isNaN(Number(key)));
}

function enumValues<E>(_enum: E): E[] {
  return enumKeys(_enum).map(key => (_enum as unknown as EnumType<E>)[key] as unknown as E);
}

function enumEntries<E>(_enum: E): Array<[string, E]> {
  return enumKeys(_enum).map(key => [key, (_enum as unknown as EnumType<E>)[key] as unknown as E]);
}

export const Enum = {
  keys: enumKeys,
  values: enumValues,
  entries: enumEntries,
};
