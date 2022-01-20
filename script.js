    function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div.res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
        gen = 'Homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adoleh.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
    } else if (fsex[1].checked) {
    gen = 'Mulher'
        if (idade >= 0 && idade < 13) {
            //criança
            img.setAttribute('src', 'menina.png')
        } else if (idade < 21) {
            //adolescente
            img.setAttribute('src', 'adolem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
     res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    res.appendChild(img)
    }
}