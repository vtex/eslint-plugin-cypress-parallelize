# Allow only one describe and it calls per file so is easier to parallelize their use (allow-only-one-test-per-file)

Cypress runs in CIs can parallelize test files by dividing them in multiple machines. To better achieve performance on that, you should have only one test per test file.


## Rule Details

This rule aims to better parallelize your Cypress runs by having one test flow per file

Examples of **incorrect** code for this rule:

```js

describe('describe 1', () => {
    it('test 1', () => { expect(true).to.true})
    it('test 2', () => { expect(true).to.true})
})

```
```js

describe('describe 1', () => {
    it('test 1', () => { expect(true).to.true})
})

describe('describe 2', () => {
    it('test 2', () => { expect(true).to.true})
})

```

Examples of **correct** code for this rule:

```js

describe('describe 1', () => {
    it('test 1', () => { expect(true).to.true})
})

```

## When Not To Use It

When you don't want to parallelize your Cypress runs with necessarily one test per test file
