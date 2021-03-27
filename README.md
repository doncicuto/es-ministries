# es-ministries

Government ministries of Spain names and DIR3 codes.

Reference: [https://administracion.gob.es/pagFront/espanaAdmon/directorioOrganigramas/gobiernoEstado/gobiernoEstado.htm#.YF81LkNKjos](https://administracion.gob.es/pagFront/espanaAdmon/directorioOrganigramas/gobiernoEstado/gobiernoEstado.htm#.YF81LkNKjos)

## Install

```bash
yarn add @doncicuto/es-ministries
```

or

```bash
npm install @doncicuto/es-ministries --save
```

## Usage

The default export is an array of objects with the following structure:

| Property | Type     | Description   | Example                 |
| -------- | -------- | ------------- | ----------------------- |
| `code`   | `string` | DIR3 code     | `E00003301`             |
| `name`   | `string` | Ministry name | `Ministerio de Defensa` |

Example (Browser):

```ts
import ministries from "@doncicuto/es-ministries";

const names = ministries.map((p) => p.name);
console.log(names);

const filtered = ministries.filter((p) => p.code === "E00003301");
console.log(filtered);
```

Example (NodeJS):

```js
const ministries = require("@doncicuto/es-ministries").default;

const names = ministries.map((p) => p.name);
console.log(names);

const filtered = ministries.filter((p) => p.code === "E00003301");
console.log(filtered);
```
