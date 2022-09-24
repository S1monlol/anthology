const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.target.classList[0] != "poem") {
        if (entry.isIntersecting) {
            console.log("Element is visible in screen");


            if(entry.target.textContent=="King"){
                setTimeout(function(){
                    console.log("ooga")
                    entry.target.classList.add("show");
                }, 200);
            }
            else if(entry.target.textContent=="of"){
                setTimeout(function(){
                    console.log("ooga")
                    entry.target.classList.add("show");
                }, 900);
            } else if (entry.target.textContent=="Kings"){
                setTimeout(function(){
                    console.log("booga")
                    entry.target.classList.add("show");
                }, 1500);
            } else {

                entry.target.classList.add("show");

            }

            
        } else {
            console.log("Element is not visible in screen");
            entry.target.classList.remove("show");
        }
    }
    });
});


let hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(element => {
    observer.observe(element);
}
);




function showPoem(url){
    console.log("clicked")

    fetch('poem/' + url)
    .then(response => response.text())
    .then(data => {
        console.log(data)
        document.getElementById(url + "Poem").classList.add("show");
        document.getElementById(url + "Poem").childNodes[1].textContent = data;
    }
    )

}


document.addEventListener("click", function(){ 
    for(let i = 0; i < document.getElementsByClassName("poem").length; i++){

        //  wait 0.5 seconds before removing the class

        if(document.getElementsByClassName("poem")[i].classList.contains("show")){
        setTimeout(function(){
            document.getElementsByClassName("poem")[i].classList.remove("show");
        }, 300);
        }

    }
});
