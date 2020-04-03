
/**
 * Bitwise Operations

 * @url https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
 * @url https://edabit.com/challenge/3jzycf6fcgwZbvpcf
 */

// Array of Multiples

const  arrayOfMultiples =(num: number, length: number):any => {
  let arr = [];
for (let i = 1; i <= length; i++)
  {
    arr.push(i*num);
  }
return arr;
}

console.log(arrayOfMultiples(7,5));


// Remove Trailing and Leading Zeros



const  removeLeadingTrailing=(n: number)=> {

	return Number(n).toString();
}
console.log(removeLeadingTrailing(230.000));
