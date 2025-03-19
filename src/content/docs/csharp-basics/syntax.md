---
title: C# Syntax and Basics
description: Learn the fundamental syntax and structure of C# programs
---

# C# Syntax and Basics

C# is a statically-typed, object-oriented programming language. Let's explore the basic syntax and structure of C# programs.

## Your First C# Program

Here's a simple "Hello World" program in C#:

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

Let's break down what each part does:

- `using System;` - Imports the System namespace which contains fundamental classes and base classes
- `namespace HelloWorld` - Declares a namespace for your code
- `class Program` - Defines a class named Program
- `static void Main(string[] args)` - The entry point method for your application
- `Console.WriteLine("Hello, World!");` - Prints text to the console

## Variables and Data Types

C# is a strongly-typed language, which means you need to declare the type of each variable.

### Basic Data Types

```csharp
// Numeric types
int age = 30;                  // Integer
double price = 19.99;          // Double-precision floating point
decimal accountBalance = 340.4m; // Decimal (m suffix required)
float temperature = 36.6f;     // Single-precision floating point (f suffix required)

// Text
char grade = 'A';              // Single character
string name = "John";          // String of characters

// Boolean
bool isActive = true;          // True or false

// Date and time
DateTime now = DateTime.Now;   // Current date and time
```

### Type Inference

C# can infer the type of local variables using the `var` keyword:

```csharp
var count = 10;      // Inferred as int
var message = "Hi";  // Inferred as string
var today = DateTime.Today;  // Inferred as DateTime
```

## Constants

Use the `const` keyword for values that won't change:

```csharp
const double Pi = 3.14159;
const string AppName = "My C# App";
```

## Basic Input and Output

```csharp
// Output to console
Console.WriteLine("Enter your name:");

// Input from console
string input = Console.ReadLine();

// Output with string interpolation
Console.WriteLine($"Hello, {input}!");
```

## Comments

C# supports both single-line and multi-line comments:

```csharp
// This is a single-line comment

/* This is a multi-line comment
   that spans several lines */

/// <summary>
/// XML documentation comments for methods and classes
/// </summary>
```

## Next Steps

Now that you understand the basic syntax of C#, you're ready to learn about [control structures](/csharp-basics/control-flow) like conditionals and loops. 