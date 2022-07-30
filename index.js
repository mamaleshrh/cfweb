async function main(){
function updatecf(){
    var add=";mamalesh;mdathar;rivalq;coderanshu;tourist;itz_archit;madrat_0;cosmohack;"
    fetch("https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan"+add)
    .then(rsp=>rsp.json())
    .then (cfdat=>{
        console.log(cfdat.result);
        var bs=cfdat.result;
        bs.sort(function(a,b){
            return -a.rating+b.rating;
        });
        
        var sno=0;
        cfdat.result.forEach(element => {
            handle=element.handle;
            maxrank=element.maxRank;
            maxrating=element.maxRating;
            rank=element.rank;
            rating=element.rating;
            avatar=element.avatar;
            tl=element.titlePhoto;

            console.log(rating);
            function myCreateFunction(){
                sno+=1;
                var table = document.getElementById("myTable");
                var row = table.insertRow(-1);
                row.inner="";
                if (rank=="international grandmaster"||rank=="legendary grandmaster"|| rank=="grandmaster") {
                    row.style.color="red";
                    row.classList.add("grandmaster");
                    
                }
                else if(rank=="international master"||rank=="master"){
                    row.style.color="orange";
                    row.classList.add("master");
                    
                }
                else if(rank=="candidate master"){
                    row.style.color="violet";
                    row.classList.add("candidate");
                }
                else if(rank=="expert"){
                    row.style.color="blue";
                    row.classList.add("expert");
                }
                else if(rank=="specialist"){
                    row.style.color="cyan";
                    row.classList.add("specialist");
                }
                else if(rank=="pupil"){
                    row.style.color="green";
                    row.classList.add("pupil");
                }
                else{
                    row.style.color="grey";
                    row.classList.add("newbie");
                }
                row.classList.add();
                var sn=row.insertCell(0);
                var ima =row.insertCell(1);
                var han = row.insertCell(2);
                var rat = row.insertCell(3);
                var ran=row.insertCell(4);
                // addClass(row,rank);
                // row.add(rank);
                sn.innerHTML=sno;
                han.innerHTML=handle;
                rat.innerHTML=rating; 
                ran.innerHTML=rank;
                ima.innerHTML= '<img src='+avatar+' alt="hi"></img>';
                
                
              }
              myCreateFunction();
        });
    })

}
updatecf();
var hell=document.getElementById("ranka");
var cha = document.getElementsByClassName(hell.value);
hell.addEventListener('change',()=>{
    // var al=document.getElementById("alll");
    // al.style.display='none';
    
    if(hell.value=='grandmaster'){
        hell.style.color="red";cha.style.color="yellow !important";
        
        }else{
        // cha.style.color="purple";
        hell.style.color="green";
    }
    
})

}
setTimeout(() => main(), 1000);