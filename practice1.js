const my_input = document.getElementById('my_input');

const searchFun = () => {
    let inputVal = my_input.value.toUpperCase();
    // console.log(inputVal);

    let my_table = document.getElementById('my_table');
    let tr = my_table.querySelectorAll('#my_table tr');
    // console.log(tr)
    tr.forEach((item_tr, idx) => {
        // console.log(item_tr);
        if (idx != 0) {
            let td = item_tr.querySelectorAll('td');
            // console.log(td[0].innerHTML);
            let textValue = td[0].textContent || td[0].innerHTML;
            let textValueUpper = textValue.toUpperCase();
            // console.log(textValueUpper.indexOf(inputVal))
            // console.log(textValueUpper.indexOf(inputVal));
            // console.log(textValueUpper.indexOf(inputVal))
            if(textValueUpper.indexOf(inputVal)>-1){
                item_tr.style.display = '';
            }else{
                item_tr.style.display = 'none';
            }
        }

    })

}




my_input.addEventListener('keyup', searchFun)