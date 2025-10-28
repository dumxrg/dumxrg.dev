const length = 5;
let string = "";
let step = 0;
setInterval(() => {
    string =""
    step++;
    if(step === 5){
        step =0;
    }

    for (let index = 0; index < step; index++) {
       string = string.concat("■")
    }
      for (let index = 0; index < length-step-1; index++) {
       string = string.concat("□")
    }
  
    document.title = string
}, 1000);