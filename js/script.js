$(document).ready(function () {

    $('#iniciar').css({opacity: '0'})
    $('#reiniciar').on('click', function (e) {
        e.preventDefault
        $('#iniciar').css({opacity: '1'})
    })

    let pontos_usuario = pontos_pc = 0
    let pronto_iniciar = false

    $('#iniciar').hide()
    $('.campo_input').hide()


    $('#reiniciar').on('click', function (e) { // Ação de clique de Nova partida
        e.preventDefault

        if (!pronto_iniciar) { // Caso o botão ainda não foi apertado irá realizar essas funções
            $('#iniciar').show()
            $('.campo_input').show()
            $('#valor_usuario')
                .prop('disabled', false)
                .val('')
            $('.resultado').html('<span id="valor1">__</span> + <span id="valor2">__</span> = <span id="result">__</span>')

            pronto_iniciar = !pronto_iniciar // O jogo se torna pronto para iniciar

        }

    })


    $('#iniciar').on('click', function (e) {
        e.preventDefault
        let valor_usuario = parseInt($('#valor_usuario').val())
        if (valor_usuario == '') {

            alert('Digite um valor no campo!')

        } else if(valor_usuario != '' && pronto_iniciar) {

            if (valor_usuario >= 0 && valor_usuario <= 10) { // Verifica se o valor está entre 0 e 10

                $('#valor_usuario').prop('disabled', true)
                pronto_iniciar = !pronto_iniciar

                valor_pc = Math.round(Math.random() * 10)  // Valor aleatório entre 0 e 10
                resultado = valor_usuario + valor_pc // Soma os dois valores

                $('.resultado span#valor1').hide().html(valor_usuario).fadeIn(1000) // Apresenta o valor do usuário

<<<<<<< Updated upstream
                setTimeout(function () {
                    $('.resultado span#valor2').hide().html(valor_pc).fadeIn(1000) // Apresenta o valor do computador
                }, 1000)
                setTimeout(function () {
                    $('.resultado span#result').hide().html(resultado).fadeIn(1000) // Apresenta a soma dos dois valores
                }, 2000)

                setTimeout(function () {

                    if (resultado % 2 == 0) { // Verifica se o resultado deu par ou ímpar e soma os pontos do jogador que venceu
                        pontos_usuario++
                        $('.resultado').hide().html(resultado + ' é par! Você venceu!').fadeIn(500)
                    } else {
                        pontos_pc++
                        $('.resultado').hide().html(resultado + ' é ímpar! O computador venceu!').fadeIn(500)
                    }
                }, 3000)

                setTimeout(function () { // Imprime os pontos dos jogadores
                    $('#valor_ponto_user').html(pontos_usuario)
=======
                if (resultado % 2 == 0) {
                    pontos_usuario++
                    $('#valor_ponto_user').html(pontos_usuario)
                } else {
                    pontos_pc++
>>>>>>> Stashed changes
                    $('#valor_ponto_pc').html(pontos_pc)
                }, 4000)


            } else {
                alert('Digite um valor entre 0 e 10')
                $('#valor_usuario').val('')
            }

        }
    })

})