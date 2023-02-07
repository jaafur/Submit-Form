let container = document.querySelector(".container"),
    userName = document.querySelector(".user"),
    passWord = document.querySelector(".pass-word"),
    submitBtn = document.querySelector(".button"),
    message = document.querySelector(".message"),
    isUserNameValid = ()=>{
        const userRegex = /^[a-zA-Z0-9]{3,32}/gi;
        return userRegex.test(userName.value)
    },
    isPassoWordValid = ()=>{
       const passWordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/gm
      return passWordRegex.test(passWord.value)
    }


userName.addEventListener('input',()=>{
    if (isUserNameValid()) {
        userName.style.cssText = "background-color:#c2ffc2 ; border-color:#34bd34"
        
    }else{
        userName.style.cssText = "background-color:rgb(255 191 191); border-color:#ffc2c2"

    }
})
passWord.addEventListener('input',()=>{
    if (isPassoWordValid()) {
        passWord.style.cssText = "background-color:#c2ffc2 ; border-color:#34bd34"
        
    }else{
        passWord.style.cssText = "background-color:rgb(255 191 191); border-color:#ffc2c2"

    }
})

 submitBtn.addEventListener('mouseover',()=>{
   let  containerRect = container.getBoundingClientRect()
   let  buttonRect = submitBtn.getBoundingClientRect()
   if (!isPassoWordValid() || !isUserNameValid()) {
    message.style.visibility = "hidden"
    if (buttonRect.left - containerRect.left >= 170) {
        submitBtn.style.transform = "translateX(-250px)"
        
    }else{
        submitBtn.style.transform = "translateX(30px)"
      
    }
    
   }else{
    submitBtn.addEventListener('click',()=>{
        message.style.visibility = "visible"
    })
   }
    
 })

// console.log(isUserNameValid())
// console.log(isPassoWordValid())
// console.log(container.getBoundingClientRect().right)
// console.log(container.getBoundingClientRect().left)
// console.log(submitBtn.getBoundingClientRect().right)
// console.log(submitBtn.getBoundingClientRect().left)
// console.log(submitBtn.getBoundingClientRect().left - container.getBoundingClientRect().left)
// console.log(container.getBoundingClientRect().right - submitBtn.getBoundingClientRect().right )