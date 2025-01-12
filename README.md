# dino-game-rex-mode
Challenge to make a Chrome Dino Trainer that it's able to jump all over :)

## Collision Detection Using Pixel Color on Canvas
This project detects collisions on a canvas by reading pixel colors and performing specific actions based on the color values. It's commonly used in game automation or visual training tools where detecting a certain color can signify a collision or event.

## How It Works
The core functionality is based on scanning the canvas for specific colors in a given area. When a certain color condition is met, a simulated action (such as a keypress) is triggered.
This first version is pretty lame it just checks the current pixel colors on an specific X position, and between 90 and 130 y position ( to prevent the floor lines to trigger )

## Issues
It fails, if the game shows 2 elements too close. 

## Challenge
Improving the code to detect the current approaching "enemies" and based on that, delay or have the jump having a bit sooner to prevent. Do A pull request with yhour suggested updates :)

## Extra 
Detecting the count of different enemies jumped ( bird-down, bird-up, cactus-1, cactus-2, cactus-3, cactus-4 )

## How to test
Open chrome://dino/ in Chrome, paste the code into the console, click the space :)
