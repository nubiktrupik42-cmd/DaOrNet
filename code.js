let btn = document.getElementById('h67')
let inpt = document.getElementById('u67')
let ans = document.getElementById('i67')

btn.onclick = function(){
    let qshn = inpt.value
    if (!qshn){
        alert('Повторите вопрос')
        return;
    }
    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let answer = data.answer;
            ans.src = data.image;
            ans.style.display = 'block';
        })
        .catch(error => {
            console.error('Error for API', error);
            alert('Retun unswer');
        });
    inpt.value = ''
};
