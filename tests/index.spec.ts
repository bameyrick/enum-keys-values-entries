/* eslint-disable @typescript-eslint/no-explicit-any */
import { Enum } from '../src/index';

describe(`Enum.values`, () => {
  it(`Should only get the right hand side for an enum where the values match the keys`, () => {
    enum Test {
      Yes = 'Yes',
      Sausage = 'sausage',
      Doop = 'Doop',
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values match do not the keys`, () => {
    enum Test {
      Yes = 'yes',
      Sausage = 'Sausage',
      Doop = 'doop 3',
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are numbers`, () => {
    enum Test {
      Yes = 1,
      Sausage = 2,
      Doop = 3,
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are implied`, () => {
    enum Test {
      Yes,
      Sausage,
      Doop,
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });
});

describe(`Enum.keys`, () => {
  it(`Should only get the right hand side for an enum where the values match the keys`, () => {
    enum Test {
      Yes = 'Yes',
      Sausage = 'sausage',
      Doop = 'Doop',
    }

    const expected: string[] = ['Yes', 'Sausage', 'Doop'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values match do not the keys`, () => {
    enum Test {
      Yes = 'yes',
      Sausage = 'Sausage',
      Doop = 'doop 3',
    }

    const expected: string[] = ['Yes', 'Sausage', 'Doop'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are numbers`, () => {
    enum Test {
      Yes = 1,
      Sausage = 2,
      Doop = 3,
    }

    const expected: string[] = ['Yes', 'Sausage', 'Doop'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are implied`, () => {
    enum Test {
      Yes,
      Sausage,
      Doop,
    }

    const expected: string[] = ['Yes', 'Sausage', 'Doop'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected);
  });
});

describe(`Enum.entries`, () => {
  it(`Should only get the right hand side for an enum where the values match the keys`, () => {
    enum Test {
      Yes = 'Yes',
      Sausage = 'sausage',
      Doop = 'Doop',
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values match do not the keys`, () => {
    enum Test {
      Yes = 'yes',
      Sausage = 'Sausage',
      Doop = 'doop 3',
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are numbers`, () => {
    enum Test {
      Yes = 1,
      Sausage = 2,
      Doop = 3,
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are implied`, () => {
    enum Test {
      Yes,
      Sausage,
      Doop,
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });
});
