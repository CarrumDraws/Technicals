Idea behind Hamburger Menu:
- Create a flexbox containing one 'bar'
- use ::before and ::after to create two more identical bars
- Animate the bars seperately

--

SVG's:
- In order to dynamically recolor with CSS...
- Set fill="current" WITHIN the .svg file
- Import the SVG like 'import { ReactComponent as LogoSVG } from "../assets/AG_02.svg";'
- Add to DOM as a Node, add a className
- Control with CSS by doing .className g { fill: #fff }

--

Forwards/Backwards Animation:
1. You need two seperate animations for forwards AND backwards. Play these animations depending on your needs.
2. For initial page load, set a classname to be 'animation-time: 0 !important,' and apply it to the animation until a button is triggered.

X. Add Sizing Breakpoints
Xx. Add Dark/Light Mode
XX. Reduce Header Buttons when too small


Questions: Do i have to do soemthing with webkit?

Things to try next time:
- How to name colors?
- CSS Modules
- SCSS: Has Math Functions
- Figma

45-16=29
16/8=2
0-29 / 71
2-31 / 69
4-33 / 67
6-35 / 65
8-37 / 63
10-39 / 61
12-41 / 59
14-43 / 57

0-25 / 75
3-28 / 72
6-31 / 69
9-34 / 66
12-37 / 63
15-40 / 60
18-43 / 57
21-46 / 54