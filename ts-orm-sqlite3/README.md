# TypeORM v3

-> [TypeORM v2](v2/README.md)

## Database migration

> Generate migration:

```bash
$ yarn typeorm migration:generate src/infrastructure/db/migrations/Init -d src/infrastructure/db/data-source.ts
```

> run migration:

```bash
$ yarn typeorm migration:run -d src/infrastructure/db/data-source.ts
```
