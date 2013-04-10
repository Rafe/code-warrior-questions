# Questions for code warrior

[Code Warrior](http://github.com/Rafe/code-warrior)

This is the submodule of code-warrior, which include all algorithm questions 
and test cases for questions.

Each question included:

+ readme.md : explain the question.
+ index.js : a stub for implementing answer.
+ test.js : mocha test cases to ensure the answer is correct
+ package.js : id, name, author of the question

## Structure

Every question will fit in three level, basic, moderate and hard
and in the folder which named by the question id.

list.json file include all files in all levels.

## Contribution

First, Generate question by code-warrior:

    war generate

will create pacakge.json, index.js, test.js and readme.md

next, implement the test.js and make sure the test case can validate the program is correct.
If you write the answer, saved in answer.js and leave index.js as stub.

Send pull request to the repository, it will be merged after tested and set with level and id.
