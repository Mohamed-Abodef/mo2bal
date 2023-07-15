//             ALL ABOUT LEADERS

let fLeader ={
    field : document.querySelectorAll("input")[0],
    name : "",
    h4: document.querySelector(".fLeader h4")
}
let sLeader = {
    field : document.querySelectorAll("input")[1],
    name:"",
    h4: document.querySelector(".sLeader h4")
}
let taken = "Unkown"

fLeader.field.addEventListener("blur",()=>{
    fLeader.name = fLeader.field.value ;
    fLeader.h4.innerHTML=fLeader.name
    
})
sLeader.field.addEventListener("blur",()=>{
    sLeader.name = sLeader.field.value ;
    sLeader.h4.innerHTML=sLeader.name
})


//          ABOUT PLAYERS
let numsField = document.querySelectorAll("input")[2];
let nums =0 ;
let playerField = document.querySelectorAll("input")[3];
let players=[];
let counter=0 ;
let wadii = document.querySelector(".frm .bottom");
    wadii.parentElement
numsField.addEventListener("blur",()=>{
    nums = +numsField.value
});
wadii.addEventListener("click",()=>{
    players.push(
        {
            name : playerField.value,
            rank : Math.round(Math.random()*100)
        }
    )
    counter++;
    playerField.value="";
    if (counter== nums){
        shuffleArray(players)
       // playerField.setAttribute("hidden","")
        poker(players)
    }
})
//           POKERING    
let  ta2simaF = document.querySelector(".fLeader");
let  ta2simas = document.querySelector(".sLeader");

ta2simaF.addEventListener("click",()=>{
    ta2simas.classList.remove("chossen");
    ta2simaF.classList.add("chossen");
    taken="fLeader"
})
ta2simas.addEventListener("click",e=>{
    ta2simaF.classList.remove("chossen");
    ta2simas.classList.add("chossen");
    taken ="sLeader"
})
document.addEventListener("click",e=>{     // flipp
    if(e.target.classList.contains("backGround") & taken!="Unkown"){
        e.target.parentElement.classList.add("flipp");
        switch(taken){
            case "fLeader":
                var divN = document.createElement("div");
                divN.innerHTML = e.target.parentElement.getAttribute("data");
                fLeader.h4.append(divN);
                break;
            case "sLeader":
                var divN = document.createElement("div");
                divN.innerHTML = e.target.parentElement.getAttribute("data");
                sLeader.h4.append(divN);    
        }
    }
})

//          HELPFULL FUNCTIONS
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
let swap ;

function sorter(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].rank<arr[j].rank){
                swap =arr[i];
                arr[i]=arr[j];
                arr[j]=swap;
            }
        }
    }
}
let table = document.querySelector(".cards .src")
function poker(arr){
    arr.forEach(element => {
      let  divP = document.createElement("div")
        divP.classList.add("card");
      let  frnt = document.createElement("div")
        frnt.classList.add("front");
      let img = document.createElement("img");
      if(element.rank%2 ==0)
        img.setAttribute("src","images/2_Card_template_29.png")
      else img.setAttribute("src","images/2_Card_template_30.png")    
      let spn = document.createElement("span")
        spn.innerHTML=Math.round(Math.random()*10);
      let p = document.createElement("p");  
      let  bck = document.createElement("div")
        bck.classList.add("backGround")
       
        p.innerHTML= element.name;
        frnt.appendChild(img)
        frnt.appendChild(spn);
        frnt.appendChild(p)
        divP.appendChild(frnt);
        divP.appendChild(bck)
        divP.setAttribute("data",element.name)
        table.after(divP)
        // divP.removeChild(frnt)
        // divP.removeChild(bck)
    });
}
