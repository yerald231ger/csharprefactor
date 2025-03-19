---
title: Control Structures in C#
description: Learn about conditionals, loops, and other control flow mechanisms in C#
---

# Control Structures in C#

Control structures allow you to control the flow of execution in your C# programs. They help you make decisions, repeat code blocks, and organize your code logic.

## Conditional Statements

### If Statement

The `if` statement executes a block of code if a specified condition is true:

```csharp
int age = 18;

if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
```

### If-Else Statement

The `if-else` statement provides an alternative execution path:

```csharp
int age = 16;

if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
else
{
    Console.WriteLine("You are a minor.");
}
```

### If-Else If-Else Statement

For multiple conditions:

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else
{
    Console.WriteLine("Grade: F");
}
```

### Switch Statement

The `switch` statement is useful when checking a variable against multiple values:

```csharp
char grade = 'B';

switch (grade)
{
    case 'A':
        Console.WriteLine("Excellent!");
        break;
    case 'B':
        Console.WriteLine("Good job!");
        break;
    case 'C':
        Console.WriteLine("Satisfactory");
        break;
    case 'D':
    case 'F':
        Console.WriteLine("You need to improve");
        break;
    default:
        Console.WriteLine("Invalid grade");
        break;
}
```

### Ternary Operator

A shorthand for simple if-else conditions:

```csharp
int age = 20;
string status = (age >= 18) ? "Adult" : "Minor";
Console.WriteLine(status);  // Outputs "Adult"
```

## Looping Statements

### For Loop

The `for` loop is used when you know how many times you want to execute a block of code:

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"Iteration {i}");
}
```

### While Loop

The `while` loop continues as long as a condition is true:

```csharp
int count = 0;
while (count < 5)
{
    Console.WriteLine($"Count: {count}");
    count++;
}
```

### Do-While Loop

The `do-while` loop is similar to while but guarantees at least one execution:

```csharp
int num = 0;
do
{
    Console.WriteLine($"Number: {num}");
    num++;
} while (num < 5);
```

### Foreach Loop

The `foreach` loop iterates through elements in a collection:

```csharp
string[] fruits = { "Apple", "Banana", "Cherry" };

foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

## Jump Statements

### Break

The `break` statement exits a loop or switch statement:

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;  // Exit the loop when i equals 5
    }
    Console.WriteLine(i);
}
```

### Continue

The `continue` statement skips the current iteration and moves to the next one:

```csharp
for (int i = 0; i < 5; i++)
{
    if (i == 2)
    {
        continue;  // Skip iteration when i equals 2
    }
    Console.WriteLine(i);
}
```

### Return

The `return` statement exits a method and optionally returns a value:

```csharp
bool IsEven(int number)
{
    if (number % 2 == 0)
    {
        return true;
    }
    return false;
}
```

## Next Steps

Now that you understand control flow in C#, you're ready to explore more complex topics like methods, classes, and object-oriented programming. 