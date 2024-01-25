# namaste_react_igniteapp

# how to make production build
# npm init
# answer questions 
# if no questions do - npm init -y

# install dependencies
# npm install -d PARCEL //used to bundle the files (like web pack in react)
# there are multiple dependencies inside node modules i.e each package requires more packages leading to TRANSITIVE DEPENDENCY
# npx parcel index.html

# npm install react and react-dom

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