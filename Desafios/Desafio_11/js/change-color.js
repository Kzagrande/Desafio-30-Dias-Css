
    //Value input variable
    const inputField = document.getElementById("input");

    // Insert number input field
    const insertNum = num => inputField.textContent += num;

    //Do oparation using eval
    const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent): false;


    //remove 1 val at time
    const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length -1);


    //Clear all the input
    const clearInput = () => inputField.textContent = '';









    function changeColor(){

            //get reference to the elements page
    const body = document.getElementById("bg-body");
    const calcBtn = document.querySelectorAll(".btn-num");
    const inputColor = document.getElementById("input");

    
    //input color  
    inputColor.classList.toggle("white-bg");
    inputColor.classList.toggle("blue-text");

    //buttons color
    calcBtn.forEach(btn => {
    btn.classList.toggle('white-bg');
    btn.classList.toggle('white-border');
   
    
   

    })

    //body background
    body.classList.toggle("blue-bg");

    //color change{
        colorChangeBtn.classList.toggle("white-bg");
        colorChangeBtn.classList.toggle("blue-text");

    //links
    document.querySelector(".author").classList.toggle("white-text");    
    document.querySelector(".author a").classList.toggle("white-text");    
   
}

      // Create reference to btn and log an event to the function 
      const colorChangeBtn = document.getElementById("color-change");
      colorChangeBtn.addEventListener("click", changeColor);

