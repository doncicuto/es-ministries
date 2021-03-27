# es-ministries

Government ministries of Spain names and DIR3 codes.

About DIR3, according to the Spanish Interoperability Scheme:

> public administrations will maintain an updated list of their administrative bodies and registration and citizen service offices, and their relationships between them. Said bodies and offices will be uniquely codified and this codification will be disseminated among public administrations

The Common Directory provides a unified and common Inventory to the entire Administration of the organic units / public bodies, their associated offices and economic and budgetary management units, facilitating the distributed and jointly responsible maintenance of the information.

All organic units and their public bodies therefore have a code that uniquely identifies them called the DIR3 code.

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
