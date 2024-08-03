let resetState= ()=>{
    document.querySelectorAll(".boxes").forEach((box)=>{
       box.innerHTML= ""
    })
}
let userPreference = NaN

document.getElementById("computerButton").addEventListener("click", () => {
    userPreference = "computer"
    resetEventListeners()
    compVSuser()
})

document.getElementById("userButton").addEventListener("click", () => {
    userPreference = "user"
    resetEventListeners()
    userVSuser()
})


let resetEventListeners = () => {
    document.querySelectorAll(".boxes").forEach((box) => {
        box.replaceWith(box.cloneNode(true))
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    userPreference = "computer"
    resetEventListeners()
    compVSuser()
})

let winnerCheck = () => {
    if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box2").innerHTML == "x") && (document.getElementById("box3").innerHTML == "x")) || ((document.getElementById("box4").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x")) || ((document.getElementById("box7").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x")) || ((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x")) || ((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x")) || ((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box4").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x")) || ((document.getElementById("box2").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x")) || ((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x"))) {
        let conf = confirm(`X is winner\nDo you want to continue`)
        if (conf == true) {
            window.location.reload()
        }
    }
    else if (((document.getElementById("box1").innerHTML == "o") && (document.getElementById("box2").innerHTML == "o") && (document.getElementById("box3").innerHTML == "o")) || ((document.getElementById("box4").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box6").innerHTML == "o")) || ((document.getElementById("box7").innerHTML == "o") && (document.getElementById("box8").innerHTML == "o") && (document.getElementById("box9").innerHTML == "o")) || ((document.getElementById("box1").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box9").innerHTML == "o")) || ((document.getElementById("box3").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box7").innerHTML == "o")) || ((document.getElementById("box1").innerHTML == "o") && (document.getElementById("box4").innerHTML == "o") && (document.getElementById("box7").innerHTML == "o")) || ((document.getElementById("box2").innerHTML == "o") && (document.getElementById("box5").innerHTML == "o") && (document.getElementById("box8").innerHTML == "o")) || ((document.getElementById("box3").innerHTML == "o") && (document.getElementById("box6").innerHTML == "o") && (document.getElementById("box9").innerHTML == "o"))) {
        let conf = confirm(`O is winner\nDo you want to continue`)
        if (conf == true) {
            window.location.reload()
        }
    }
    else if (((document.getElementById("box1").innerHTML == "o") || (document.getElementById("box1").innerHTML == "x")) && ((document.getElementById("box2").innerHTML == "o") || (document.getElementById("box2").innerHTML == "x")) && ((document.getElementById("box3").innerHTML == "o") || (document.getElementById("box3").innerHTML == "x")) && ((document.getElementById("box4").innerHTML == "o") || (document.getElementById("box4").innerHTML == "x")) && ((document.getElementById("box5").innerHTML == "o") || (document.getElementById("box5").innerHTML == "x")) && ((document.getElementById("box6").innerHTML == "o") || (document.getElementById("box6").innerHTML == "x")) && ((document.getElementById("box7").innerHTML == "o") || (document.getElementById("box7").innerHTML == "x")) && ((document.getElementById("box8").innerHTML == "o") || (document.getElementById("box8").innerHTML == "x")) && ((document.getElementById("box9").innerHTML == "o") || (document.getElementById("box9").innerHTML == "x"))) {
        let conf = confirm(`Match Draw`)
        if (conf == true) {
            window.location.reload()
        }
    }
}

let userVSuser = () => {
    resetState()
    document.querySelector(".comBtn").style.display = "flex"
    document.querySelector(".userBtn").style.display = "none"
    document.querySelector(".msgBox").firstElementChild.innerHTML = "<p>Let's Play</p>"
    let check = 0
    
    if(userPreference == "user"){
        document.querySelectorAll(".boxes").forEach((e) => {
            e.addEventListener("click", (event) => {
                idNode = event.target.id
                if ((event.target.innerHTML == "x" || event.target.innerHTML == "o")) {
                    alert(`This box already contains ${event.target.innerHTML}`)
                }
    
                else {
                    if (check == 0) {
                        event.target.classList.add("scaleUp")
                        event.target.innerHTML = "x"
                        document.querySelector(".msgBox").firstElementChild.innerHTML = "<p>It's O Tern</p>"
                        check = 1
                        setTimeout(() => {
                            winnerCheck()
                        }, 210)
                    }
    
                    else if (check == 1) {
                        event.target.classList.add("scaleUp")
                        event.target.innerHTML = "o"
                        document.querySelector(".msgBox").firstElementChild.innerHTML = "<p>It's X Tern</p>"
                        check = 0
                        setTimeout(() => {
                            winnerCheck()
                        }, 210)
                    }
                }
            })
        })
    }
}


let compVSuser = () => {
    resetState()
    document.querySelector(".userBtn").style.display = "flex"
    document.querySelector(".comBtn").style.display = "none"
    let lastInputBox = box1
    let user = 0
    document.querySelector(".msgBox").firstElementChild.innerHTML= "AI VS USER"

    let computerPlay = (lastBox) => {
            if ((lastBox == "box1" || lastBox == "box2" || lastBox == "box3" || lastBox == "box4" || lastBox == "box5" || lastBox == "box6" || lastBox == "box7" || lastBox == "box8" || lastBox == "box9") && (document.getElementById("box5").innerHTML == "")) {
                document.getElementById("box5").classList.add("scaleUp")
                document.getElementById("box5").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box2").innerHTML == "x") && (document.getElementById("box3").innerHTML == ""))) {
                document.getElementById("box3").classList.add("scaleUp")
                document.getElementById("box3").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box3").innerHTML == "x") && (document.getElementById("box2").innerHTML == ""))) {
                document.getElementById("box2").classList.add("scaleUp")
                document.getElementById("box2").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box2").innerHTML == "x") && (document.getElementById("box3").innerHTML == "x") && (document.getElementById("box1").innerHTML == ""))) {
                document.getElementById("box1").classList.add("scaleUp")
                document.getElementById("box1").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box4").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box6").innerHTML == ""))) {
                document.getElementById("box6").classList.add("scaleUp")
                document.getElementById("box6").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box4").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x") && (document.getElementById("box5").innerHTML == ""))) {
                document.getElementById("box5").classList.add("scaleUp")
                document.getElementById("box5").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box5").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x") && (document.getElementById("box4").innerHTML == ""))) {
                document.getElementById("box4").classList.add("scaleUp")
                document.getElementById("box4").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box7").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x") && (document.getElementById("box9").innerHTML == ""))) {
                document.getElementById("box9").classList.add("scaleUp")
                document.getElementById("box9").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box8").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x") && (document.getElementById("box7").innerHTML == ""))) {
                document.getElementById("box7").classList.add("scaleUp")
                document.getElementById("box7").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box7").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x") && (document.getElementById("box8").innerHTML == ""))) {
                document.getElementById("box8").classList.add("scaleUp")
                document.getElementById("box8").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box4").innerHTML == "x") && (document.getElementById("box7").innerHTML == ""))) {
                document.getElementById("box7").classList.add("scaleUp")
                document.getElementById("box7").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box4").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x") && (document.getElementById("box1").innerHTML == ""))) {
                document.getElementById("box1").classList.add("scaleUp")
                document.getElementById("box1").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x") && (document.getElementById("box4").innerHTML == ""))) {
                document.getElementById("box4").classList.add("scaleUp")
                document.getElementById("box4").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box2").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box8").innerHTML == ""))) {
                document.getElementById("box8").classList.add("scaleUp")
                document.getElementById("box8").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box5").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x") && (document.getElementById("box2").innerHTML == ""))) {
                document.getElementById("box2").classList.add("scaleUp")
                document.getElementById("box2").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box2").innerHTML == "x") && (document.getElementById("box8").innerHTML == "x") && (document.getElementById("box5").innerHTML == ""))) {
                document.getElementById("box5").classList.add("scaleUp")
                document.getElementById("box5").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box6").innerHTML == "x") && (document.getElementById("box9").innerHTML == ""))) {
                document.getElementById("box9").classList.add("scaleUp")
                document.getElementById("box9").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box6").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x") && (document.getElementById("box3").innerHTML == ""))) {
                document.getElementById("box3").classList.add("scaleUp")
                document.getElementById("box3").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x") && (document.getElementById("box6").innerHTML == ""))) {
                document.getElementById("box6").classList.add("scaleUp")
                document.getElementById("box6").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box9").innerHTML == ""))) {
                document.getElementById("box9").classList.add("scaleUp")
                document.getElementById("box9").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box5").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x") && (document.getElementById("box1").innerHTML == ""))) {
                document.getElementById("box1").classList.add("scaleUp")
                document.getElementById("box1").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box1").innerHTML == "x") && (document.getElementById("box9").innerHTML == "x") && (document.getElementById("box5").innerHTML == ""))) {
                document.getElementById("box5").classList.add("scaleUp")
                document.getElementById("box5").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box5").innerHTML == "x") && (document.getElementById("box7").innerHTML == ""))) {
                document.getElementById("box7").classList.add("scaleUp")
                document.getElementById("box7").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box5").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x") && (document.getElementById("box3").innerHTML == ""))) {
                document.getElementById("box3").classList.add("scaleUp")
                document.getElementById("box3").innerHTML = "o"
                user = 0
                return user
            }
            else if (((document.getElementById("box3").innerHTML == "x") && (document.getElementById("box7").innerHTML == "x") && (document.getElementById("box5").innerHTML == ""))) {
                document.getElementById("box5").classList.add("scaleUp")
                document.getElementById("box5").innerHTML = "o"
                user = 0
                return user
            }
            else {
                for (let index = 1; index <= 9; index++) {
                    box = document.getElementById(`box${index}`)
                    if (box.innerHTML == "") {
                        box.classList.add("scaleUp")
                        box.innerHTML = "o"
                        user = 0
                        return user
                    }
                }
            }
        
    }

    if(userPreference == "computer"){
        document.querySelectorAll(".boxes").forEach((box) => {
            box.addEventListener("click", (e) => {
                if (((e.target.innerHTML == "x") || (e.target.innerHTML == "o"))) {
                    alert(`This Box already contains ${e.target.innerHTML}`)
                }
    
                else {
                        e.target.classList.add("scaleUp")
                        e.target.innerHTML = "x"
                        lastInputBox = e.target.id
                        let lastIdNode = e.target.id
                        setTimeout(() => {
                            winnerCheck(lastIdNode)
                        }, 205)
                        setTimeout(() => {
                            computerPlay(lastInputBox)
                        }, 50)
                }
            })
        })
    }
}

