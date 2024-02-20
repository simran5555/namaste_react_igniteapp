# namaste_react_igniteapp

# how to an optimized build (using parcel)
- npm init
- answer questions 
- if you dont want questions do - npm init -y

# install dependencies
- npm install -d PARCEL //used to bundle the files (like web pack in react)
- there are multiple dependencies inside node modules i.e each package requires more packages leading to TRANSITIVE DEPENDENCY
- npx parcel index.html // executes the package to ignite the app on a localhost:1234

# npm install react and react-dom
-npm i react
-npm i react-dom

# parcel  : read their document
- zero config
- lazy dev build //defer building files until they are requested in the browser.
- local server
- multi-core architecture
- HMR hot module replacement 
- reliable caching : faster builds
- image optimization 
- minification of file in case of production build
- bundling
- compress
- consistent hashing for long term browser caching
- code splitting
- differential bundling
- diagnostic
- error handling
- https
- transpilation : process of converting a language into an equivalent version of the same language //compatible with older browsers
- tree shaking remove unused code
- different dev and production bundles
- libraries : build libraries for multiple targets a once

# production build 
- npx parcel build index.html
(will give error because of the app.js in your package.json so remove the starting point object key)

# dist folder
- parcel generates development build in here 

# parcel-cache
- keeps hmr

# make app compatible for older browser
- browsers-list node package

## Theory :

- What is `npm`?
- What is `Parcel/Webpack`? Why do we need it?
- Why is `.parcel-cache`?
- What is `npx`? - executes packages
- What is difference between `dependencies vs devDependencies`? - devDependencies only req during development example - jest, babel and dependencies are required during runtime as well example - bootstrap, redux
- What is Tree Shaking? - In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used
- What is Hot Module Replacement? - any change when saved is reflected on the site right away you dont need to refresh the site
- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- What is `.gitignore`? - What should we add and not add into it? node-modules are a big package which can be replicated easily by doing npm i if the packages are mentioned in the package.json; the files added in gitignore are ignored by the git on commit
- What is the difference between `package.json` and `package-lock.json` files?
- Why should I not modify `package-lock.json`?
- What is `node_modules`? Is it a good idea to push that on git?
- What is the `dist` folder? - bundled up js or html files
- What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
- Read about: `^-caret` and `~-tilde` caret automatically does the micro updates of the packages ie ^28.7.0 will be updated to ^28.8.0 or ^28.7.5 and tilde does the macro update ie ~28.7.0 will updated to ~29.0.0
- React about Script types in html(MDN Docs)