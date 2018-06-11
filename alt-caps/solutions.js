function capitalize(s){
  let capsArr = [];
  let oddS = "";
  let evenS = "";
    for(let i in s){
        if (i % 2 != 0) {
            oddS += s[i].toUpperCase();
            evenS += s[i].toLowerCase();
        }
        else {
            oddS += s[i].toLowerCase();
            evenS += s[i].toUpperCase();
         }   
    }
    capsArr.push(evenS, oddS);
    return capsArr;
};