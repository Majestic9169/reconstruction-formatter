<!-- <p align="center"> -->
<!--   <a href="" rel="noopener"> -->
<!--  <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a> -->
<!-- </p> -->

<h3 align="center">Reconstruction Formatter</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/Majestic9169/reconstruction-formatter.svg)](https://github.com/Majestic9169/reconstruction-formatter/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Majestic9169/reconstruction-formatter.svg)](https://github.com/Majestic9169/reconstruction-formatter/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
    View and share your framecounted solve reconstruction easily!
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Project Structure](#getting_started)
<!-- - [Deployment](#deployment) -->
<!-- - [Usage](#usage) -->
<!-- - [Built Using](#built_using) -->
- [TODO](../TODO.md)
<!-- - [Contributing](../CONTRIBUTING.md) -->
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Certain speedcubers work tirelessly to framecount the fastest solves and compile
this data for the benefit of the speedcubing community. However I found that
there was no tool to view the data besides either uploading it straight to [reco.nz](https://reco.nz/solve/index)
or using a [spreadsheet](https://docs.google.com/spreadsheets/d/1pcjfR9wVz-_-oHm6vI88px4bRUT6ajEYanEVUSzt6cY/edit?gid=1709714197#gid=1709714197)

I often found myself wanting to reconstruct and framecount solves and view/share
the data I saw, however the solves I wanted to reconstruct were often not fast enough
to be uploaded to the db, so I decided to make my own formatting tool.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
Make sure you have the `pnpm` package manager installed. 

```
sudo pacman -S pnpm
```

### Installing
Install all dependencies first

```
pnpm install
```

then run the development server :)

```
pnpm run dev
```

<!-- End with an example of getting some data out of the system or using it for a little demo. -->
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ## 🔧 Running the tests <a name = "tests"></a> -->
<!-- Explain how to run the automated tests for this system. -->
<!---->
<!-- ### Break down into end to end tests -->
<!-- Explain what these tests test and why -->
<!---->
<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->
<!---->
<!-- ### And coding style tests -->
<!-- Explain what these tests test and why -->
<!---->
<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->
<!---->
<!-- ## 🎈 Usage <a name="usage"></a> -->
<!-- Add notes about how to use the system. -->
<!---->
<!-- ## 🚀 Deployment <a name = "deployment"></a> -->
<!-- Add additional notes about how to deploy this on a live system. -->
<!---->
<!-- ## ⛏️ Built Using <a name = "built_using"></a> -->
<!-- - [MongoDB](https://www.mongodb.com/) - Database -->
<!-- - [Express](https://expressjs.com/) - Server Framework -->
<!-- - [VueJs](https://vuejs.org/) - Web Framework -->
<!-- - [NodeJs](https://nodejs.org/en/) - Server Environment -->

## 🏁 Project Structure <a name = "project_structure"></a>

### File Structure

```
.
├── public
└── src
   ├── assets
   ├── components
   ├── data
   ├── styles
   ├── utils
   ├── pages
   ├── constants.ts
   └── App.tsx
```

- `public`: Contains public files such as `index.html`.
- `src`: Contains source files (JS, SCSS, assets, etc.)
  - `assets`: Contains assets used in the source, such as images and icons.
  - `components`: Contains reusable react components.
  - `data`: Contains raw data.
  - `styles`: Contains all stylesheets (SCSS).
  - `utils`: Contains commonly used util functions.
  - `pages`: Contains views for each of the pages.
  - `constants.ts`: Contains globally used constants.
  - `App.tsx`: Contains the top-level `App` component.

### Libraries/Frameworks Used

- [React](https://reactjs.dev)
- And [many more](./package.json).
<p align="right">(<a href="#top">back to top</a>)</p>

## TODO

- [ ] State Management with Redux
  - this is important because
    - need to be able to calculate averages and stuff, and don't want to deal with 
      passsing state around
    - want to learn redux
- [ ] Make report with react-pdf
  - options for detailed/simple/critique etc. i.e. multiple templates
- [ ] update documentation with proper input format
- [ ] database integrations eventually?

## ✍️ Authors <a name = "authors"></a>
- [@Majestic9169](https://github.com/Majestic9169) - Idea & Initial work

<!-- See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project. -->
<p align="right">(<a href="#top">back to top</a>)</p>

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- README template inspired by [The-Documentation-Compendium](https://github.com/race2infinity/The-Documentation-Compendium/blob/master/en/README_TEMPLATES/Standard.md)
and [@kossiitkgp](https://github.com/kossiitkgp/KWoC-Frontend/blob/truth-redefined-again/README.md)
- Many thanks to Stewy and all other reconstructors for their tireless work
<!-- - References -->
<p align="right">(<a href="#top">back to top</a>)</p>

