import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {

  margin: 2rem;

  box-sizing: border-box;

}



html {

  scrollbar-width: thin;

    scrollbar-color: var(--dark-slate) var(--navy);

}



html.normal-scroll {

  scroll-behavior: auto;

}



:root {

  --background: #121216;

  --headerbg: #fff;

  --background-second: #121016;

  --first-color:  #00d9ff;

  --second-color: #5252e0;

  --text-primary: #d6d6dc;

  --text-secondary: #a9a9a9;

  --hover-color: rgb(0, 217, 255, 0.7);

  --hover-second-color: rgb(80, 82, 224, 0.7);;

  --white: #f6f2f2;

  --border-color: #0c0b0e;

  --border-second-color: #1e1e25;

  --dark-navy: #020c1b;

    --navy: #0A192F;

    --light-navy: #112240;

    --lightest-navy: #233554;

    --navy-shadow: rgba(2, 12, 27, 0.7);

    --dark-slate: #495670;

    --slate: #8892b0;

    --light-slate: #a8b2d1;

    --lightest-slate: #FCB93D;

    --white: #e6f1ff;

    --green: #64ffda;

    --green-tint: rgba(100, 255, 218, 0.1);

    --pink: #f57dff;

    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,

      sans-serif;

    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;



    --fz-xxs: 12px;

    --fz-xs: 13px;

    --fz-sm: 14px;

    --fz-md: 16px;

    --fz-lg: 18px;

    --fz-xl: 20px;

    --fz-xxl: 22px;

    --fz-heading: 32px;



    --border-radius: 4px;

    --nav-height: 100px;

    --nav-scroll-height: 70px;



    --tab-height: 42px;

    --tab-width: 120px;



    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);

    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);



    --hamburger-width: 30px;



    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;

    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;

    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    --ham-after-active: bottom 0.1s ease-out,

      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

}



body {

  margin: 0;

    width: 100%;

    min-height: 100%;

    overflow-x: hidden;

    -moz-osx-font-smoothing: grayscale;

    -webkit-font-smoothing: antialiased;

    background-color: var(--navy);

    color: var(--slate);

    font-family: var(--font-sans);

    font-size: var(--fz-xl);

    line-height: 1.3;

}



ul {

  list-style: none;

}



a {

  color: inherit;

  text-decoration: none;

}



::-webkit-scrollbar{

  width: 12px;

  background-color: var(--border-second-color);

}

::-webkit-scrollbar-track {

    background: var(--navy);

    

  background:linear-gradient(135deg,#0A192F 0,#0A192F 50%,#0A192F 50%,#0A192F 100%);  /*——Change background color of scrollbar track ——*/

  -webkit-box-shadow:inset 0,5px 0,5px 0,5px #8257e5;

  border:1px solid #8257e5;

  }

::-webkit-scrollbar-thumb{

  background-color: var(--dark-slate);

    border-radius: 10px;

    background-color: var(--dark-slate);

    border: 2px solid var(--navy);

    border-radius: 10px;

  background:rgba(255,255,255,0.1);background:linear-gradient(135deg,rgba(255,255,255,0.0) 0,#6217ed 50%,#6217ed 50%,rgba(255,255,255,0.0) 100%); /*—— Scrollbar Thumb color ——*/

  -webkit-box-shadow:inset 0,5px 0,5px 2px rgba(10,155,155,0.4);

  }



:::-webkit-scrollbar-thumb:hover {

  -webkit-box-shadow:inset 0,5px 0,5px 10px rgba(0,0,0,0.4);

  background:#c9d5ea;background:linear-gradient(135deg,rgba(255,255,255,0.0) 0,#d3416f 50%,#d3416f 50%,rgba(255,255,255,0.0) 100%); /*——Scrollbar Thumb Hover color ——*/

  }

:-webkit-scrollbar-thumb:active {

  background:#c9d5ea;

  background:linear-gradient(135deg,#6f9ded 0,#d3416f 50%,#d3416f 50%,#6f9ded 100%); /*——Scrollbar Thumb Active color ——*/

  -webkit-box-shadow:inset 0,5px 0,5px 2px rgba(0,0,0,0.4);

  }

`;
