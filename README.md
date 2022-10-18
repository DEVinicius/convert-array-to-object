# Conversor de Array -> Objeto

<p>Esse projeto tem a finalidade de resolver o seguinte problema</p></br>
<p><strong>Imagine</strong> o seguinte cenário: Você utiliza uma biblioteca para comunicação com um banco de dados, por exemplo, oracle. Fazendo uso da biblioteca oracledb, ao realizar um select, essa lib nos retornará um vetor (dentro desse vetor, mais um vetor, contendo cada conteudo desse select).</p>
<p>Dentro desse vetor, contendo o conteudo do select, os dados não estarão tipados, nem nomeados. Haverá apenas o resultado da consulta.</p>
<p>Nos vem a tarefa de transformar esse vetor de resultados, contendo varios dados, em algo tipado e de facil compreensão. Sem precisar de forma clara numerar cada item do vetor</p>
<p>Transformando:</p>

``` 
[
    [
        "Garrafa",
        "R$ 12,50",
        "789122312312312",
        9
    ],
    [
        "Xicara",
        "R$ 4,50",
        "7812312312312",
        8
    ],
    [
        "Caixa de som",
        "R$ 9,00",
        "8123123120371232",
        6
    ]
]
```

Para: 
```
[
  {
    name: 'Garrafa',
    price: 'R$ 12,50',
    barCode: '789122312312312',
    quantity: 9
  },
  {
    name: 'Xicara',
    price: 'R$ 4,50',
    barCode: '7812312312312',
    quantity: 8
  },
  {
    name: 'Caixa de som',
    price: 'R$ 9,00',
    barCode: '8123123120371232',
    quantity: 6
  }
]
```