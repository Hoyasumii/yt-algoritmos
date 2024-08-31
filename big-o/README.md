# Big O Notation - Descubra o quão eficiente o seu código é

- Fala pessoal, beleza? Mais um vídeo do canal, e como no vídeo anterior eu falei sobre a criação de componentes em React, eu gostaria de iniciar também, uma saga sobre algoritmos, que serve tanto para back-end, quanto pra front. É a base da nossa profissão lidar com algoritmos e eu espero que vocês gostem.
- E para começar, eu gostaria de falar sobre a notação de Big O, que é responsável por calcular o nível de performance de um código, ao determinar o número de operações que uma função possui de acordo com a sua entrada. 
- Antes de mais nada, vamos ver esse seguinte código:

![](./o(1).png)

- Você percebeu que essa é uma função de soma normal, e perceba que o número de operações que essa função vai executar é apenas uma. Diferentemente desse outro exemplo que vou te apresentar agora:

![](./o(n).png)

- Você percebe que, ao invés de pedir dois números para fazer a operação, ele vai pedir um Array de números, que serão lidos, um por um, e reduzidos a apenas um único número, que representa a soma deles. E onde que o Big O Notation entra na conversa?
- Voltando para o primeiro exemplo, o número de operações para executar a soma é apenas 1. Mesmo que ele precise de dois números para executar, ainda sim, é apenas 1 operação. Já no segundo exemplo, o número de operações para executar a soma vai de 0 ao infinito, sendo zero a ideia de que eu não forneci nenhum número nesse Array, e infinito, porque eu não sei o tamanho desse array, então vamos chamar de n.
- Na notação de Big O, o nosso primeiro exemplo vai possuir a notação de O(1), pois não precisamos processar nenhuma coleção para realizar a soma, diferentemente do segundo exemplo, que vai receber a notação de O(n).
- Antes de continuarmos, eu não vou mostrar todos as notações de Big O, pois esse não é o objetivo do vídeo. O objetivo do vídeo é te explicar o que seria a Big O Notation, suas principais notações, e como usa-lá a seu favor.
- Saindo um pouco do exemplo de soma entre dois números, vamos agora para o seguinte contexto: Num Array ordenado e que não necessariamente tenha a progressão de n + 1, precisamos encontrar um valor X nele. Como faríamos?
- Normalmente, a primeira escolha que você vai ter é percorrer um por um, até encontrar, usando algo como um for, um while, ou até mesmo, algum método embutido para procurar esse item, certo?
- Por mais que num Array pequeno essa escolha seja válida, não necessariamente ela seja a melhor escolha. Porque, se o array tem 1 milhão de itens, teríamos que percorrer esses 1 milhão de itens para descobrir que esse item está no fim do array?
- Não, e eu vou te explicar como podemos solucionar esse problema.
- Imagine, que temos um Array de 1 milhão de itens, que vai de 0 a 999.999, e queremos achar em qual posição está o item de valor 200.000. Para facilitar a nossa busca, podemos pegar as posições iniciais e finais desse Array, e tirar uma média, que no caso seria 499.999.
- E agora, se compararmos 200.000 com 499.999, teremos algo interessante. Percebemos que o nosso valor desejado é menor que o valor da média, ou seja, não precisamos percorrer todos os itens do array para descobrirmos a posição desejada.
- Agora, nós faremos isso novamente, só que tendo o valor máximo de 499.999, e vamos tirar a média, que seria 249_999. Comparando novamente esse valor com o valor desejado, percebemos que 200_000 ainda é menor que 249_999, precisando novamente reajustar o valor da posição máxima. E ao definirmos a nova média, que seria 124.999, ao compararmos com o valor desejado, você percebe que o valor desejado dessa vez é maior que o da média, precisando agora reajustar o valor do mínimo. E vamos dar sucessão até que encontremos o nosso valor, que seria 200.00.
- Indo até o código, percebemos que precisamos fazer apenas 19 operações para descobrir a posição desejada? Interessante, né? Se fôssemos para a busca normal, teríamos que percorrer N passos, sendo N o tamanho desejado.
- Mas e agora? Qual seria o número de operações para esse método de busca que eu te mostrei chamado Busca Binária?
	1. O(1)
	2. O(n)
	3. Não sei
1. Bem, para a sua informação, não é nenhuma delas. A Big O Notation da busca binária é O(log n), ou seja, ela não é nem constante, nem linear. Ela é logarítmica. Mas beleza, então em todos os casos que eu precise fazer uma busca, eu usaria uma busca binária? Não exatamente. Depende muito de quando você vai usar
- Você percebeu que, por mais que tenhamos feito muitas operações, conseguimos reduzir mais de 100.000 passos para procurar um valor, certo? E isso é ótimo, mas é importante salientar que, em casos onde o Array é pequeno, a busca binária talvez não seja a melhor alternativa, pois consultaríamos índices que não são necessários e aplicaríamos uma quantidade e lógica bem superior se comparar com a lógica de iteração e comparação de um find.
- Para demonstrar melhor, eu vou mostrar um gráfico:
![[Pasted image 20240829201801.png]]
- Este gráfico mostra a complexidade de tempo de diferentes algoritmos em função do tamanho do dado de entrada. E inicialmente, percebemos que, por mais que a notação O(log n) comece sendo mais complexa que a O(n), com o crescimento do número de passos, ela vai se tornando menos e menos complexa. 
- Além disso, também é importante perceber que, apesar de eu ter falado apenas das notações O(1), O(n) e O(log n), existem várias outras notações, que inclusive nem sequer estão nesse gráfico. Mas no caso eu teria que decorar todas essas notações? Não exatamente, elas servem pra você ter uma ideia, mas em vários casos, haverão notações que se aplicam à sua lógica, como O(n * m), por exemplo.
- Mas agora, a pergunta que não quer calar: Como eu usaria as Big O Notation para otimizar o meu código? Por mais que no início não seja muito fácil de como você pode aplicar o que você aprendeu, ao longo dessa saga eu planejo falar mais e mais sobre esses algoritmos e como usá-los. Inclusive, eu pretendo juntar sempre as sagas que eu for criando, para ser um conteúdo que se auto-completa, sabe? Eu acho que por mais que a frequência do canal seja de um vídeo por semana, se os vídeos se auto-completarem, eles farão sentido e terá sentido no atraso.
- Vale a pena ressaltar que, essa saga de algoritmos serve tanto para a minha saga de Web, quanto a minha futura saga de API, e isso por si só é bastante interessante, pois é uma base universal para todos os programadores.
- Acredito que por hoje é só, pois não faz sentido eu prolongar muito sobre um tópico que é muito novo para você sem exemplos e práticas, e eu recomendo muito que você tome o ponto de partida, para que você adentre, e conheça mais sobre esse mundo da tecnologia.
- Pessoal, muito obrigado e até a próxima!
