/**
 * Extractor function for an UpdateExpression type value node. An update
 * expression is an expression with an update operator. For example, foo++ will
 * evaluate to foo + 1.
 *
 * @param value Value - AST Value object with type `UpdateExpression`
 * @returns - The extracted value converted to correct type.
 */
export default function extractValueFromUpdateExpression(value) {
  const getValue = require('.').default;
  const { operator, argument, prefix } = value;

  let val = getValue(argument);

  switch (operator) {
    case '++': {
      return prefix ? ++val : val++;
    }
    case '--': {
      return prefix ? --val : val--;
    }
    default: {
      return;
    }
  }
}
