class Formatter {
  //add static methods here

    static capitalize(str) {
      return `${str[0].toUpperCase()}${str.slice(1)}`
		// console.log('My method is static!');
    }

    static sanitize(str) {
    // console.log('My method is static!');
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');

    }
    static titleize(arr) {
      let testArr=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      arr=arr.slice().split(' ')
      let newArr=[this.capitalize(arr[0])]
      for(let i=1;i<arr.length;i++){
        testArr.indexOf(arr[i])===-1 ? newArr.push(this.capitalize(arr[i])) : newArr.push(arr[i])
      }
      // console.log(newArr.join(' ')) 
      return newArr.join(' ')
    }
}