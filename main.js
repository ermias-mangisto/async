function getPromise(par){
return myPromise= new Promise((resolve,reject)=>{
    if(par){
    resolve("yes")}
    else{
        reject("no")
    }
})}
let par=true;
async function asyncPromise(par){
   try {
     return  await getPromise(par)
   } 
   catch (error) {
      return error;
   } 
}
asyncPromise(par)
.then((res)=>{console.log(res);})
.catch((rej)=>{console.log(rej);})






// let counter=0;
// let wins=0;
// let num=Math.round(Math.random()*10);;
// function secondPromise(num,input){
//     counter++
//     return new Promise((resolve,reject)=>{
// if(num==input){
//     resolve(`${num} nice work do it again!`)
//     wins++
// }
// else{
//     reject("you lost try again")
// }
//     })
    
// }
// btn.addEventListener("click",()=>{
// secondPromise(num,userNum.value)
// .then((res)=>{result.innerHTML=res})
// .catch((res)=>{result.innerHTML=res})
// .finally(()=>{tries.innerHTML=`number of runs:${counter} <br> number of wins:${wins}` })
//  num=Math.round(Math.random()*10);
 
// })
///////////1///////////////////
function namePromise(userName){
    return new Promise((resolve,reject)=>{
        if(userName=="ermi"){
            resolve("same")
        }
        else{
            reject("diffrent")
        }
    })
}

async function asyncNames(userName){
    try{
       return await namePromise(userName)
    }
    catch(err){
        return err
    }
}

asyncNames("ermi")
.then((res)=>{console.log(res);})
.catch((rej)=>{console.log(rej);})
/////////////////////2///////////
 function numsPromise(num1,num2){
     return new Promise((resolve,reject)=>{
         if(num1==num2){
         resolve("same numbers")
        }
         else{
             reject("differnt numbers")
         }
     })
 }
async function asyncNums(num1,num2){
try{
    return await numsPromise(num1,num2)
}
catch(err){
    return err
}
}
asyncNums(3,4)
.then((res)=>{console.log(res);})
.catch((rej)=>{console.log(rej);})
/////////////////3////////////////////

function stringPromise(str){
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
        if(str.length>6){
            resolve ("longer then 6")
        }
        else{
         reject("shorter then 6")
        }
      }, 4000);
    })
  
   
}
function loading(div,link){
     return  div.innerHTML=link
}

async function asyncString(str){
    try{
        loading(answer,`<img src="loading.gif" width=140px height=100px>`)
        return await stringPromise(str)
    }
    catch(error){
return error
    }
}
strBtn.addEventListener("click",()=>{
asyncString(userText.value)
.then((res)=>{answer.innerHTML= res})
.catch((rej)=>{answer.innerHTML= rej})


})
/////////////////////////////////////////
class Dog{
name;
age;
breed;
 constructor(Name,Age,Breed){
     this.name=Name;
     this.age=Age;
     this.breed=Breed;
 }
}
let arrayOfDogs=[new Dog("killer",13,"bulldog"),new Dog("jess",1,"poodle"),new Dog("sunny",3,"golden retriever")]
console.log(arrayOfDogs);

function dogPromise(array){
     
         return new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                 let max=array[0]
     for(item of array){
         if(max.age<item.age){
             max=item
         }}     
     if(array){
            resolve(max.name)
            }
            else{
                reject("no")
            }
         },5000)    
         })
  
}
async function asyncDogs(array){
    try{
        loading(dogHolder,`<img src="dog.gif" width=100px height=100px>`)
        return await dogPromise(array)
    }
    catch(error){
return error
    }
}
dogBtn.addEventListener("click",()=>{
asyncDogs(arrayOfDogs)
.then((res)=>{dogHolder.innerHTML=res})
.catch((rej)=>{console.log(rej);})
})
/////////////////////////////////
let kidMap=new Map(
    [["avi",12],
     ["ben",6],
     ["saen",7],
     ["leo",10],
     ["beni",13],
     ["david",9],
     ["haim",5],
    ])
console.log(kidMap);
kidMap.set("dave",9)
console.log(kidMap.get("dave"));

for([key,value]of kidMap){
    console.log(key);
}
for([key,value]of kidMap){
    console.log(value);
}
for([key,value]of kidMap){
   if(key.length>4){
       console.log(key);
   }
}
//////////////////////////////////////
let aprtmentsMap=new Map([["1",4],["2",9],["3",7],["4",1]])

function aprtmentPromise(Map){
    
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
           let max=0;
    let high;
    for([key,value]of Map){
        if(max<value){
            max=value;
            high=key;
        }}          
    if(Map){
           resolve(`<tr><td> aprtment:${high}</td></tr><tr><td>people:${max}</td></tr>`)
           }
           else{
               reject("no")
           }
        },3000)    
        })
 
}
async function asyncAprtment(Map){
   try{
    loading(aprHolder,`<img src="loading.gif" width=140px height=100px>`)
       return await  aprtmentPromise(Map)
   }
   catch(error){
return error
   }
}

aprBtn.addEventListener("click",()=>{
     asyncAprtment(aprtmentsMap)
    .then((res)=>{aprHolder.innerHTML=`<table> ${res}</table>`})
    .catch((rej)=>{console.log(rej);})
    })


   