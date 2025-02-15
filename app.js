const inputs = document.getElementById('frm1');
const className = document.getElementById('classname');

const asm = document.getElementsByClassName('assignment');
const weights = document.getElementsByClassName('weight');
const percentages = document.getElementsByClassName('percentage');
const beforePercentages = document.getElementsByClassName('before-percentage');
const thePercentages = document.getElementsByClassName('the-percentage')
const totalScores = document.getElementsByClassName('total-scored');
const totalTotals = document.getElementsByClassName('total-total')

const logoScoreNumber = document.getElementById('logo-score-number');

const logoScorePointer = document.getElementById('logo-score-pointer');
const currentWeight = document.getElementById('current-weights');
const finalGrade = document.getElementById('current-grade-score')


function reload () {
    let curPoint = 0; 

    // format Weight
    for (let i = 0; i < weights.length; i++) {
        let int = weights[i].value;

        if (int.includes('%')) {
            
        } else {
            weights[i].value = int + '%'
        }
    }

    // Not Empty
    let totalWeightNum = 0 

    for (let i = 0; i < weights.length; i++) {
        if (weights[i].value.length > 1) {

            let Aperc = (totalScores[i].value / totalTotals[i].value).toFixed(2);
        
                if (weights[i].value.length - 1 > 0) {
                    let weightValue = weights[i].value.slice(-5, -1);
        
                    weightNumValue = Number(weightValue)

                    // change weight bar length
                    totalWeightNum += weightNumValue
                    currentWeight.style.width = totalWeightNum*465/100 + 'px'
                }
                
                let curAPoint = Aperc*weightNumValue

                thePercentages[i].innerHTML = '+' + curAPoint.toFixed(1) + '%';

                if (!(isNaN(curAPoint))) {
                    curPoint += curAPoint;
                    // console.log('curPoint', curPoint)
                }

        } else {
            thePercentages[i].innerHTML = ""
        }
    }

    // Change color of Percentages
    for (let i = 0; i < percentages.length; i++) {
        if (totalScores[i].value / totalTotals[i].value >= 0.8 && totalScores[i].value / totalTotals[i].value <= 1) {
            percentages[i].style.display = 'inline-block';
            beforePercentages[i].style.display = 'block';

            percentages[i].style.backgroundColor = '#1ddb58';
            beforePercentages[i].style.borderRight = '10px solid #1ddb58';
        } else if (totalScores[i].value / totalTotals[i].value >= 0.7) {
            percentages[i].style.display = 'inline-block';
            beforePercentages[i].style.display = 'block';

            percentages[i].style.backgroundColor = '#C0ED56';
            beforePercentages[i].style.borderRight = '10px solid #C0ED56';
        } else if (totalScores[i].value / totalTotals[i].value >= 0.6) {
            percentages[i].style.display = 'inline-block';
            beforePercentages[i].style.display = 'block';

            percentages[i].style.backgroundColor = '#FAEE3B';
            beforePercentages[i].style.borderRight = '10px solid #FAEE3B';
        } else if (totalScores[i].value / totalTotals[i].value >= 0.5) {
            percentages[i].style.display = 'inline-block';
            beforePercentages[i].style.display = 'block';

            percentages[i].style.backgroundColor = '#F78E26';
            beforePercentages[i].style.borderRight = '10px solid #F78E26';
        } else if (totalScores[i].value / totalTotals[i].value < 0.5) {
            percentages[i].style.display = 'inline-block';
            beforePercentages[i].style.display = 'block';

            percentages[i].style.backgroundColor = '#D82621';
            beforePercentages[i].style.borderRight = '10px solid #D82621';
        } else {
            percentages[i].style.display = 'none';
            beforePercentages[i].style.display = 'none';
        }
    }

    // change color current grade 
    let currentGrade = curPoint/totalWeightNum; 

    if (currentGrade >= 0.8 && currentGrade <= 1) {
        finalGrade.innerHTML = 'HD'
        currentWeight.style.backgroundColor = '#1DDB58'
    } else if (currentGrade >= 0.7) {
        finalGrade.innerHTML = 'DI'
        currentWeight.style.backgroundColor = '#C0ED56'
    } else if (currentGrade >= 0.6) {
        finalGrade.innerHTML = 'CR'
        currentWeight.style.backgroundColor = '#FAEE3B'
    } else if (currentGrade >= 0.5) {
        finalGrade.innerHTML = 'PA'
        currentWeight.style.backgroundColor = '#F78E26'
    } else if (currentGrade < 0.5) {
        finalGrade.innerHTML = 'NN'
        currentWeight.style.backgroundColor = '#D83621'
    }

    logoScoreNumber.innerHTML = curPoint.toFixed(1);

    // run the pointer
    logoScorePointer.style.left = 17 + 4.65*curPoint + 'px'
    
}

reload()

function clearing() {
    className.value = '';
    
    for (let i = 0; i < inputs.length; i++) {
        inputs.elements[i].value = ''
    }

    for (let i = 0; i < percentages.length; i++) {
        percentages[i].style.display = 'none'
    }

    finalGrade.innerHTML = ''
    currentWeight.style.backgroundColor = 'transparent'


    reload()
}

let exampleClicks = 0;

function example() {
    exampleClicks++;

    if (exampleClicks > 2) {
        exampleClicks = 1;
    }

    if (exampleClicks === 1) {
        console.log('click is 1')
        className.value = 'Global Media Industries';

        asm[0].value = 'Quiz 1';
        weights[0].value = 10;
        totalScores[0].value = 70;
        totalTotals[0].value = 100;
    
        asm[1].value = 'Reflection';
        weights[1].value = 30;
        totalScores[1].value = 50;
        totalTotals[1].value = 100;
    
        asm[2].value = 'Quiz 2';
        weights[2].value = 10;
        totalScores[2].value = 80;
        totalTotals[2].value = 100;

        asm[3].value = '';
        weights[3].value = '';
        totalScores[3].value = '';
        totalTotals[3].value = '';
    
        asm[4].value = '';
        weights[4].value = '';
        totalScores[4].value = '';
        totalTotals[4].value = '';
    
    } else if (exampleClicks === 2) {
        className.value = 'Global Media Industries';

        asm[0].value = 'Quiz 1';
        weights[0].value = 10;
        totalScores[0].value = 70;
        totalTotals[0].value = 100;
    
        asm[1].value = 'Reflection';
        weights[1].value = 30;
        totalScores[1].value = 50;
        totalTotals[1].value = 100;
    
        asm[2].value = 'Quiz 2';
        weights[2].value = 10;
        totalScores[2].value = 80;
        totalTotals[2].value = 100;
    
        asm[3].value = 'Cultural Adaptation';
        weights[3].value = 40;
        totalScores[3].value = 63;
        totalTotals[3].value = 100;
    
        asm[4].value = 'Quiz 3';
        weights[4].value = 10;
        totalScores[4].value = 40;
        totalTotals[4].value = 100;
    } 

    console.log('click', exampleClicks)

    

    reload()
}


