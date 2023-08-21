const button = document.querySelector('#show-toast'),
      toast = document.querySelector(".toast"),
      closeIcone = document.querySelector(".close"),
      progress = document.querySelector(".progress");
      
button.addEventListener("click", ()=>{
    toast.classList.add("active");//adding 'active' class in toast class
    progress.classList.add("active")//adding 'active' class in progress class

    //automatic remove the displaying toast or alert screen
    setTimeout( ()=>{
        toast.classList.remove("active");
        progress.classList.remove("active")
    }, 8*1000); //1s = 1000 milliseconds
});

closeIcone.addEventListener("click", ()=>{
    toast.classList.remove("active")
    progress.classList.remove("active")
})