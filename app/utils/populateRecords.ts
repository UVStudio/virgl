export const populateRecords = (setTempArray: (item: string[]) => void) => {
  let array: string[] = [];
  let secondArray: string[] = [];
  for (const key in localStorage) {
    if (key.indexOf('virgl-weather') !== -1) {
      array.push(key + localStorage[key]);
    }
  }

  array.sort();
  for (let i = array.length - 1; i >= array.length - 5; i--) {
    if (array[i]) {
      array[i] = array[i].substring(27);
    }
    secondArray.push(array[i]);
  }
  setTempArray(secondArray);
};
