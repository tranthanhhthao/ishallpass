const inputs = document.getElementById('frm1');
const asm = document.getElementsByClassName('assignment');
const scores = document.getElementsByClassName('score');
const totals = document.getElementsByClassName('total');
const percentages = document.getElementsByClassName('percentage');

const className = document.getElementById('classname');

const pointer = document.getElementById('pointer');
const buttonSubmit = document.getElementById('submit');
const buttonClear = document.getElementById('clear');

const classGrade = document.getElementById('output_grade');
const classScore = document.getElementById('output_score');
const classCurrentSum = document.getElementById('output_currentSum');
const classCurrentTotal = document.getElementById('output_currentTotal');


function reload() {
    let sumScore = 0;
    let sumCurrent = 0;
    let currentTotal = 0;
    let count = 0;
    let average = 0;

    for (let i = 0; i < scores.length ;i++) {

        if (scores[i].value !== '' && totals[i].value !== '') {
            sumScore += Number(scores[i].value)
            sumCurrent += Number(totals[i].value)
            count++

            classScore.innerHTML = sumScore;
            classCurrentSum.innerHTML = sumCurrent
        } 

        if (totals[i].value !== '') {
            currentTotal += Number(totals[i].value)
            classCurrentTotal.innerHTML = currentTotal
        } 
 
        average = (sumScore/sumCurrent)* 100;
    }

    // percentage
    for (let i = 0; i < scores.length; i++) {

        if (totals[i].value !== '' && scores[i].value !== '') {
            percentages[i].innerHTML = Math.round((Number(scores[i].value) / Number(totals[i].value) * 100)*100)/100 + '%'
        } else if (totals[i].value === '' || scores[i].value === '') {
            percentages[i].innerHTML = ''
        }
    
    }

    // output
    classGrade.innerHTML = average.toFixed(2) + '%';
    pointer.style.opacity = 1
    pointer.style.left = 2.35 * average + 'px'
    
}

reload()

function clearing() {
    
    for (let i = 0; i < inputs.length; i++) {
        // inputs.elements[i].value = 0;
        inputs.elements[i].value = ''
    }


    reload()
    pointer.style.opacity = 0;

    classScore.innerHTML = '';
    classGrade.innerHTML = '';
    classCurrentSum.innerHTML = '';
    classCurrentTotal.innerHTML = '';

}

function example() {
    className.value = 'Composition I';

    asm[0].value = 'Individual Contract';
    scores[0].value = 50;
    totals[0].value = 50;

    asm[2].value = '245';
    scores[2].value = 30;
    totals[2].value = 30;

    asm[3].value = 'Draft 1';
    scores[3].value = 0;
    totals[3].value = 30;

    asm[4].value = 'Draft 2';
    scores[4].value = 30;
    totals[4].value = 30;

    asm[5].value = 'Peer Review 1';
    scores[5].value = 0;
    totals[5].value = 50;

    asm[6].value = 'Writing Project 1';
    scores[6].value = 188;
    totals[6].value = 200;

    asm[8].value = 'HW';
    totals[8].value = 50;
    asm[9].value = 'HW';
    totals[9].value = 50;
    asm[10].value = 'HW';
    totals[10].value = 50;


    reload()
}

