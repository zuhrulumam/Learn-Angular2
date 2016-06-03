import {IMyInterface} from './IMyInterface'

let myobj : IMyInterface = {
    id : 1,
    name: "Umam",
    method()  { console.log("lalala");},
    methodWithReturn(){ return 2;},
    sum(numbers){
        return numbers.reduce((a,b)=>{return a + b});
    },
};

let sum = myobj.sum([1,2,3]);