# DAY 02

->nested dependancies are called as transinit dependancies.
->^ this means it always update packages
"node_modules/@babel/code-frame": {
      "version": "7.26.2", 
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.25.9",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.0.0"
      },
      "engines": {
        "node": ">=6.9.0"}

->version mean local version
->integrity it create hash which contain hash which is present in local and it make sure the deployment version may conatin same version as local
->dev it indicate that it is dev dependancies 
->dependencies means it is required packages for this dependancies 
=========================================================================================================
*package-lock* it contain used dependacies which is present in local and whenver we push our code to push github that it will recreate node-packges therefore we don't need to push node-modules to use this just just use npm install that will goto package-lock and install all dependacies which are present there

npx -> excute packeg
npx parcel index.html -> 1st it build application and it will excute index.html to the local server 
->don't use CDN link it is not good practice:
1)order to use this we have to go to link which can future may change because of version update
2)it is costly operation which involes network call where it uses internet always and it always access from that CDN link
good practice install locally **npm install react and npm install react-dom**

# error
- TypeError: (0 , _reactDomDefault.default).createRoot is not a function =>solution import ReactDOM from "react-dom/client"; >The error "TypeError: (0 , _reactDomDefault.default).createRoot is not a function" usually occurs because you're using an outdated version of ReactDOM that doesn't support createRoot, or you've imported react-dom incorrectly.
normal js script there no import that why when use
# error=
- Browser scripts cannot have imports or exports. =>this happend because our js script don't have import keyword so to reslove this we need to set type in script tag which is module **<script type="module" src="./App.js"></script>**
# Parcel:
- Dev bulid
- local Server 
- HMR =>hot module Replacement => it will automatically refresh webpage
- File Watching Algo -writeen in C++
- Caching -Faster Builds =>store  cach in .parcel-cache
- Images Optimization
- Minification
- Bundleing
- Compressing
- Consistent Hashing 
- code splitting
- Differential Bundling => that mean me our app will run on all browser or old browser
- Good error and better suggestions
- host app on http
- goto parceljs.org read doc to know about 
- tree shaking - remove unused code 
- Different dev and prod dundles for dev npx parcel index.html and for prod npx parcel build index.html
# npx parcel build .\index.html 
- # error 
    - @parcel/namer-default: Target "main" declares an output file path of "index.js" which does not match the compiled bundle type "html".
- # reslove error
    - goto packages.json and remove " "main": "index.js","
- i will create production read code 
# we add .parcel-cache dist into .gitignore
    - our local code pushes to github alog with package.json and package-lock.json 
    - when we want to test our app on server that time we use npm install
    - this command will create node-module same as local same method apply to npx parcel index.html
 
 # browerlist ->
    - this module help to make app compatiable to browser 
    - to do this goto package.json and add browserlist: ["last 2 chrom version" ] pass browser in array 
    - it will configure to work on browsers
    - goto browserlist.dev
    - we can provide contry specific browser

# IN DAY 02 WE LEARN ABOUT NPM, GITIGNORE, PARCEL AND BROWERLIST ,WE HAVE CREATE REACT APP

# DAY 03
n