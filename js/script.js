$(document).ready(function () {
    let pontos_usuario = pontos_pc = 0

    $('#iniciar').on('click', function (e) {
        e.preventDefault
        let valor_usuario = parseInt($('#valor_usuario').val()) 
        if (valor_usuario == '') {

            alert('Digite um valor no campo!')

        } else {

            if (valor_usuario >= 0 && valor_usuario <= 10) { // Verifica se o valor está entre 0 e 10

                valor_pc = Math.round(Math.random() * 10)  // Valor aleatório entre 0 e 10
                resultado = valor_usuario + valor_pc

                $('.resultado span#valor1').html(valor_usuario)
                $('.resultado span#valor2').html(valor_pc)
                $('.resultado span#result').html(resultado)

                if(resultado % 2 == 0){
                    pontos_usuario++
                    $('#valor_ponto_user').html(pontos_usuario)
                }else{
                    pontos_pc++
                    $('#valor_ponto_pc').html(pontos_pc)
                }

            } else {
                alert('Digite um valor entre 0 e 10')
            }

        }
    })

})