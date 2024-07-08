## README.md for collaborator

## first --
**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/portfolio.git
```
```bash
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```
## second -- 
**[! Very important]**
**create your won branch.**
To create a new branch, run these command in your terminal:

```bash
git switch -C feature/hero-demo
```
(note: hero-demo is a demo branch name. You can use any relivent name).

## third --
**write your code**
**[! very important]**
To run tailwind css paste the command in your terminal:

```bash
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
```
# fourth --
When you have finished all the work and your project then run these 3 command to your terminal:

```bash
git add .
```
```bash
git commit -m "your msg"
```
```bash
git push -u origin feature/hero-demo
```
(note: Here you must use your branch name. Here 'hero-demo' is my branch name.)

**Font Family**
- font-primary
- font-heading

**Color**
- brown
- black1
- white1

(note: you can use this color for any disign "e.g. 'text-brown' to color the text and 'bg-brown' to color the background.")

**Typography fonts**
use "body-1, body-2, body-3" class for paragraph tag.
use "h1, h2, h3, h4, h5, h6" for heading tag.