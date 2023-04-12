let a = ""
let button = document.getElementsByTagName("button")
console.log(button)
for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click',()=>{
        if (button[index].innerHTML=='=') {
            a = eval(a);
            let b = document.getElementsByTagName('input')
            b[0].value=a;
        }
         else if (button[index].innerHTML=='C') {
            a = "";
            let b = document.getElementsByTagName('input')
            b[0].value=a;
        }
        else{
            a = a + button[index].innerHTML;
            console.log(a);
            let b = document.getElementsByTagName('input')
            b[0].value=a;
        }
    })
    
}