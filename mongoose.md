# mongoose.md

## 📌 MongoDB Overview
- NoSQL document-based database.
- Stores data in JSON-like BSON format.
- Schema-less, scalable, and fast.
- Supports rich queries, indexing, aggregation.

## 🧩 ORM (Object-Relational Mapping)
- Technique to map objects in code to database records.
- Common in SQL-based DBs (e.g., Sequelize for PostgreSQL).
- Not ideal for NoSQL but similar concepts are used (like ODMs).

## 🛠️ Mongoose
- ODM (Object Data Modeling) library for MongoDB in Node.js.
- Provides schema-based structure for MongoDB collections.
- Supports middleware, validations, population, etc.

### 🔧 Features:
- Schema definitions
- Model-based data handling
- Built-in data validation
- Middleware support (pre/post hooks)

## 🆚 RDBMS vs NoSQL

| Feature          | RDBMS                          | NoSQL (MongoDB)               |
|------------------|--------------------------------|-------------------------------|
| Structure        | Tables & Rows                  | Collections & Documents       |
| Schema           | Strict                         | Flexible                      |
| Relationships    | Supported (Joins)              | Embedded docs / References    |
| Scaling          | Vertical                       | Horizontal                    |
| Query Language   | SQL                            | MongoDB Query Language        |