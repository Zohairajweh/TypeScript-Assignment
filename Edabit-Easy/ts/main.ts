
/**
 * Bitwise Operations

 * @url https://edabit.com/challenge/vvuAkYEAArrZvmp6X
 * @url https://edabit.com/challenge/4gzDuDkompAqujpRi
 */

// Bitwise Operations
 const bitwiseAND=(n1:number,n2:number):number =>{
	return n1&n2;

 }
 console.log(bitwiseAND(7,12));
 

 const bitwiseOr=(n1: number,n2: number):number =>{
	return n1 | n2;


 }
 console.log(bitwiseOr(7,12));
 const bitwiseXor=(n1:number,n2:number):number =>{
	return n1 ^ n2;	

 }
 console.log(bitwiseXor(7,12));

//Add up the Numbers from a Single Number

 const  addUp=(num:number) =>{
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  console.log('addup',addUp(4));

  