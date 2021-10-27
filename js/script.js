$(document).ready(function () {
    let pontos_usuario = pontos_pc = 0
    let pronto_iniciar = false

    $('#iniciar').hide()
    $('.campo_input').hide()


    $('#reiniciar').on('click', function (e) {
        e.preventDefault

        if (!pronto_iniciar) {
            $('#iniciar').show()
            $('.campo_input').show()
            $('#valor_usuario')
                .prop('disabled', false)
                .val('')
            $('.resultado span#valor1').html('__')
            $('.resultado span#valor2').html('__')
            $('.resultado span#result').html('__')

            pronto_iniciar = !pronto_iniciar

        }

    })


    $('#iniciar').on('click', function (e) {
        e.preventDefault
        let valor_usuario = parseInt($('#valor_usuario').val())
        if (valor_usuario == '') {

            alert('Digite um valor no campo!')

        } else {

            if (valor_usuario >= 0 && valor_usuario <= 10) { // Verifica se o valor está entre 0 e 10

                $('#valor_usuario').prop('disabled', true)
                pronto_iniciar = !pronto_iniciar

                valor_pc = Math.round(Math.random() * 10)  // Valor aleatório entre 0 e 10
                resultado = valor_usuario + valor_pc

                $('.resultado span#valor1').hide().html(valor_usuario).fadeIn(1000)

                setTimeout(function () {
                    $('.resultado span#valor2').hide().html(valor_pc).fadeIn(1000)
                }, 1000)
                setTimeout(function () {
                    $('.resultado span#result').hide().html(resultado).fadeIn(1000)
                }, 2000)

                setTimeout(function () {

                    if (resultado % 2 == 0) {
                        pontos_usuario++
                        $('.resultado').hide().html(resultado + ' é par! Você ganhou!').fadeIn(500)
                    } else {
                        pontos_pc++
                        $('.resultado').hide().html(resultado + ' é ímpar! O computador ganhor!').fadeIn(500)
                    }
                }, 3000)
                setTimeout(function () {
                    $('#valor_ponto_user').html(pontos_usuario)
                    $('#valor_ponto_pc').html(pontos_pc)
                }, 4000)





            } else {
                alert('Digite um valor entre 0 e 10')
            }

        }
    })

})