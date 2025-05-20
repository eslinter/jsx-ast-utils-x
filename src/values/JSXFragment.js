/**
 * Extractor function for a JSXFragment type value node.
 *
 * Returns self-closing element with correct name.
 *
 * @param value
 */
export default function extractValueFromJSXFragment(value) {
  const getValue = require('.').default;

  if (value.children.length === 0) {
    return '<></>';
  }
  return `<>${[value.children]
    .flat()
    .map(x => getValue(x))
    .join('')}</>`;
}
