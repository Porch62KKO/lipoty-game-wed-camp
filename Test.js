function PlayGame(){
    userInput = document.getElementById("user-input").value
    console.log(userInput)
    
    botInput = Math.florr((Math.random() * 100) %3)
    console.log(botInput)

    // ค้อน : 0
    // กระดาษ : 1
    // กรรไกร : 2
    if (userInput == botInput){
        console.log("DRAW")
    } else if (userInput == 0 && botInput == 2) {
        // User: ค้อน
        // BOT: กรรไกร
        console.log("User win")
    } else if (userInput == 1 && botInput == 0) {
        // User: กระดาษ
        // BOT: ค้อน
        console.log("User win")
    } else if (userInput == 2 && botInput == 1) {
        // User: กรรไกร
        // BOT: กระดาษ
        console.log("User win")
    } else {
        console.log("Bot win")
    }
        

}