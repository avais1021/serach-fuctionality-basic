const my_input = document.getElementById('my_input');

const searchFun = () => {
    let filter = my_input.value.toUpperCase();
    // console.log(filter)
    let my_table = document.getElementById('my_table');
    let tr = my_table.getElementsByTagName('tr');

        for(var i=0 ; i<tr.length ; i++){
            let td = tr[i].getElementsByTagName('td')[0]
            console.log(td);

            if(td){
           let textValue = td.textContent || td.innerHTML;
               let textValueUpper =  textValue.toUpperCase();
                console.log('textValue',textValueUpper);
                if(textValueUpper.indexOf(filter) > -1){
                    tr[i].style.display = "";
                }else{
                    tr[i].style.display="none";
                }
            }

        }
        // console.log(tr)
}

my_input.addEventListener('keyup' , searchFun);
