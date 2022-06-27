function add(mats_1, mats_2) {
    let input_1 = document.querySelector('#input_1').value;
    let input_2 = document.querySelector('#input_2').value;

    input_1 = Number(input_1);
    input_2 = Number(input_2);

    let result = [];
    
    for (i = 0; i < input_1; i++) {
        for (j = 0; j < input_2; j++) {
            if (result[i] === undefined) result[i] = []
            result[i][j] = mats_1[i][j] + mats_2[i][j];
        }

    }
    return result;
}

function diff(mats_1, mats_2) {
    let input_1 = document.querySelector('#input_1').value;
    let input_2 = document.querySelector('#input_2').value;

    
    input_1 = Number(input_1);
    input_2 = Number(input_2);

    let result = [];
    
    for (i = 0; i < input_1; i++) {
        for (j = 0; j < input_2; j++) {
            if (result[i] === undefined) result[i] = []
            result[i][j] = mats_1[i][j] - mats_2[i][j];
        }

    }
    return result;
}

function product(mats_1, mats_2) {
    let input_1 = document.querySelector('#input_1').value;
    let input_2 = document.querySelector('#input_2').value;
    
    input_1 = Number(input_1);
    input_2 = Number(input_2);
    
    let result = [];

    for (let i = 0; i < input_1; i++) {
        for (let j = 0; j < input_1; j++) {
            if (result[i] === undefined) result[i] = []
            result[i][j] = 0;
            for (let k = 0; k < input_1; k++) {
                result[i][j] += mats_1[i][k] * mats_2[k][j];

            }
        }

    }
    return result;
}

function start() {
   
    let display = document.querySelector('#form2')


    let body = document.querySelector('body');
    body.style.height = '110%';


    let input_1 = document.querySelector('#input_1').value;
    let input_2 = document.querySelector('#input_2').value;


    input_1 = Number(input_1);
    input_2 = Number(input_2);


    if (isNaN(input_1) && isNaN(input_2)) {
        alert("Please Enter Valid Rows And Columns")


    }
    else if (input_1 == input_2) {
      
        document.querySelector('#mat_1').innerHTML = "";
        for (let i = 0; i < input_1; i++) {
            for (let j = 0; j < input_2; j++) {

                document.querySelector('#mat_1').innerHTML += (`<input type="number" placeholder="0" required id="mat1_${[i]}${[j]}" class="vals">`)
            }
            document.querySelector('#mat_1').innerHTML += ("<br>")

        }

        document.querySelector('#mat_2').innerHTML = "";
        for (i = 0; i < input_1; i++) {
            for (j = 0; j < input_2; j++) {

                document.querySelector('#mat_2').innerHTML += (`<input type="number" placeholder="0" required id="mat2_${[i]}${[j]}" class="vals">`)
            }
            document.querySelector('#mat_2').innerHTML += ("<br>")

        }
       
        console.log("No.of rows are : ", input_1);
        console.log("No.of columns are : ", input_2);

        display.style.display = 'block';

    }

    else {
        alert("Please Enter Same No. Of Rows And Columns");
    }
}

function calc() {

    let display = document.querySelector('#result')
    display.style.display = 'block'

    let input_1 = document.querySelector('#input_1').value;
    let input_2 = document.querySelector('#input_2').value;
    let select = document.getElementById('select');
    let func = select.options[select.selectedIndex].text;
    let sign = document.getElementById('sign');
    
    input_1 = Number(input_1);
    input_2 = Number(input_2);
   
    let mats_1 = [];
    let mats_2 = [];
    let result = [];
     
    for (let i = 0; i < input_1; i++) {
        for (let j = 0; j < input_2; j++) {
            if (mats_1[i] === undefined) mats_1[i] = []
            mats_1[i][j] = Number(document.getElementById(`mat1_${[i]}${[j]}`).value);
        }

    }
    
    for (i = 0; i < input_1; i++) {
        for (j = 0; j < input_2; j++) {
            if (mats_2[i] === undefined) mats_2[i] = []
            mats_2[i][j] = Number(document.getElementById(`mat2_${[i]}${[j]}`).value);
        }

    }
    if (func === "Multiplication") {
        sign.innerHTML = "X"
        result = product(mats_1, mats_2)

        document.querySelector('#result').innerHTML = "";
        for (let i = 0; i < input_1; i++) {

            for (let j = 0; j < input_2; j++) {
                document.querySelector('#result').innerHTML += (`<strong id="div_${i}${j}" class="value" style="text-align:center;"></strong>`)

            }
            document.querySelector('#result').innerHTML += ("<br>")
        }

        for (i = 0; i < input_1; i++) {
            for (j = 0; j < input_2; j++) {
                document.getElementById(`div_${i}${j}`).innerText += result[i][j];
            }

        }
        return;
    }
    else if (func === "Addition") {
        sign.innerHTML = "+"
        
        result = add(mats_1, mats_2);

        document.querySelector('#result').innerHTML = "";
        for (let i = 0; i < input_1; i++) {

            for (let j = 0; j < input_2; j++) {
                document.querySelector('#result').innerHTML += (`<strong id="div_${i}${j}" class="value" style="text-align:center;"></strong>`)

            }
            document.querySelector('#result').innerHTML += ("<br>")
        }

        for (i = 0; i < input_1; i++) {
            for (j = 0; j < input_2; j++) {
                if (result[i] === undefined) result[i] = []
                document.getElementById(`div_${i}${j}`).innerText += result[i][j];
            }

        }
        return;
    }
    else if (func === "Subtraction") {
        sign.innerHTML = "-"
        
        result = diff(mats_1, mats_2);

        document.querySelector('#result').innerHTML = "";
        for (let i = 0; i < input_1; i++) {

            for (let j = 0; j < input_2; j++) {
                document.querySelector('#result').innerHTML += (`<strong id="div_${i}${j}" class="value" style="text-align:center;"></strong>`)

            }
            document.querySelector('#result').innerHTML += ("<br>")
        }

        for (i = 0; i < input_1; i++) {
            for (j = 0; j < input_2; j++) {
                document.getElementById(`div_${i}${j}`).innerText += result[i][j];
            }

        }
        return;
    }
    else {
        result = "selcet a valid function"
    }



    console.log(mats_1);
    console.log(mats_2);
    console.log(result);
    return;
}