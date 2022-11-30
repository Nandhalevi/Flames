function getMatch(match) {
    return {
        1 : 'are friends',
        2 : 'are lovers',
        3 : 'have affections for each others',
        4 : 'will get marry',
        5 : 'are enemies',
        6 : 'are Sister'
    }[match];
}



let arr = [];
const inputs = document.querySelectorAll('.inputBox input');
const checkMatchBtn = document.getElementById('checkMatchBtn');
const matchResultBox = document.querySelector('.matchResultBox');



checkMatchBtn.addEventListener('click',(e)=> {
    let userName = document.getElementById('userName').value;
    let crushName = document.getElementById('crushName').value;

    if(userName.length < 3 || crushName.length < 3){
        matchResultBox.innerHTML = 'Name must be greater than 2 characters';
        matchResultBox.classList.add('visible');
        return;
    }

    let bothNames = userName+crushName;

    const nameArray = [...bothNames].sort();
    const repeatedChars = [];
    for(let i = 0; i < nameArray.length - 1; i++) {
        if(nameArray[i] === nameArray[i + 1]) repeatedChars.push(nameArray[i]);
    }

    const repeatedCharsArray = [...new Set(repeatedChars)];

    for(let i = 0; i < bothNames.length; i++) {
        arr.push(bothNames.charAt(i));
    }

    for(let j = 0; j < repeatedCharsArray.length; j++) {
        arr = arr.filter(e => e !== repeatedCharsArray[j]);
    }

    let finalName = arr.join('').toString();

    let finalNameLeght = arr.join('').toString().length;

    if(finalNameLeght > 6) {
        let remainingLenght = finalNameLeght - 6;
    }
    else{
        checkMatchBtn.querySelector('span').style.display = 'block';
        // checkMatchBtn.querySelector('img').style.display = 'none';
        matchResultBox.innerHTML = userName + ' and ' + crushName + ' ' + getMatch(finalNameLeght);
        matchResultBox.classList.add('visible');
    }

});