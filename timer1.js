const timer = function(times){
  for(let time of times){
    if (time > 0) {
      setTimeout(() => {
        process.stdout.write('\007')
        // console.log(time)
      }, time*1000);
    }
  }
}
// console.log(process.argv.slice(2).sort())
timer(process.argv.slice(2).sort())