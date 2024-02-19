
 function calculateMoney(ticketSale){

    if(ticketSale < 0 ){
        return '“Invalid Number”';
    }
    let selel = ticketSale * 120 ;
    let coust = (50 * 8) + 500;
    let totalCash = selel - coust;
    
    return totalCash;
}


function checkName(value){
    
if(typeof value !== "string"){
    return "invalid";
}
let sum = value.slice(-1);
let all = sum.toLocaleLowerCase();

if(all === 'a' || all === 'y' ||all === 'i' ||all === 'e' ||all === 'o'||all=== 'u' ||all=== 'w'){
   return "Good name";
}else{
    return "Bad name";
}
}



function deleteInvalids(puse) {

    if (!Array.isArray(puse)) {
        return "Invalid Array";
    }

    let main = [];
    for (const num of puse) {
        if (typeof num === "number" && ! isNaN(num)) {
            main.push(num);
        }
    }
    return main;
}


function monthlySavings(arr , livingCost){

    if(!Array.isArray(arr)){
        return "invalid input";
        } 
        else if(typeof livingCost !== "number"){
            return "invalid input";
        }

     let sum = 0 ;
        for(let condition of arr ){
        if(condition >= 3000 ){
            sum += condition *80 / 100;
        }else{
            sum += condition;
        }
    }
    let total = sum - livingCost;

    if(total >= 0 ){
        return total ;
    }
    else if (total <= 0){
        return "earn more"
    }

    }



