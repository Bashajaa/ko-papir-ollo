const choices = ['kő', 'papír', 'olló'];

let win = 0;
let tie = 0;
let lose = 0;

function play(player)
{
    const computer = choices[Math.floor(Math.random() * 3)];
    let result="";
    if (computer === player)
    {
        result="Döntetlen";
    }
    else
    {
        switch(player){
            case 'kő':
                result = computer === 'olló' ? "Nyertél":"Vesztettél";
                break;
            case 'papír':
                result = computer === 'kő' ? "Nyertél":"Vesztettél";
                break;
            case 'olló':
                result = computer === 'papír' ? "Nyertél":"Vesztettél";
                break;
        }
    }

    document.getElementById('jatekos').innerText = 'Játékos: '+player;
    document.getElementById('gep').innerText = 'Gép: '+computer;


    switch(result){
        case "Döntetlen":
            tie++;
            document.getElementById('tie').innerText = tie;
            break;
        case "Nyertél":
            win++;
            document.getElementById('win').innerText = win;
            break;
        case "Vesztettél":
            lose++;
            document.getElementById('lose').innerText = lose;
            break;
    }
    document.getElementById('result').innerText = result;

}

function newGame()
{
    win=0;
    lose=0;
    tie=0;
    document.getElementById('tie').innerText = tie;
    document.getElementById('win').innerText = win;
    document.getElementById('lose').innerText = lose;
    document.getElementById('jatekos').innerText = '';
    document.getElementById('gep').innerText = '';
    document.getElementById('result').innerText = "";
}
