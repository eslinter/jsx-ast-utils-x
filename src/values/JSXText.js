/**
 * Extractor function for a JSXText type value node.
 *
 * Returns self-closing element with correct name.
 *
 * @param value
 */
export default function extractValueFromJSXText(value) {
  return value.raw;
}
