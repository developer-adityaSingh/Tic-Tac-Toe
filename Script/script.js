let check = 0
let lastIdNode= box1
function winnerCheck() {
    if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box2").innerHTML == "x") && (document.getElementById("box3").innerHTML == "x")) || ((document.getElementById("box4").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x")) || ((document.getElementById("box7").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x")) || ((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x")) || ((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x")) || ((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box4").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x")) || ((document.getElementById("box2").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x")) || ((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x"))) {
        let winnerId= document.getElementById(`${lastIdNode}`).innerHTML
        let conf= confirm(`X is winner\nDo you want to continue`)
        if(conf == true){
            window.location.reload()
        }
    }
    else if (((document.getElementById("box1").innerHTML == "o") && (document.getElementById("box2").innerHTML == "o") && (document.getElementById("box3").innerHTML == "o")) || ((document.getElementById("box4").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box6").innerHTML == "o")) || ((document.getElementById("box7").innerHTML == "o") && (document.getElementById("box8").innerHTML == "o") && (document.getElementById("box9").innerHTML == "o")) || ((document.getElementById("box1").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box9").innerHTML == "o")) || ((document.getElementById("box3").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box7").innerHTML == "o")) || ((document.getElementById("box1").innerHTML == "o") && (document.getElementById("box4").innerHTML == "o") && (document.getElementById("box7").innerHTML == "o")) || ((document.getElementById("box2").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box8").innerHTML == "o")) || ((document.getElementById("box3").innerHTML == "o") && (document.getElementById("box6").innerHTML == "o") && (document.getElementById("box9").innerHTML == "o"))) {
        let winnerId= document.getElementById(`${lastIdNode}`).innerHTML
        let conf= confirm(`O is winner\nDo you want to continue`)
        if(conf == true){
            window.location.reload()
        }
    }
    else if(((document.getElementById("box1").innerHTML == "o") || (document.getElementById("box1").innerHTML == "x")) && ((document.getElementById("box2").innerHTML == "o") || (document.getElementById("box2").innerHTML == "x")) && ((document.getElementById("box3").innerHTML == "o") || (document.getElementById("box4").innerHTML == "x")) && ((document.getElementById("box5").innerHTML == "o") || (document.getElementById("box5").innerHTML == "x")) && ((document.getElementById("box6").innerHTML == "o") || (document.getElementById("box6").innerHTML == "x")) && ((document.getElementById("box7").innerHTML == "o") || (document.getElementById("box7").innerHTML == "x")) && ((document.getElementById("box8").innerHTML == "o") || (document.getElementById("box8").innerHTML == "x")) && ((document.getElementById("box9").innerHTML == "o") || (document.getElementById("box9").innerHTML == "x"))){
        let conf= confirm(`Match Draw`)
        if(conf == true){
            window.location.reload()
        }
    }
}



document.querySelectorAll(".boxes").forEach((e) => {
    e.addEventListener("click", (event) => {
        console.log(event.target)
        console.log(event.target.innerText)
        idNode = event.target.id

        if (event.target.innerHTML == "x" || event.target.innerHTML == "o") {
            alert(`This box already contains ${event.target.innerHTML}`)
            console.log(e.innerHTML)
        }

        else {
            if (check == 0) {
                event.target.innerHTML = "x"
                document.querySelector(".msgBox").innerHTML= "<p>It's O Tern</p>"
                check = 1
                lastIdNode= event.target.id
                setTimeout(()=>{
                    winnerCheck()
                },30)
            }

            else if (check == 1) {
                event.target.innerHTML = "o"
                document.querySelector(".msgBox").innerHTML= "<p>It's X Tern</p>"
                check = 0
                lastIdNode= event.target.id
                setTimeout(()=>{
                    winnerCheck()
                },30)
            }
        }
    })
})




