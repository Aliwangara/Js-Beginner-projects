const inputEl = document.getElementById('inputel');

const check = document.getElementById('check');

// function check(){
//     const value = inputEl.value;
//     alert(value)
// }

check.addEventListener('click', function(){


     const value = inputEl.value;
    const reverse = reverseString(value)
        
        

        if(value === reverse ){
            alert('Palindrom')
        }else{
            alert('not today')
        }

})
function reverseString(str){

    return str.split('').reverse().join('')

}