console.log("----------Well come to Loops--------------")

// for(let i=0;i<4;++i){
//     console.log("Ali is writting a code.........");
// }

//To print staric *

// for(let i = 0; i < 5 ; ++i){
//     for(let j = 0; j < i ; ++j ){
//         console.log("*");
//     }
//     console.log("\n");
    
// }

//Factorial of 2 (you used any number)

// for(let i =0; i<10 ;++i){
//     let num = i * 2 ;
//     console.log(num);

// }

//break in loop

// for(let i=0; i< 10; ++i){
//     if(i==5){
//         console.log(`detected ${i}`);
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }

//continue is used in loop
for(let i=0; i< 10; ++i){
    if(i==5){
        console.log(`detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`)
}