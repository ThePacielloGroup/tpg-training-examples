#Contributing

## First, understand the structure
Before you get started, you'll want to understand how it is structured.

### General structure
* The repository root folder contains project assets such as configuration files, etc. 
* The `src` folder contains all of the source files for the examples. This is where you do your work to create or improve examples.
* The `dist` folder contains the final example files generated whenever the Grunt task is run. DO NOT modify anything in the `dist` folder. It WILL be overwritten by the Grunt task! This is by design and is not a bug.

### Global Stuff
This project contains a specific location for all global assets that can and should be used for all examples. 

* The `src/assets` folder contains all global shared assets for all of the examples. This allows the assets to have a shared library of stuff that can be shared with each.  That folder is further separated into:
  * `css` - holds CSS files
  * `images` - holds image files
  * `js` - holds JavaScript files
    * `vendor` - holds 3rd party JavaScript files
  * `sass` - holds SASS files
  
*NOTE: please don't do global CSS work in plain CSS if it can be avoided. SASS is a much better option as it allows much greater consistency and quality. You can also include or extend existing styles using SASS in a way that's much more robust than plain CSS*

### Configuration and task files
As mentioned above, the repository root folder contains project assets such as configuration files, etc. This repository makes relatively light use of a handful of Grunt tasks to ensure quality and increase efficiency. It takes care of linting of JavaScript, compiling of SASS to CSS, and copying final files into the `dist` folder for distribution.

## Installation
### Get the repo
* [Fork this Repository](https://help.github.com/articles/fork-a-repo)
* `git pull` your fork down to your local machine

### Get ready to to work
* It might be a good idea to [Set this repo as an upstream remote](https://help.github.com/articles/fork-a-repo#step-3-configure-remotes)
* Go to Terminal and run `npm install && bower install`
* Then, run `grunt`
* It should say 'Done, without errors.' right above a block that shows how long the task(s) took.

That final step is a good sanity check to ensure someone else hasn't already broken stuff you need.  If that default Grunt task fails, that means something is wrong. *If you can, please fix whatever is broken and issue a PR*

## General Guidance
Now that you're all started and ready to go, here's some general guidance on making changes and additions:

* It is good practice to create an [issue](https://github.com/ThePacielloGroup/tpg-training-examples/issues) in the main repo to discuss what you'll be doing.
* It is also good practice to [create a new branch](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging) if your changes are big (such as a new example). Its a good idea if your branch name has some similarity to the issue title or, at least, issue title.
* Make your code changes and push them to your repo.
* [Issue a pull request](https://help.github.com/articles/using-pull-requests)
* Drink beer.

*NOTE: all code in this repository must consist ONLY of HTML, CSS/ SASS, and JS. Do not use any server-side programming*

You can further be a good citizen by adding your custom JS files to the JSHint and JSCS tasks in the Grunt file.

## Creating Examples
These examples are meant to demonstrate very distinct accessibility best practices, or violations thereof. Examples in this repository should be relatively lightweight and follow the same basic convention, as described below.  Deviations, where sensible, are encouraged.

*Each example must be in its own folder.*

There is a blank example located in `src/example`. It contains an HTML file, a CSS file, and a JavaScript file. Your example isn't required to use this structure, but it exists as a jump-off point.

The `src/assets/example/example.html` file contains the preferred format for all examples and includes a handful of helpful files including:

* the fontawesome CSS file
* the global CSS file
* the example's CSS file
* the code-highlighting CSS file
* the latest jQuery library
* the latest lodash library
* the code-highlighting JS file
* the global JS file
* the example's JS file.

As stated above, these aren't *required*, but highly useful.

The HTML file itself contains the following basic structure:

* `<header>` with Paciello Group branding
* `<main>` element wrapping all content
* `<footer>` element

The `<main>` element wraps all content for the example and has a `<section>` for the example, and a `<section>` for an explanation of the example.

* Place the code for your example in the above section
* Place an explanation for your example in the bottom section.

## Building
Once you've made your changes/ created your examples, run the Grunt tasks. In terminal, just enter: `grunt`.  This will run all of the Grunt tasks, including making a deployment-ready copy of everything and placing it into the `/dist/` folder.  You can now upload/ deploy the contents of that folder anywhere you like.

If the Grunt task fails, you *must* fix whatever is causing the failure before you attempt to isue a Pull Request! No PR will be accepted if it doesn't run the Grunt tasks successfully.

### Hints
* The global CSS file is generated by Grunt and SASS. Grunt combines the `.scss` files into one file and then SASS compiles it to CSS. Nearly all presentation is taken care of for you if you follow the basic structure above.
* Layout can be handled by the basic grid framework in the `grid.scss` file.
* If you need to customize the appearance of something, explore the possibility that some or all of what you're after might already exist in `helper_classes.scss` or `mixins.scss`
* For a glimpse at what an accessible, valid, example of *most* styles, go to `src/theme-test/test.html`

