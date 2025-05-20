/**
 * Extractor function for an ArrayExpression type value node. An array
 * expression is an expression with [] syntax.
 *
 * @param value
 * @returns - An array of the extracted elements.
 */
export default function extractValueFromArrayExpression(value) {
  const getValue = require('.').default;
  return value.elements.map(element => {
    if (element === null) {
      return;
    }
    return getValue(element);
  });
}
