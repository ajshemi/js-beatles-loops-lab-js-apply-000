// add solution here
var theBeatlesPlay=function(array1,array2){
  var emptyArray=[]
  for(var i=0;i<array1.length;i++){
    var str=`${array1[i]} plays ${array2[i]}`
    emptyArray.push(str)
  }
  return emptyArray
}

var johnLennonFacts=function(array1){
  var i=0
  var emptyArray=[]
  while(i<array1.length){
    var str=`${array1[i]}!!!`
    emptyArray.push(str)
    i++
  }
  return emptyArray
}

var iLoveTheBeatles=function(num){
  var emptyArray=[]
  var i=0
  while(i<num){
    emptyArray.push('I love the Beatles!')
  }
}