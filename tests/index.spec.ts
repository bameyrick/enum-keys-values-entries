/* eslint-disable @typescript-eslint/no-explicit-any */
import { Enum } from '../src/index';

describe(`Enum.values`, () => {
  it(`Should only get the right hand side for an enum where the values match the keys`, () => {
    enum Test {
      Yes = 'Yes',
      Sausage = 'sausage',
      Doop = 'Doop',
      'Ice Cream' = 'Ice Cream',
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop, Test['Ice Cream']];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values match do not the keys`, () => {
    enum Test {
      Yes = 'yes',
      Sausage = 'Sausage',
      Doop = 'doop 3',
      'Ice Cream' = 'Ice cream',
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop, Test['Ice Cream']];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are numbers`, () => {
    enum Test {
      Yes = 1,
      Sausage = 2,
      Doop = 3,
      'Ice Cream' = 4,
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop, Test['Ice Cream']];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are implied`, () => {
    enum Test {
      Yes,
      Sausage,
      Doop,
      'Ice Cream',
    }

    const expected: any = [Test.Yes, Test.Sausage, Test.Doop, Test['Ice Cream']];

    const result = Enum.values(Test);

    expect(result).toEqual(expected);
  });
});

describe(`Enum.keys`, () => {
  it(`Should only get the right hand side for an enum where the values match the keys`, () => {
    enum Test {
      Yes = 'Yes',
      Sausage = 'Sausage',
      Doop = 'Doop',
      'Ice Cream' = 'Ice Cream',
    }

    const expected = ['Yes', 'Sausage', 'Doop', 'Ice Cream'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected as any);
  });

  it(`Should only get the right hand side for an enum where the values match do not the keys`, () => {
    enum Test {
      Yes = 'yes',
      Sausage = 'Sausages',
      Doop = 'doop 3',
      'Ice Cream' = 'Ice cream',
    }

    const expected = ['Yes', 'Sausage', 'Doop', 'Ice Cream'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected as any);
  });

  it(`Should only get the right hand side for an enum where the values are numbers`, () => {
    enum Test {
      Yes = 1,
      Sausage = 2,
      Doop = 3,
      'Ice Cream' = 4,
    }

    const expected = ['Yes', 'Sausage', 'Doop', 'Ice Cream'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected as any);
  });

  it(`Should only get the right hand side for an enum where the values are implied`, () => {
    enum Test {
      Yes,
      Sausage,
      Doop,
      'Ice Cream',
    }

    const expected = ['Yes', 'Sausage', 'Doop', 'Ice Cream'];

    const result = Enum.keys(Test);

    expect(result).toEqual(expected as any);
  });
});

describe(`Enum.entries`, () => {
  it(`Should only get the right hand side for an enum where the values match the keys`, () => {
    enum Test {
      Yes = 'Yes',
      Sausage = 'Sausage',
      Doop = 'Doop',
      'Ice Cream' = 'Ice Cream',
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
      ['Ice Cream', Test['Ice Cream']],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values match do not the keys`, () => {
    enum Test {
      Yes = 'yes',
      Sausage = 'Sausages',
      Doop = 'doop 3',
      'Ice Cream' = 'Ice cream',
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
      ['Ice Cream', Test['Ice Cream']],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are numbers`, () => {
    enum Test {
      Yes = 1,
      Sausage = 2,
      Doop = 3,
      'Ice Cream' = 4,
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
      ['Ice Cream', Test['Ice Cream']],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });

  it(`Should only get the right hand side for an enum where the values are implied`, () => {
    enum Test {
      Yes,
      Sausage,
      Doop,
      'Ice Cream',
    }

    const expected: any = [
      ['Yes', Test.Yes],
      ['Sausage', Test.Sausage],
      ['Doop', Test.Doop],
      ['Ice Cream', Test['Ice Cream']],
    ];

    const result = Enum.entries(Test);

    expect(result).toEqual(expected);
  });
});
