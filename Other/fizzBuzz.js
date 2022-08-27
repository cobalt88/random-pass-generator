var n = 20;

const output = async(n) => {
  //make an array that is 'n' long and each index has a value of index + 1
      try {
        let arr1 = [];
          for (let i = 0; i < n; i++){
              arr1[i] = i + 1
            const arr2 = await arr1.map(x => {
            if (x % 3 === 0 && x % 5 === 0) {
              arr2[x - 1] = 'FizzBuzz';
            } else if (x % 3 === 0) {
              arr2[x - 1] = 'Fizz';
            } else if (x % 5 === 0) {
              arr2[x - 1] = 'buzz';
            } else {
              arr2[x - 1] = 'x';
            }
            })
          }
      } catch (err) {
        console.error(err);
      }
}

output(n);