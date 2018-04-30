function mult(firstnum1,secondnum1){ 
    let firstnum=firstnum1.split("");
    let secondnum=secondnum1.split("");
    let bigarr = [];
    let arr = [];
    let carry = 0;
   
    for (let i=secondnum.length-1;i>=0;i--){
      for(let j=firstnum.length-1;j>=0;j-- ){
        let product = 0;
        if(j!==0){
        product = secondnum[i]*firstnum[j];
        product = product+Number(carry);
        product = product.toString().split("");
        arr.unshift(product.pop());  
        carry = product.join("");
        product = 0;  
        }
       else  {
         product = secondnum[i]*firstnum[j];
         arr.unshift(product+Number(carry));
         let pusher  = arr.join("");
         for(k=0;k<secondnum.length-1-i;k++){
           pusher=pusher+"0";
         }
        bigarr.unshift(pusher)
         arr=[];
         carry=0;
         
       }
        
        
        
      }
      
  
    }
    
  bigarr = adder(bigarr)
    console.log(bigarr)
  return bigarr
  }
  //mult("7823345","333");      
  
  
   //findLength returns the length of the longest element in an array of strings
  function findLength(arr){
    let biggest = Math.max(...(arr.map(el=>el.length)))
    return biggest
  }
  
  
  
  //same makes all the strings the same length, number of digits by adding 00
  function same(arr){
    let newarr=[];
    let biggest=findLength(arr);
    
    for (i of arr){
      let j = biggest - i.length;
      let newi=i;
        while(j>0){
       newi ="0"+newi;
          j--
      }
      newarr.push(newi);
  
  
  }
      return newarr
  }
  
  
  //console.log(same(["12789","1","879"]))
  
  
  function adder(arr){
    let finalarr = [];
    let temparr = [];
    let newarr = same(arr);
    let cols = findLength(newarr);
    let carry  = 0;
    for(let i=cols-1; i>=0;i--){
      let product = 0;
      if(i!==0){
      for(let j of newarr){
        product = product + Number(j[i]);  
                          }
        product = product+Number(carry); 
        product = product.toString().split("");
      finalarr.unshift(product.pop());
      carry = product.join("");
      }
      else{ for(let j of newarr){product = product+Number(j[i])}; product=product+Number(carry); 
          product = product.toString().split("");
          finalarr.unshift(product.join(""))}
    }
    finalarr=finalarr.join("");
    console.log(finalarr);
    return finalarr
    
  }
  
  
  
  
  
  function minus(...args){
    let newargs = same(args);
    let final=[];
    let sign="";
    let carry = 0;
    let product = 0;
    let top,bottom;
     if(newargs[0]>=newargs[1]){
       top= newargs[0];
       bottom = newargs[1];
        }
     else{
        bottom= newargs[0];
        top = newargs[1];
        sign="-"        
        }
      for(let i = newargs[0].length-1;i>=0;i--){
        let topnum = Number(top[i]);
        let botnum = Number(bottom[i]);
        if(carry==1){topnum=topnum-1};
         if(topnum<botnum){
         product=(topnum+10)-botnum;
         carry=1;    
         }
        else{
          product = topnum-botnum;
          carry=0}
        final.unshift(product) ;
        
      }
      
    final.unshift(sign);
    final = final.join("")
    console.log(final)
    return final
    
  }