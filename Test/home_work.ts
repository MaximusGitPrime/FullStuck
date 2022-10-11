// //--------------------------------1-----------------------

// function printFromZero(value:number){
//        if (value == -1){
//            return
//        }
//        //console.log(value); // from 10 to 0
    
//        printFromZero(value - 1)
//        console.log(value); // from 0 to 10
    
//      }
//      printFromZero(10)

// //--------------------------------2-----------------------

// function printFromNumberTu(start, end){
//     if(start == end + 1){
//         return
//     }
//     console.log(start);
    
//     printFromNumberTu(start + 1 , end)
    
// }
// printFromNumberTu(1,10)

// //--------------------------------3-----------------------

// function printCharNtimes(value:string, num:number){
//     if(num == 0){
//         return
//     }
//     console.log(value);
    
//     printCharNtimes(value, num -1)
// }
//  printCharNtimes("@",5)

//--------------------------------4-----------------------

// let arr = [7,3,5,2,4,1,6]



// function bubbleSort(arr, curr) {
//   if(curr == arr.length) 
//   return 
  
  
//   for (let i = 0; i < arr.length; i++) { 
//       if(arr[i] > arr [i+1]){
//       let temp = arr[i];
//       arr[i] = arr[i+1];    
//       arr[i+1] = temp;
//     }
// }
// return bubbleSort(arr, curr +1); 
      


// }
//       console.log(bubbleSort(arr, 0));

//--------------------------------5-----------------------
let inst=  [3, -12, -5, -9, 6, -7, -15, -2, -1, -18, 24 ]
let posNum = 0

function countPositiveNumbersInArray(_arra, _length) {
    if(_length  == -1){ 
        console.log(posNum)
        return
        }
   
    if (_arra[_length] > 0){
        //console.log(_arra[_length]); //to see if i got the positive numbers
        //console.log(_length); // to see if i got correct lenght
        //console.log("WoW" ); // to see where am i in steps
        posNum += 1    //count the number of positive numbers
        countPositiveNumbersInArray(_arra, _length-1)
    }
        
    else{
        //console.log("next step");
        countPositiveNumbersInArray(_arra, _length-1)
    }
    
}
    
console.log(countPositiveNumbersInArray(inst, inst.length -1));



    
    
    
        
        
    
        
        
        
        


        
        

        
        
        
       
        
    
    
        
        



    


// let sum = 0
// for(let i = 0; i < inst.length; i++){
//     if (inst[i] > 0){
//         sum +=1
        
//     }
    
    
// }
// console.log(sum);

    
    
    


     
  
   
    
    
    
    

//--------------------------------5-----------------------


