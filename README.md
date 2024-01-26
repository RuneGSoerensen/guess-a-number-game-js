[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/W8tU1TPo)
# Guess a Number Game

## Introduction

In this exercise, you will create a simple "Guess a Number" game using JavaScript. The game generates a random number between 0 and 100, and the user needs to guess the correct number. After each guess, the game provides feedback on whether the correct number is higher or lower.

## Instructions

1. Set up a `gameRunning` boolean variable to control the game loop.
2. Inside the loop, generate a random number between 0 and 100 using `Math.floor` and `Math.random`. This will be the target number for the user to guess.
3. Use a `while` loop to repeatedly prompt the user for guesses until the correct number is guessed.
4. Ask the user to guess a number using the `prompt` function.
5. Compare the user's guess with the target number.
   - If the guess is correct, display a congratulatory message using `console.log`.
   - If the guess is too low, inform the user to guess higher using `console.log`.
   - If the guess is too high, inform the user to guess lower using `console.log`.
6. Use an `alert` to notify the user about the game result when they guess the correct number.
7. Break out of the loop using `break` after the correct guess.
