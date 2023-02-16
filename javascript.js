const RandomPin = () => {
    const Random = Math.round(Math.random()*100000);
    return Random;
};
const randomPinNumer = () =>{
    const Pin = RandomPin()+'';
    const length = Pin.split('').length;

    if(length == 5){
        return Pin;
    }else{
       return randomPinNumer();
    };
};
// Received for input value
const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputNumber = parseInt(inputField.value);
    return inputNumber;
}
// set input value
const setInputValueById = (id,value) => {
    const inputField = document.getElementById(id);
    inputField.value = value;
};

document.getElementById('genarate').addEventListener('click',function(){
        const randomNumber = randomPinNumer();
        setInputValueById("randomNumber",randomNumber);

        const submit = document.getElementById("submit");
        submit.classList.remove("opacity-40");
        submit.removeAttribute("disabled");
});

document.getElementById('allkeys').addEventListener('click',function(even){
    const key = even.target.innerText;
    const matchinput = document.getElementById("matchInputValue");
    let matchInputValue = matchinput.value;
    if(isNaN(key)){
        if(key == 'C'){

            const array = matchInputValue.split('');
            array.pop();
            const remining = array.join('');
            matchinput.value = remining;
            
        }else if(key == 'Reset'){
            matchinput.value = "";
        }
    }else{
        matchinput.value =matchInputValue+key;
    };
})

document.getElementById('submit').addEventListener('click',function(){
    const randompin = getInputValueById('randomNumber');
    const verifyPin = getInputValueById('matchInputValue');
    const message1 = document.getElementById('message1'); 
    const message2 = document.getElementById('message2');
    if(randompin == verifyPin){
        message1.classList.remove('hidden');
        message2.classList.add('hidden'); 
    }else{
        message2.classList.remove('hidden');
        message1.classList.add('hidden');
    }
});