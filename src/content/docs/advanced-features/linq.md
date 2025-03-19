---
title: Language Integrated Query (LINQ) in C#
description: Learn how to use LINQ to write expressive and powerful data queries in C#
---

# Language Integrated Query (LINQ)

LINQ (Language Integrated Query) is a set of features in C# that provides a consistent, expressive, and powerful way to work with data from various sources, including collections, databases, XML, and more. LINQ brings query capabilities directly into C#, allowing you to write queries using syntax that's similar across different data sources.

## Why Use LINQ?

LINQ offers several key advantages:

- **Unified Syntax**: The same query syntax works across different data sources
- **Type Safety**: Queries are checked at compile-time, reducing runtime errors
- **IntelliSense Support**: Get code completion in your IDE while writing queries
- **Readability**: Queries often express intent more clearly than procedural code
- **Composability**: You can build complex queries from simpler ones
- **Deferred Execution**: Most LINQ operations execute only when results are needed

## Types of LINQ

There are three main flavors of LINQ:

- **LINQ to Objects**: Query in-memory collections like arrays and lists
- **LINQ to SQL/Entity Framework**: Query relational databases
- **LINQ to XML**: Query and manipulate XML data

## LINQ Syntax

LINQ provides two syntax styles: query syntax and method syntax.

### Query Syntax

This syntax resembles SQL and is often more readable for complex queries:

```csharp
var youngStudents = from student in students
                   where student.Age < 20
                   orderby student.Name
                   select student;
```

### Method Syntax

This syntax uses extension methods and lambda expressions:

```csharp
var youngStudents = students
                   .Where(student => student.Age < 20)
                   .OrderBy(student => student.Name);
```

## Basic LINQ Operations

Let's explore the most common LINQ operations with examples.

### Filtering with Where

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Get even numbers
var evenNumbers = numbers.Where(n => n % 2 == 0);
// Result: 2, 4, 6, 8, 10

// Query syntax
var evenNumbersQuery = from n in numbers
                       where n % 2 == 0
                       select n;
```

### Projection with Select

```csharp
List<string> names = new List<string> { "Alice", "Bob", "Charlie" };

// Get lengths of each name
var nameLengths = names.Select(name => name.Length);
// Result: 5, 3, 7

// Query syntax
var nameLengthsQuery = from name in names
                       select name.Length;
```

### Ordering with OrderBy and ThenBy

```csharp
List<Person> people = GetPeople(); // Assume this returns a list of people

// Sort by age, then by name
var sortedPeople = people
                  .OrderBy(p => p.Age)
                  .ThenBy(p => p.Name);

// Query syntax
var sortedPeopleQuery = from p in people
                        orderby p.Age, p.Name
                        select p;
```

### Grouping with GroupBy

```csharp
List<Product> products = GetProducts(); // Assume this returns products

// Group products by category
var productsByCategory = products.GroupBy(p => p.Category);

// Query syntax
var productsByCategoryQuery = from p in products
                              group p by p.Category;

// Iterate through groups
foreach (var group in productsByCategory)
{
    Console.WriteLine($"Category: {group.Key}");
    foreach (var product in group)
    {
        Console.WriteLine($"  - {product.Name}: {product.Price:C}");
    }
}
```

### Joining Data with Join

```csharp
List<Customer> customers = GetCustomers();
List<Order> orders = GetOrders();

var customerOrders = customers.Join(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, order) => new { 
        CustomerName = customer.Name, 
        OrderId = order.Id, 
        Amount = order.Amount 
    }
);

// Query syntax
var customerOrdersQuery = from c in customers
                          join o in orders on c.Id equals o.CustomerId
                          select new { 
                              CustomerName = c.Name, 
                              OrderId = o.Id, 
                              Amount = o.Amount 
                          };
```

### Aggregation Operations

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

int sum = numbers.Sum();                       // 15
int count = numbers.Count();                   // 5
double average = numbers.Average();            // 3
int min = numbers.Min();                       // 1
int max = numbers.Max();                       // 5
```

## Advanced LINQ Features

### Deferred Execution

Most LINQ queries don't execute immediately when defined. Instead, they execute when the results are iterated:

```csharp
var query = numbers.Where(n => n > 5); // Query is defined but not executed yet

numbers.Add(11); // Adding to the source affects the query results

foreach (var n in query) // Query executes here
{
    Console.WriteLine(n);
}
```

### Immediate Execution

Some methods force immediate execution:

```csharp
// These all execute immediately
int[] array = numbers.Where(n => n > 5).ToArray();
List<int> list = numbers.Where(n => n > 5).ToList();
Dictionary<int, string> dict = people.ToDictionary(p => p.Id, p => p.Name);
int count = numbers.Count(n => n > 5);
```

### Let Clause (Query Syntax)

The `let` keyword creates a new variable in a query expression:

```csharp
var query = from name in names
            let length = name.Length
            where length > 5
            orderby length
            select new { name, length };
```

### SelectMany (Flattening Collections)

`SelectMany` flattens nested collections:

```csharp
List<Customer> customers = GetCustomers();

// Get all phone numbers from all customers
var allPhoneNumbers = customers.SelectMany(c => c.PhoneNumbers);

// Query syntax
var allPhoneNumbersQuery = from c in customers
                           from phoneNumber in c.PhoneNumbers
                           select phoneNumber;
```

## Real-world Example: Data Analysis

Here's a more complex example that combines multiple LINQ operations:

```csharp
// Define sample data
List<Product> products = new List<Product>
{
    new Product { Id = 1, Name = "Laptop", Category = "Electronics", Price = 1200, Stock = 15 },
    new Product { Id = 2, Name = "Smartphone", Category = "Electronics", Price = 800, Stock = 25 },
    new Product { Id = 3, Name = "Headphones", Category = "Electronics", Price = 100, Stock = 50 },
    new Product { Id = 4, Name = "Chair", Category = "Furniture", Price = 150, Stock = 10 },
    new Product { Id = 5, Name = "Desk", Category = "Furniture", Price = 250, Stock = 5 },
    new Product { Id = 6, Name = "Mouse", Category = "Electronics", Price = 30, Stock = 100 },
    new Product { Id = 7, Name = "Keyboard", Category = "Electronics", Price = 50, Stock = 75 }
};

// 1. Get the total value of inventory by category
var inventoryValueByCategory = products
    .GroupBy(p => p.Category)
    .Select(g => new {
        Category = g.Key,
        TotalValue = g.Sum(p => p.Price * p.Stock),
        AveragePrice = g.Average(p => p.Price),
        ItemCount = g.Count()
    })
    .OrderByDescending(x => x.TotalValue);

// Display results
foreach (var categoryInfo in inventoryValueByCategory)
{
    Console.WriteLine($"Category: {categoryInfo.Category}");
    Console.WriteLine($"  Total Inventory Value: {categoryInfo.TotalValue:C}");
    Console.WriteLine($"  Average Price: {categoryInfo.AveragePrice:C}");
    Console.WriteLine($"  Number of Products: {categoryInfo.ItemCount}");
    Console.WriteLine();
}

// 2. Find products that need to be restocked (stock < 10)
var lowStockProducts = products
    .Where(p => p.Stock < 10)
    .OrderBy(p => p.Stock)
    .Select(p => new { p.Name, p.Stock, Value = p.Price * p.Stock });

Console.WriteLine("Products to Restock:");
foreach (var product in lowStockProducts)
{
    Console.WriteLine($"  {product.Name}: {product.Stock} in stock, value: {product.Value:C}");
}
```

## Performance Considerations

When using LINQ, keep these performance considerations in mind:

1. **Deferred Execution**: Understand when queries are actually executed
2. **Multiple Iterations**: Cache results with `ToList()` or `ToArray()` if you need to iterate multiple times
3. **Database Queries**: For LINQ to Entities, be aware that queries translate to SQL
4. **Large Data Sets**: Consider using more specialized approaches for very large data

## Next Steps

Now that you understand LINQ, you can explore:

- [Async Programming in C#](/advanced-features/async-await): Learn how to write non-blocking code
- [Delegates and Events in C#](/advanced-features/delegates-events): Understand event-driven programming 