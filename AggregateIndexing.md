# MongoDB Aggregation Notes

## What is Aggregation?
Aggregation means putting data together to get answers. It helps us count, add, find average, or group data.

This document contains simple observations about key MongoDB aggregation operators used to process and analyze data.

## Aggregation Operators

### $match  
Filters documents to include only those that meet specified conditions.  
Example: Find only orders with status "Delivered".

### $group 
Groups documents by a field and performs calculations like sum, count, or average.  
Example: Calculate total sales for each customer.

### $sort  
Orders documents by a specified field, ascending or descending.  
Example: Sort orders by date from newest to oldest.

### $project 
Selects which fields to include or exclude in the result.  
Example: Show only product names and prices from orders.

### $unwind 
Deconstructs an array field from documents into separate documents for each element.  
Example: Turn an array of items in an order into individual item records.

### $sum 
Calculates the sum of numeric values.  
Example: Add up total sales amount.

### $avg 
Calculates the average of numeric values.  
Example: Find the average order value per customer.

### $limit  
Limits the number of documents in the output.  
Example: Show only top 3 customers by spending.

## General Observations

Aggregation pipelines run multiple stages one after another.  
Each stage modifies or filters data for the next stage.  
Combining these operators helps answer complex questions from data.  
Understanding these operators is key to writing efficient queries.

# MongoDB Indexes Notes

## What is an Index?

An index is like a shortcut or a table of contents for a book.  
It helps MongoDB find data faster without checking every record one by one.

## Why Do We Use Indexes?

To make searching faster.
To make sorting faster.
To make big databases work better.

## Things to Know About Indexes

Indexes take extra space on the disk.
When you add or change data, indexes need to update too, so it can slow down writing a bit.
Use indexes carefully to keep a good balance between fast searching and fast writing.

## Types of Indexes

1. **Single Field Index**  
   Index on one field only, like customerName.

2. **Compound Index**  
   Index on two or more fields, like status and orderDate.

3. **Text Index**  
   Special index to search words inside text fields.

## How to Work with Indexes

**See all indexes on your collection:**  
 db.orders.getIndexes();

**Create an index on one field**  
db.orders.createIndex({ customerName: 1 })

**Create index on multiple field**  
 db.orders.createIndex({ status: 1, orderDate: -1 })   // -1 means desc order

**Create a text index for searching words**  
 db.create.createIndex({productName : {text}})

# Some key points

Indexes make searches and sorting much faster.

Compound indexes help when filtering on multiple fields.

Text indexes let us find words inside text easily.

Removing unused indexes helps write data faster and saves space.

Always test query speed before and after adding indexes.