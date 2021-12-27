Just adding "require" it executes the code, but without a reference, the log will fail, because the name is not referred.
All Modules has their own Scope.
For that, we need to export all context from utils to outside world.

1. install the validator.js module
   ```
   $ npm i validator@10.8.0
   ```

- it updates package.json by adding dependency
- it creates package-lock.json (extra info making npm a bit faster and secure)
- it creates node_modules directory with the libraries

2. Extra info in package-lock.json if we were to install the library again, and it's maintained by npm :

- "version": "10.8.0", --> exact version we installed
- "resolved": "http//re", --> where it was fetched
- "integrity": "sha52-mXX --> sha# making sure we are getting the exact code

3. In case we delete node_modules, then we can install it again with the package.json and package-lock.json by using the command:

   ```
   $ npm install
   ```

4. For ES6 we could use:
   ```js
   import validator from "validator";
   ```

New module: [Chalk](https://www.npmjs.com/package/chalk) - Customize how text gets printed to the console.

### Nodemon

Run:

```
$ npm install nodemon@1.18.5 -g
```

The **_-g_** flag is short for global, and it will install the module globally instead. We won't see nodemon as a dependency in **_package.json_**. It's not something that we would ever required in our project or try to use, instead is a brand new command from the terminal.

Run:

```
$ nodemon app.js
```
