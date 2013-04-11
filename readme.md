# Questions for code warrior

[Code Warrior](http://github.com/Rafe/code-warrior)

This is the submodule of code-warrior, which include all algorithm questions 
and test cases for code-warrior

Each question included:

+ readme.md : explain the question.
+ index.js : a stub for implementing answer.
+ test.js : mocha test cases to ensure the answer is correct
+ package.js : id, name, author of the question

## Structure

Every question will fit in three levels: basic, moderate and hard
and in the folder which named by the question id.

list.json file included all files in all levels.

## Contribution

First, create a folder named as question name in ./temp, 

Generate question by code-warrior:

    war generate

will create pacakge.json, index.js, test.js and readme.md

next, implement the test.js and make sure the test case can validate the program is correct.
If you write the answer, save in answer.js and leave index.js as stub.

Send pull request to the repository, it will be merged after tested and set with level and id.

## Current questions

    {
      "basic": {
        "1": "binary search",
        "2": "fabonacci",
        "3": "quicksort",
        "4": "tree traversal",
        "5": "breadth and depth first search",
        "6": "linked list remove",
        "7": "insertion sort",
        "8": "merge sort",
        "9": "tree depth",
        "10": "frequency of occurrences",
        "11": "adds without +",
        "12": "find all pair sum"
      },
      "moderate": {
        "1": "the game of master mind",
        "2": "tic-tac-toe",
        "3": "factorial trailing zeros",
        "4": "max with bit",
        "5": "number to words",
        "6": "continous sequence sum",
        "7": "different numbers",
        "8": "shortest distance between words",
        "9": "find n-largest number"
      },
      "hard": {
        "1": "count 2s",
        "2": "word shift",
        "3": "largest sub square",
        "4": "matrix largest sum",
        "5": "longest word in words",
        "6": "search string"
      }
    }
