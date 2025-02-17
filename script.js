function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fYear = document.getElementById('txtyear')
    var result = document.getElementById('result')
    var img = document.createElement('img')
    img.setAttribute('id','picture')

    if (fYear.value.length == 0 || fYear.value > year)  {
        window.alert ('[ERRO] Verifique os dados e tento novamente!')
    } else {
        var fsex = document.getElementsByName('optionSex')
        var age = year - Number(fYear.value)
        var gender = ''

        if (fsex [0].checked) {
            gender = 'Homem'
            document.body.style.backgroundColor = '#a3b18a'
            if (age >=0 && age < 10) {
                //criança
                img.setAttribute('src','assets/menino.jpg')
            } else if (age < 21 ) {
                // jovem
                img.setAttribute('src','assets/homemjovem.jpg')
            } else if (age < 50) {
                //adulto
                img.setAttribute('src','assets/homemadulto.jpg')
            } else {
                // idoso
                img.setAttribute('src','assets/homemidoso.jpg')
            }
        } else {
            gender = 'Mulher'
            document.body.style.backgroundColor = '#cdb4db'
            if (age >=0 && age < 10) {
                //criança
                img.setAttribute('src','assets/menina.jpg')
            } else if (age < 21 ) {
                // jovem
                img.setAttribute('src','assets/mulherjovem.jpg')
            } else if (age < 50) {
                //adulto
                img.setAttribute('src','assets/mulheradulta.jpg')
            } else {
                // idoso
                img.setAttribute('src','assets/mulheridosa.jpg')
            }
        }
        result.innerHTML = `Detectamos ${gender} com ${age} anos.`
        result.appendChild(img)
    }
        
}