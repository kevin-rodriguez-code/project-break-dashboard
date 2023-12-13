const clock = document.getElementById("clock");
const date = document.getElementById("date");
const phrase = document.getElementById("phrase");


const getDate = new Date();
let[hour, minute, second] =  [
    getDate.getHours(),
    getDate.getMinutes(),
    getDate.getSeconds(),
];

const formattedHour = hour < 10 ? `0${hour}` : hour;

const updateClock = () => {
    if (second < 59) {
        second++;
    } else {
        second = 0;
        if (minute < 59) {
            minute++;
        } else {
            minute = 0;
            if (hour < 23) {
                hour++;
            } else {
                hour = 0;
            }
        }
    }
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const formattedSecond = second < 10 ? `0${second}` : second;
                        
    clock.innerHTML = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
};

setInterval(updateClock,1000);

let[day, month, year] = [
    getDate.getDate(),
    getDate.getMonth(),
    getDate.getFullYear(),
];
let monthReal = month + 1;

const updateDate = () => {
    if(hour == 0 && day ){
        day++
    }  
}

updateDate();

date.innerHTML = `${day}/${monthReal}/${year}`



let currentPhrase = '';

const choosePhrase = ()=>{
    if(formattedHour > 22 ){
        currentPhrase = 'De humanos es errar y de necios permanecer en el error (Marco Tulio Cicerón)'
    }else{
        if(formattedHour >18 ){
            currentPhrase = 'Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar (Antonio Machado)'
        }else{
            if(formattedHour > 16){
                currentPhrase = 'Cada día sabemos más y entendemos menos (Albert Einstein)'
            }else{
                if(formattedHour > 14){
                    currentPhrase = 'Hace falta toda una vida para aprender a vivir (Séneca)'
                }else{
                    if(formattedHour > 12){
                    currentPhrase = 'La mejor manera de librarse de la tentación es caer en ella (Oscar Wilde)'
                    }else{
                        if(formattedHour > 7){
                            currentPhrase = 'La duda es la madre de la invención (Galileo Galilei)'
                        }else{currentPhrase = 'El amor no tiene cura, pero es la única medicina para todos los males (Konrad Adenauer)'}
                    }
                    

                }
            }
        }
    }
};

choosePhrase();

phrase.innerHTML = currentPhrase