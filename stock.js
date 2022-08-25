function stocks(arr){
let stack = []
let answer = [...arr]
for(i=0;i<arr.length;i++){
    let price = arr[i]
    let span = 0
    console.log(stack,arr[i]);
    
    while(stack.lengh > 0&& stack[stack.length-1][0]>price){
        
        let [price,index] = stack.pop()
        answer[index]= i - index
        span+=1
    }
    stack.push([price,i])
    console.log(stack[stack.length-1][0]);
}

return answer

}


                              1               1
console.log(stocks([ 100,80, 60, 70, 60, 75, 85]));

var dailyTemperatures = function(temperatures) {
    let stack = []
    let output = [...temperatures]
for(i=0;i<temperatures.length;i++){
    while(stack.length && stack[stack.length-1][0]>temperatures[i]){
        let [temp,index] = stack.pop()
        output[index]=i-index
    }

    stack.push([temperatures[i],i])
}
return output
  };


  console.log(dailyTemperatures(temperatures = [73,74,75,71,69,72,76,73]));

  StockSpanner = function(arr) {
    let stack=[]
      let span = 1;
      let output = [...arr]
      for(i=0;i<arr.length;i++){
      while (stack.length > 0 && stack[stack.length-1].price <= arr[i]) {
          let popped = stack.pop();
          output[popped.span]=i-popped.span
          span += popped.span;
          
      }
    }
      stack.push({price: arr[i], span: span});
      return output;
    };
    console.log(StockSpanner([ 100,80, 60, 70, 60, 75, 85]));