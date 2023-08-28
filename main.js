
let arr=['1','2','3','4','5','6','7','8','9','0','-','+','/','*']
for(let i=0;i<arr.length;i++){
    // masukkin buttons ke calculator

    const buttonTxt=arr[i]
    // pasang event listener
    document.getElementById(`button-${buttonTxt}`).onclick = function(){
        console.log('jalan')
        let resultCalc = document.getElementById("result").innerHTML;
        if(resultCalc==="Enter your number"){
            resultCalc=""
        }
        console.log(resultCalc);
        document.getElementById("result").innerHTML =(resultCalc+ buttonTxt);
    }
}

document.getElementById(`button-reset`).onclick = function(){
    document.getElementById("result").innerHTML ="Enter your number";
}

document.getElementById(`button-enter`).onclick = function(){
    let resultCalc = document.getElementById("result").innerHTML;
    let arr=[]
    let temp=""
    let operatorArr=['-','+','/','*']
    for(let i=0;i<resultCalc.length;i++){
        const element=resultCalc[i]
        if(!isNaN(element)||element==="."){
            temp+=element
        }
        else{
            arr.push(temp) // 
            console.log(arr, '-- arr.push(temp)')
            temp=""
            arr.push(element) // 
        }
    }
    arr.push(temp)
    for(let i=0;i<arr.length;i++){
        const element=arr[i]
        for(const operator of operatorArr){
            if(operator===element){
                if(operator==="*"){
                    arr[i+1]=(Number(arr[i-1])*Number(arr[i+1]))
                }
                else if(operator==="/"){
                    arr[i+1]=(Number(arr[i-1])/Number(arr[i+1]))
                }
                else if(operator==="+"){
                    arr[i+1]=(Number(arr[i-1])+Number(arr[i+1]))
                }
                else if(operator==="-"){
                    arr[i+1]=(Number(arr[i-1])-Number(arr[i+1]))
                }
            }
        } 
    }
    document.getElementById("result").innerHTML=arr[arr.length-1];
}
