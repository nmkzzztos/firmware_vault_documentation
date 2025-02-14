---
id: dynamicsqlquerybuilder
title: Dynamic SQL Query Builder
---

# Dynamic SQL Query Builder

## Overview
The **Dynamic Sql Query Builder** is an Angular service designed to dynamically generate SQL queries based on specified tables, columns, filtering conditions, sorting, and limits. It ensures that valid table relationships are maintained using predefined mapping rules.

## Features
- Dynamically constructs SQL `SELECT` queries with optional `WHERE`, `ORDER BY`, and `LIMIT` clauses.
- Supports `INNER JOIN` operations based on predefined table relationships.
- Validates table names and relationships before query execution.
- Provides utility methods for table validation and relationship retrieval.

## Table Relationships
The service maintains a predefined set of table relationships that dictate how joins are constructed. The relationships are stored in a constant object (`TABLE_RELATIONS`), ensuring that joins are only created when a valid mapping exists between two tables.

### Supported Tables and Relations
- `products`
- `cve_results`
- `binwalk_results`
- `jobs`
- `tasks`

### Table Interaction Matrix

| Table           | Interacts With                          |
|----------------|----------------------------------|
| products       | cve_results, binwalk_results, tasks |
| cve_results    | products, binwalk_results, tasks |
| binwalk_results | products, cve_results, tasks    |
| jobs          | tasks                             |
| tasks         | jobs, products, cve_results, binwalk_results |

:::info

Tables that are not listed as interacting do not have direct relationships.

:::

## Methods

### `generateQuery()`
Generates an SQL query string based on user-specified tables, columns, and optional filtering and sorting parameters.

**Parameters:**
- `tables: string[]` - List of table names to include in the query.
- `columns: string[]` - Columns to select (default: `['*']`).
- `where: string[]` - Optional filtering conditions.
- `orderBy: string | null` - Column to sort results by.
- `orderDirection: 'ASC' | 'DESC'` - Sorting direction (default: `ASC`).
- `limit: number | null` - Limit on the number of rows (optional).

**Returns:**
- `string` - The generated SQL query.

#### Example:
```typescript
const query = service.generateQuery(
  ['products', 'cve_results'],
  ['products.id', 'products.product_name', 'cve_results.cve_number'],
  ['cve_results.severity = "High"'],
  'cve_results.cve_number',
  'DESC',
  5
);
```
**Generated SQL:**
```sql
SELECT products.id, products.product_name, cve_results.cve_number
FROM products
INNER JOIN cve_results ON products.id = cve_results.image_id
WHERE cve_results.severity = "High"
ORDER BY cve_results.cve_number DESC
LIMIT 5;
```
### Utility Methods: 
 `generateJoins()`: Creates `INNER JOIN` statements based on the predefined table relationships.
- Returns: `string` - The `JOIN` SQL expressions.

`validateTables()`: Checks if the provided tables exist in the `TABLE_RELATIONS` map.
- Returns: `string[]` - List of errors if any tables are invalid, otherwise an empty array.

`getRelationship()`: Retrieves the relationship condition between two tables if one exists.
- Returns: `string | null` - The join condition or `null` if no relation exists.
