# enum-keys-values-entries

Get just the keys (left hand side), values (right hand side), or entries (tuple of [key, value]) of a TypeScript enum.

[![GitHub release](https://img.shields.io/github/release/bameyrick/enum-keys-values-entries.svg)](https://github.com/bameyrick/enum-keys-values-entries/releases)
[![Build Status](https://travis-ci.com/bameyrick/enum-keys-values-entries.svg?branch=master)](https://travis-ci.com/bameyrick/enum-keys-values-entries)
[![codecov](https://codecov.io/gh/bameyrick/enum-keys-values-entries/branch/master/graph/badge.svg)](https://codecov.io/gh/bameyrick/enum-keys-values-entries)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9002fceb0cad4a08849b4b6eed3fa285)](https://www.codacy.com/manual/bameyrick/enum-keys-values-entries)

- [enum-keys-values-entries](#enum-keys-values-entries)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Usage](#usage)
    - [Keys](#keys)

## Install

You can install via npm or yarn.

### npm

```bash
npm install --save enum-keys-values-entries
```

### yarn

```bash
yarn add enum-keys-values-entries
```

## Usage

### Keys

```typescript
import { Enum } from 'enum-keys-values-entries';

enum MyEnum {
  Cake = 1,
  'Ice Cream' = 2,
  Pie = 3,
}

const keys = Enum.keys(MyEnum);
const values = Enum.values(MyEnum);
const entries = Enum.entries(MyEnum);
```
