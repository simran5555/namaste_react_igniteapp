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
- dev build
- local server
- HMR hot module replacement 
- caching : faster builds
- image optimization 
- minification of file in case of production build
- bundling
- compress
- consistent hashing
- code splitting
- differential bundling
- diagnostic
- error handling
- https
- tree shaking remove unused code
- different dev and production bundles

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
- What is `npx`?
- What is difference between `dependencies vs devDependencies`?
- What is Tree Shaking?
- What is Hot Module Replacement?
- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- What is `.gitignore`? What should we add and not add into it?
- What is the difference between `package.json` and `package-lock.json` files?
- Why should I not modify `package-lock.json`?
- What is `node_modules`? Is it a good idea to push that on git?
- What is the `dist` folder?
- What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
- Read about: `^-caret` and `~-tilde`
- React about Script types in html(MDN Docs)