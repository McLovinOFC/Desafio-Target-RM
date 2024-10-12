Desafio-Target

3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

R:  K = 1, SOMA = 0, e INDICE = 12.
O loop é "enquanto K < INDICE". O valor de K vai aumentando a cada iteração
A cada iteração,  o valor de K é incrementado em 1 (K = K + 1), e depois o valor de SOMA recebe o valor de SOMA + K.
O loop continua até que K seja igual a 12, porque quando K atinge 12, a condição K < INDICE se torna falsa e o loop para.

partida: K = 1, SOMA = 0
Iteração 1: K = 2, SOMA = 0 + 2 = 2
Iteração 2: K = 3, SOMA = 2 + 3 = 5
Iteração 3: K = 4, SOMA = 5 + 4 = 9
Iteração 4: K = 5, SOMA = 9 + 5 = 14
Iteração 5: K = 6, SOMA = 14 + 6 = 20
Iteração 6: K = 7, SOMA = 20 + 7 = 27
Iteração 7: K = 8, SOMA = 27 + 8 = 35
Iteração 8: K = 9, SOMA = 35 + 9 = 44
Iteração 9: K = 10, SOMA = 44 + 10 = 54
Iteração 10: K = 11, SOMA = 54 + 11 = 65
Iteração 11: K = 12, SOMA = 65 + 12 = 77
Resultado:
Ao final do processamento, o valor da variável SOMA será 77.

4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, 9, 11, 13
b) 2, 4, 8, 16, 32, 64, 128
c) 0, 1, 4, 9, 16, 25, 36, 49
d) 4, 16, 36, 64, 100
e) 1, 1, 2, 3, 5, 8, 13
f) 2,10, 12, 16, 17, 18, 19, 20

Resumo dos próximos elementos
a) 9
b) 128
c) 49
d) 100
e) 13
f) 20

5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

R: Ligo o primeiro interruptor e deixo ele  ligado por um tempo suficiente para que a lâmpada aqueça
depois desligo  o primeiro interruptor e ligo o segundo interruptor, Vou até a sala onde estão as lâmpadas.

chegando na sala das lâmpadas:

A lâmpada que estiver acesa corresponde ao segundo interruptor (que eu deixei ligado).
A lâmpada que estiver desligada, mas quente corresponde ao primeiro interruptor (aquele que eu liguei primeiro e depois desliguei, permitindo que a lâmpada esquentasse).
A lâmpada que estiver desligada e fria corresponde ao terceiro interruptor (aquele que eu nunca liguei).
