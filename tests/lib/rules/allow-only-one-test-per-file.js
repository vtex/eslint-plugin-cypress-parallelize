/**
 * @fileoverview Allow only one describe and it calls per file so is easier to parallelize their use
 * @author Guilherme Bruzzi
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/allow-only-one-test-per-file')

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const myConfig = {
  extends: [],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },

  ecmaFeatures: {
    arrowFunctions: true,
  },
}
RuleTester.setDefaultConfig(myConfig)
const ruleTester = new RuleTester()

ruleTester.run('allow-only-one-test-per-file', rule, {
  valid: [
    {
      code:
        "describe('describe 1', () => { it('test 1', () => { /* test body */ }) });",
    },
  ],

  invalid: [
    {
      code:
        "describe('describe 1', () => { it('test 1', () => { /* test body */ }); it('test 2', () => { /* test body */ }) });",
      errors: [
        {
          message:
            "You should only have one test case per test file so that Cypress runner can parallelize it's runs better (make another describe / it pair on another file)",
          type: 'CallExpression',
        },
      ],
    },
    {
      code:
        "describe('describe 1', () => { it('test 1', () => { /* test body */ }) }); describe('describe 2', () => { it('test 2', () => { /* test body */ }) })",
      errors: [
        {
          message:
            "You should only have one test case per test file so that Cypress runner can parallelize it's runs better (make another describe / it pair on another file)",
          type: 'CallExpression',
        },
      ],
    },
  ],
})
