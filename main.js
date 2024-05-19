function chooseBestSum(t, k, ls) {
    ls = ls.sort()
    
    if (ls.length < k) return null
    
    let answer = -1
    
    function loop(position = 0, side = 0, store = []){
      if (store.length == k)
        {
          let sum = store.reduce((total, x) => total + x, 0)
          
          if (sum <= t && sum > answer)
            {   
              answer = sum
            }
        }
      else{
        for (let i = position; i < ls.length - k + 1 + side; i++){
          store.push(ls[i])
          loop(i + 1, side + 1, store)
          store.pop()
        }
      }
    }
    
    loop()
    
  return answer == -1 ? null : answer
  }