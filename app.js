
// var first name = " aseel "
// var last name = " abusaifan"
// var name = first name+last name
// console.log (name)

alert ("welome to web site") 

var age= prompt("what is your age? ")
age = parseInt(age)

while(age<18){
  age=prompt("you are under 18, what is your age? ")
}





var stars = prompt " how many stars do you rate webdite?")
stars = parseInt(stars)

function rating (num){
  for(var i-0;i<num;i++){
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png">')
  }
}

rating(stars)