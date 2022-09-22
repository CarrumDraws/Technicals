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

X. Add Sizing Breakpoints
Xx. Add Dark/Light Mode
Xxx. Remove White BKRD from SVG + Color Animation
XX. Reduce Header Buttons when too small
XXX. Make Rounded "Cards" for each promo?
XXXX. Implement sidebar when hamburger clicked

Questions: Do i have to do soemthing with webkit?

Things to try next time:
- CSS Modules
- SCSS: Has Math Functions
- How to name CSS colors?
- Figma