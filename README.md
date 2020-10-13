# eslint-plugin-cypress-parallelize

Allow only one `describe` and `it` calls per file so is easier to parallelize their use.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cypress-parallelize`:

```
$ npm install eslint-plugin-cypress-parallelize --save-dev
```


## Usage

This plugin and it's rule were designed to be included in a file at cypress/integration/.eslintrc

This file should look like this:

```json
{
    "plugins": [
        "cypress-parallelize"
    ],
    "rules": {
        "cypress-parallelize/allow-only-one-test-per-file": 2
    }
}
```

## Supported Rules

* allow-only-one-test-per-file: Currently its only rule that alert when you use multiple `describe`s or `it`s on a test file





