---
title: Classes and Objects in C#
description: Learn how to define and work with classes and objects, the foundation of object-oriented programming in C#
---

# Classes and Objects

Classes and objects are the fundamental building blocks of object-oriented programming in C#. A class is a blueprint that defines the properties, methods, and behaviors that objects of that class will have. An object is an instance of a class – a concrete entity created from the class blueprint.

## Defining a Class in C#

Here's how to define a basic class in C#:

```csharp
// A simple Person class
public class Person
{
    // Fields (data)
    private string name;
    private int age;
    
    // Properties (accessors for data)
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    
    public int Age
    {
        get { return age; }
        set { age = value; }
    }
    
    // Constructor
    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }
    
    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hello, my name is {name} and I am {age} years old.");
    }
}
```

## Creating and Using Objects

Once you've defined a class, you can create objects (instances) of that class:

```csharp
// Creating objects of the Person class
Person person1 = new Person("Alice", 30);
Person person2 = new Person("Bob", 25);

// Accessing properties
Console.WriteLine(person1.Name);  // Output: Alice
person2.Age = 26;  // Changing property value

// Calling methods
person1.Introduce();  // Output: Hello, my name is Alice and I am 30 years old.
person2.Introduce();  // Output: Hello, my name is Bob and I am 26 years old.
```

## Class Members

A class can contain various types of members:

### Fields

Fields are variables declared within a class:

```csharp
private string name;  // Private field
public int Count;     // Public field (not recommended, use properties instead)
```

### Properties

Properties provide a way to access fields with additional logic:

```csharp
// Auto-implemented property (C# creates the backing field automatically)
public string Email { get; set; }

// Property with validation
private int age;
public int Age
{
    get { return age; }
    set 
    { 
        if (value >= 0)
            age = value;
        else
            throw new ArgumentException("Age cannot be negative");
    }
}
```

### Methods

Methods define the actions that a class can perform:

```csharp
public void SayHello()
{
    Console.WriteLine("Hello!");
}

public int Add(int a, int b)
{
    return a + b;
}
```

### Constructors

Constructors are special methods that initialize objects:

```csharp
// Default constructor (no parameters)
public Person()
{
    name = "Unknown";
    age = 0;
}

// Parameterized constructor
public Person(string name, int age)
{
    this.name = name;
    this.age = age;
}
```

### Static Members

Static members belong to the class itself, not to instances:

```csharp
public class MathOperations
{
    // Static field
    public static double Pi = 3.14159;
    
    // Static method
    public static int Add(int a, int b)
    {
        return a + b;
    }
}

// Usage
double pi = MathOperations.Pi;  // Accessing static field
int sum = MathOperations.Add(5, 3);  // Calling static method
```

## Access Modifiers

Access modifiers control the visibility of class members:

- **public**: Accessible from anywhere
- **private**: Accessible only within the containing class
- **protected**: Accessible within the containing class and derived classes
- **internal**: Accessible within the same assembly
- **protected internal**: Accessible within the same assembly or derived classes

## Best Practices for Classes and Objects

- **Single Responsibility Principle**: A class should have only one reason to change
- **Encapsulation**: Keep fields private and expose them through properties
- **Proper Initialization**: Initialize objects to a valid state through constructors
- **Meaningful Names**: Use descriptive names for classes, properties, and methods
- **Consistent Abstraction Level**: Methods should be at the same level of abstraction

## Example: Building a Complete Class

Here's a more complete example of a well-designed class:

```csharp
public class BankAccount
{
    // Private fields
    private string accountNumber;
    private string ownerName;
    private decimal balance;
    private static int accountCounter = 0;
    
    // Properties
    public string AccountNumber { get { return accountNumber; } }
    public string OwnerName { get { return ownerName; } }
    public decimal Balance { get { return balance; } }
    
    // Constructor
    public BankAccount(string ownerName, decimal initialDeposit)
    {
        accountCounter++;
        this.accountNumber = "ACC" + accountCounter.ToString("D5");
        this.ownerName = ownerName;
        
        if (initialDeposit < 0)
            throw new ArgumentException("Initial deposit cannot be negative");
            
        this.balance = initialDeposit;
    }
    
    // Methods
    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Deposit amount must be positive");
            
        balance += amount;
        Console.WriteLine($"Deposited: {amount:C}. New balance: {balance:C}");
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdrawal amount must be positive");
            
        if (amount > balance)
        {
            Console.WriteLine("Insufficient funds");
            return false;
        }
        
        balance -= amount;
        Console.WriteLine($"Withdrew: {amount:C}. New balance: {balance:C}");
        return true;
    }
    
    // Static method
    public static void TransferFunds(BankAccount fromAccount, BankAccount toAccount, decimal amount)
    {
        if (fromAccount.Withdraw(amount))
            toAccount.Deposit(amount);
    }
}
```

Usage of the BankAccount class:

```csharp
// Create accounts
BankAccount account1 = new BankAccount("Alice Smith", 1000);
BankAccount account2 = new BankAccount("Bob Johnson", 500);

// Perform operations
account1.Deposit(250);
account1.Withdraw(100);

// Transfer between accounts
BankAccount.TransferFunds(account1, account2, 300);

// Check final balances
Console.WriteLine($"{account1.OwnerName}'s balance: {account1.Balance:C}");
Console.WriteLine($"{account2.OwnerName}'s balance: {account2.Balance:C}");
```

## Next Steps

Now that you understand classes and objects, you're ready to explore:

- [Inheritance in C#](/oop/inheritance): How to create class hierarchies and reuse code
- [Encapsulation in C#](/oop/encapsulation): Protecting data and implementing information hiding 