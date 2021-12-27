## Arguments

---

When running **node app.js** we can add argumetns after it. e.g.

```
$ node app.js Gino
```

On the process Global variable (for node.js env).

```
console.log(process.argv);
```

### YARGS - utility to parse optsrings

```
npm i yargs@12.0.2
```

In code:

```
console.log(yargs.argv);
```

In terminal

```
$ node app.js add --title="my Title"
{ _: [ 'add' ], title: 'my Title', '$0': 'app.js' }
```

```
$ node app.js --help
Options:
   --help    Show help [boolean]
   --version Show version number [boolean]
```
