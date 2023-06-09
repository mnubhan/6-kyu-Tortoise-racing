const race = (v1,v2,g) =>{
  if(v2>v1){
    let arr = []
    let speedDif = v2 - v1
    let hours = g/speedDif
    let minutes = Math.abs((Math.floor(hours)-hours)*60)
    let seconds = Math.abs((Math.floor(minutes)-minutes)*60)
    arr.push(Math.floor(hours))
    arr.push(Math.floor(minutes))
    arr.push(Math.floor(seconds))
    return arr
  }
  else{
    return null
  }
}
