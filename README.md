# rufo-vscode

This is Visual Studio Code extension for formatting ruby files based on [rufo](https://github.com/asterite/rufo) gem.

### See in action

![Rufo in action](https://i.gyazo.com/580ff4071f61e07bbfd22610c3bb72a6.gif)



## Requirements

It required `rufo` gem to be installed and availble in path.

```
gem install rufo
```

### Gotchas

* It supports only the whole file formatting. Formatting a selected block of code is not supported yet.

* As the modification of file happens outside the editer using the gem, cannot use undo operation. This is a [known issue](https://github.com/Microsoft/vscode/issues/2908) with vs code and hopefully gets fixed soon.
