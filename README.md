# react-typeform-rating
Typeform like rating component. (unofficial)



## How to try demo Started

Clone repo

````
git clone https://github.com/rubbby/create-react-library.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Library files

All library files are located inside `src/lib`  

## How to install npm package in you project?

`npm install react-typeform-rating`

After this include `demo/App.css` in your App
`import App.css`

If you are using font awesome like I do in demo, you can copy related files `public/css/fontawesome.css` and `public/social/`. The other option is bootstrap `glyphycon`.

Usage:
````
<TypeformRating 
				name="name1"  //mandatory, string
				value={0}     //initial value for stars, number, default 0
				starCount={5}  //number of starts, number, default 5
				onChange={this.onChange} // call back to get rating object {name: 'name1', rating: <user-selected-rating> }
				halfStarSelection={false} //to allow half star selection, boolean, default false
				keyPressed={this.state["name1"].key} //keyCode of keypressed, you can use any key binding library, demo uses react-keydown
				emptyStar="fa fa-3x fa-star-o" //CSS class for showing empty stars
				selectedStar="fa fa-3x fa-star" //CSS class for showing filled/selected star
			/>
````
