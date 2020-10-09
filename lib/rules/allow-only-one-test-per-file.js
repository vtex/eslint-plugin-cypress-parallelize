/**
 * @fileoverview Allow only one it calls per file so is easier to parallelize their use
 * @author Guilherme Bruzzi
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        'Allow only one it call per file so is easier to parallelize their use',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [],
  },

  create: function (context) {
    let itCount = 0

    return {
      CallExpression: function reportUnwantedName(node) {
        var functionName = node.callee.name

        if (functionName === 'it') {
          itCount++
        }

        if (itCount >= 2) {
          context.report({
            node: node,
            message:
              "You should only have one test case per test file so that Cypress runner can parallelize it's runs better (make another describe / it pair on another file)",
          })
        }
      },
    }
  },
}
