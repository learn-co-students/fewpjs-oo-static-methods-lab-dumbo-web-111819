class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }
  static titleize(string) {
    let wordsArray = string.split(" ")
    let newArray = []
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    for (let i = 0; i < wordsArray.length; i++) {
      if (i === 0) {
        newArray.push(this.capitalize(wordsArray[i]))
      } else if (exceptions.includes(wordsArray[i])) {
        newArray.push(wordsArray[i])
      } else {
        newArray.push(this.capitalize(wordsArray[i]))
      }
    }
    return newArray.join(' ')
  }
}
