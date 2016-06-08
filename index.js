/* fizzbuzz solution 
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.blackguycoding.co*/

function modor (){
    for(i=1;i<=100;i++){
        if(i%3 === 0 && i%5 ===0){
            console.log("FizzBuzz");
        }else if (i%3 === 0){
            console.log("Fizz");
        }else if (i%5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
modor();
