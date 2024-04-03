function wordCounter(sentence) {
    let length = 0;
    let word = 0;
    let vowel = 0;
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        length++;
        if (char === ' ') {
            word++;
        }
        if ('aeiouAEIOU'.includes(char)) {
            vowel++;
        }
    }
    word++;
    return { length, word, vowel };
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; 
  
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; 
        j--;
      }
      arr[j + 1] = key; 
    }
  
    return arr;
}