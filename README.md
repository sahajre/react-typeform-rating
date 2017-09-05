# react-typeform-rating
Typeform like rating component (unofficial).

## Try demo 

Clone repo

````
git clone https://github.com/sahajRe/react-typeform-rating.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to install `react-typeform-rating` npm package in your project?

`npm install react-typeform-rating` or `yarn add react-typeform-rating`

Then, include `demo/App.css` in your App:

`import <path-to-app-css>/App.css`

If you are using font awesome, like I do in the demo, you can copy related files `public/css/fontawesome.css` and `public/social/` and include the CSS path in 'public/index.html'. Alternatively, you may use Bootstrap `glyphycon`.

Usage:
````
<TypeformRating 
    name="name1"   // mandatory, string
    starCount={5}  // mandatory, number of starts, number, default 5
    value={0}      // initial value for stars, number, default 0
    onChange={this.onChange}  // callback to get rating object {name: 'name1', rating: <user-selected-rating> }
    halfStarSelection={false} // to allow half star selection, boolean, default false
    keyPressed={this.state["name1"].key} // keyCode of key pressed, you can use any key binding library, the demo uses react-keydown
    emptyStar="fa fa-3x fa-star-o" // CSS class for showing empty stars
    selectedStar="fa fa-3x fa-star" // CSS class for showing filled/selected star
/>
````

## Contributions

Suggestions, issues, feature and pull requests are most welcomed.
