---
title: C# Basics Quiz
description: Test your knowledge of C# basics with this interactive quiz
---

import QuizComponent from '../../../components/QuizComponent.astro';

# Test Your C# Knowledge

After learning about C# basics, test your understanding with this interactive quiz.

<QuizComponent
  title="C# Basics Quiz"
  questions={[
    {
      question: "Which of the following is the correct way to declare an integer variable in C#?",
      options: [
        "int myNumber = 5;",
        "integer myNumber = 5;",
        "var myNumber: int = 5;",
        "number myNumber = 5;"
      ],
      correctIndex: 0,
      explanation: "In C#, you declare an integer variable using the 'int' keyword followed by the variable name and optional initialization."
    },
    {
      question: "What is the output of: Console.WriteLine(10 % 3);",
      options: [
        "3.33",
        "3",
        "1",
        "0"
      ],
      correctIndex: 2,
      explanation: "The % operator calculates the remainder of division. 10 divided by 3 is 3 with a remainder of 1."
    },
    {
      question: "Which statement correctly creates a string array with three elements?",
      options: [
        "string[] names = {'Alice', 'Bob', 'Charlie'};",
        "string[] names = ['Alice', 'Bob', 'Charlie'];",
        "string[] names = new string[3] {'Alice', 'Bob', 'Charlie'};",
        "string[3] names = new string {'Alice', 'Bob', 'Charlie'};"
      ],
      correctIndex: 2,
      explanation: "In C#, you can create and initialize an array using 'new Type[size]' followed by the initialization list in curly braces."
    },
    {
      question: "What does the 'var' keyword do in C#?",
      options: [
        "Creates a variable that can change type at runtime",
        "Creates a variable with type determined at compile time based on the assigned value",
        "Creates a variant type that can hold any value",
        "Creates a variable that can only be used within the current method"
      ],
      correctIndex: 1,
      explanation: "The 'var' keyword enables implicit typing where the compiler determines the variable's type based on the assigned value at compile time, not runtime."
    },
    {
      question: "Which loop type is guaranteed to execute at least once?",
      options: [
        "for loop",
        "while loop",
        "do-while loop",
        "foreach loop"
      ],
      correctIndex: 2,
      explanation: "The do-while loop always executes its body at least once because the condition is checked after the body executes."
    }
  ]}
/>

## Next Steps

Now that you've tested your knowledge of C# basics, you can continue to the [Object-Oriented Programming](/oop/) section to learn about classes, inheritance, and more. 