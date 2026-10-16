/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((item)=>{
    if(item.profession==="developer"){
      console.log(`Id:${item.id}, Name: ${item.name}, Age: ${item.age},Profession: ${item.profession}`);
    }
  })
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
     if(item.profession==="developer"){
     console.log(`Id:${item.id}, Name: ${item.name}, Age: ${item.age},Profession: ${item.profession}`);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", profession:"intern"})

  arr.forEach((item) => {
  console.log(`Id:${item.id}, Name: ${item.name}, Age: ${item.age},Profession: ${item.profession}`);
});
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter((item)=>{
      return item.profession !== "admin"
  })

 arr.forEach((item) => {
  console.log(`Id:${item.id}, Name: ${item.name}, Age: ${item.age},Profession: ${item.profession}`);
});
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
  { id: 4, name: "sam", age: "21", profession: "developer" },
  { id: 5, name: "riya", age: "22", profession: "admin" },
  { id: 6, name: "alex", age: "25", profession: "designer" }
];

let newArr = arr.concat(arr2);

newArr.forEach((item) => {
 console.log(`Id:${item.id}, Name: ${item.name}, Age: ${item.age},Profession: ${item.profession}`);
});

}
