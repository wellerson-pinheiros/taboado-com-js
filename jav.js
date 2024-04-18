function calcular(){
    let nb = window.document.getElementById('taboada')
    let tb = window.document.getElementById('sec')
    
        if(nb.value.length == 0){
            alert('erro por favor digitar um numero valido')
        } else {
            let nub = Number(nb.value)
            tb.length = ''
            let cont = 1
            for (let cont  = 1;cont <= 10;cont ++){
                let item = document.createElement('option')
                item.text =`${nub} x ${cont} = ${nub*cont} `
                tb.appendChild(item)
        }}
      
    
}