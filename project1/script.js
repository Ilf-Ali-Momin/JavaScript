const courses = [
  {
     name: "Complete ReactJS Course",
     price : "5",
  },
  {
     name: "Complete Angular Course",
     price : "7",
  },
  {
     name: "Complete Solidity Course",
     price : "8",
  },
  {
     name: "Complete C++ Course",
     price : "9",
  },
];

function generateLIST(){
  const ul = document.querySelector(".list-group")
  courses.forEach(courses =>{ 
     const li = document.createElement("li")
     li.classList.add("list-group-item")

     const name = document.createTextNode(course.name)
     li.appendChild(name)

     const span = document.createElement("span")
     span.classList.add("float-right")
     const price = document.createTextNode("$" + course.price)
     span.appendChild(price)

     li.appendChild(span)
     ul.appendChild(li)
  })
}

generateLIST();