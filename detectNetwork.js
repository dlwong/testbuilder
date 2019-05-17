var detectNetwork = function(cardNumber) {
    var digitArray = cardNumber.toString().split('')
    
    if(['34', '37'].indexOf(cardNumber.substring(0,2))>-1 && cardNumber.length===15){
      return "American Express";
    }else if(['38', '39'].indexOf(cardNumber.substring(0,2))>-1 && cardNumber.length===14){
      return "Diner's Club";
    }else if(['564182','633110'].indexOf(cardNumber.substring(0,6))>-1 || 
            (['4903', '4905', '4911', '4936','6333','6759'].indexOf(cardNumber.substring(0,4))>-1) 
            && [16,18,19].indexOf(cardNumber.length)>-1){
      return "Switch";
    }else if(digitArray[0] === '4' && [13,16,19].indexOf(cardNumber.length)>-1){
      return "Visa";
    }else if(['51','52','53','54','55'].indexOf(cardNumber.substring(0,2))>-1 && cardNumber.length===16){
      return "MasterCard";
    }else if((cardNumber.substring(0,4)==='6011' || 
            (+cardNumber.substring(0,3)>=644 && +cardNumber.substring(0,3)<=649) || cardNumber.substring(0,2) === '65') 
            && (cardNumber.length===16||cardNumber.length===19)){
      return "Discover";
    }else if(['5018','5020','5038','6304'].indexOf(cardNumber.substring(0,4))>-1 && 
              (cardNumber.length>=12 && cardNumber.length<=19)){
      return "Maestro";
    }else if(((+cardNumber.substring(0,6)>=622126 && +cardNumber.substring(0,6)<=622925)||
              (+cardNumber.substring(0,3)>=624 && +cardNumber.substring(0,3)<=626) ||
              (+cardNumber.substring(0,4)>=6282 && +cardNumber.substring(0,4)<=6288)) && 
              (cardNumber.length>=16 && cardNumber.length<=19)){
      return "China UnionPay";
    }
}

