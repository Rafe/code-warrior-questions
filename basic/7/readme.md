#The game of Master mind

The computer has four slots containing balls that are red (R), yellow (Y), green (G) or blue(B).
For example, the computer might have RGGB (e.g., Slot #1 is red, Slot #2 and #3 are green, Slot #4 is blue)

You, the user, are trying to guess the solution. You might, for example, guess YRGB

When you guess the correct color for the correct slot, you get a "hit".
If you guess a color that exists but is in the wrong slot, you get a "pseudo-hit".

For each guess, you are told the number of hits and pseudo-hits;

Write a function that return the hit and pesudo-hits
