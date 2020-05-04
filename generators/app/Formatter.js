module.exports = class Formatter {
  /*
  * @example hello-world => HELLO_WORLD
  */
  static kebabCase(val) {
    return val
      .toUpperCase()
      .replace(/-/g, '_')
  }

  /*
  * @example 'Hello-darknes-my-old-friend'; => HelloDarknesMyOldFriend
  */
  static upperCamelCase(val) {
    return val
      .split('-')
      .map(item => Formatter._upperCaseFirst(item))
      .join('')
  }

  static lowerCamelCase(val) {
    return val[0] + val
      .slice(1)
      .split('-')
      .map((item, idx) => idx > 0 ? Formatter._upperCaseFirst(item) : item)
      .join('')
  }

  static _upperCaseFirst(item) {
    return item.charAt(0).toUpperCase() + item.slice(1)
  }

  static separateWords(val) {
    return val
      .replace(/-/g, ' ')
  }

  static lowerCase(val) {
    return val.toLowerCase();
  }
}