# ingenious-gatsby 👾 [![Netlify Status](https://api.netlify.com/api/v1/badges/9882de2b-16a4-408b-94de-a354c2cd91e7/deploy-status)](https://app.netlify.com/sites/shorttech/deploys)

ingenious-gatsby is the GatsbyJS and GraphQL-powered frontend that powers ShortTech. The site is served by [Netlify](https://www.netlify.com/).
On the backend site, ShortTech is powered by a headless [Ghost](https://ghost.org/) installation.

## Setup development environment
ingenious-gatsby is using `yarn` to manage its dependencies, as it is the recommended package. 
```
npm install -g yarn
````

Clone the GitHub repository with `git clone`.
```
git clone https://github.com/ShortTechDE/ingenious-gatsby.git
cd ingenious-gatsby
```

Install the dependencies with `yarn`.
```
yarn
```

Start the development server. You now have a local frontend set up pulling content from our backend.
```
gatsby develop
```
