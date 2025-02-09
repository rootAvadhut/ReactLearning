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