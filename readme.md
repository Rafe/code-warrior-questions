# Questions for code warrior

[Code Warrior](http://github.com/Rafe/code-warrior)

This is the submodule of code-warrior, which include all algorithm questions 
and test cases for code-warrior

## Current questions

### basic

1. [binary search](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/1)
2. [fabonacci](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/2)
3. [quicksort](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/3)
4. [tree traversal](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/4)
5. [breadth and depth first search](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/5)
6. [linked list remove](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/6)
7. [insertion sort](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/7)
8. [merge sort](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/8)
9. [tree depth](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/9)
10. [frequency of occurrences](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/10)
11. [adds without +](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/11)
12. [find all pair sum](https://github.com/Rafe/code-warrior-questions/tree/master/ basic/12)

### moderate

1. [the game of master mind](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/1)
2. [tic-tac-toe](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/2)
3. [factorial trailing zeros](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/3)
4. [max with bit](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/4)
5. [number to words](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/5)
6. [continous sequence sum](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/6)
7. [different numbers](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/7)
8. [shortest distance between words](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/8)
9. [find n-largest number](https://github.com/Rafe/code-warrior-questions/tree/master/ moderate/9)

### hard

1. [count 2s](https://github.com/Rafe/code-warrior-questions/tree/master/ hard/1)
2. [word shift](https://github.com/Rafe/code-warrior-questions/tree/master/ hard/2)
3. [largest sub square](https://github.com/Rafe/code-warrior-questions/tree/master/ hard/3)
4. [matrix largest sum](https://github.com/Rafe/code-warrior-questions/tree/master/ hard/4)
5. [longest word in words](https://github.com/Rafe/code-warrior-questions/tree/master/ hard/5)
6. [search string](https://github.com/Rafe/code-warrior-questions/tree/master/ hard/6)

## Structure

Every question will fit in three levels: basic, moderate and hard
and in the folder which named by the question id.

list.json file included all files in all levels.

Each question included:

+ readme.md : explain the question.
+ index.js : a stub for implementing answer.
+ test.js : mocha test cases to ensure the answer is correct
+ package.js : id, name, author of the question

## Contribution

First, create a folder named as question name in ./temp, 

Generate question by code-warrior:

    war generate

will create pacakge.json, index.js, test.js and readme.md

next, implement the test.js and make sure the test case can validate the program is correct.
If you write the answer, save in answer.js and leave index.js as stub.

Send pull request to the repository, it will be merged after tested and set with level and id.

