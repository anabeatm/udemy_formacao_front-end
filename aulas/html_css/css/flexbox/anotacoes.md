# Flexbox

## - conceito

    - flexbox é um valor da propriedade display;
    - esta é a maneira mais utilizada para acondicionar elementos em um container;
    - temos diversas regras dentro do flex;
    - o flex deve ser considerado no elemento pai, e os elementos filhos serão os movimentados;
    - os elementos filhos também podem ter regras específicas.

## - aplicando flexbox

    - para aplicar o flex, vamos precisar de uma estrutura base;
    - consiste em um container e elementos filhos dentro do container;
    - colocamos a regra display com o valor de flex no container, e os elementos estarão seguindo o fluxo flex;
    - com o flex, todos os elementos se comportam parecido com os elementos inline.

## - `flex direction`

    - podemos mudar o comportamento inline do flex (chamado de `row`);
    - alterando o `flex-direction` para `column`, teremos agora os itens se comportando como elemento de bloco;
    - o valor padrão de `direction` é `row`.

## - `flex wrap`

    - o flex tenta colocar todos os elementos na mesma linha por padrão;
    - porém há situações que queremos x elementos por linha;
    - para isso acontecer, devemos aplicar a regra `flex-wrap` com o valor de `wrap` ;
    - assim, as linhas respeitarão a largura dos elementos.

## - `justify content`

    - com justify-content é possível mudar como o conteúdo é posicionado no eixo horizontal;
    - temos alguns valores interessantes, por exemplo: centralizar os elementos na horizontal, basta colocar o valor de center.

## - posicionamento vertical

    - com o `justify-content` modificamos os elementos na horizontal, já no `align-items`, nos permite mudá-los na vertical;
    - a propriedade tem vários valores, como o center.

## - `gap`

    - gap é uma regra que serve para colocar espaço entre elementos que estão no flex;
    - nós especificamos a medida em px, por exemplo, e este valor é adicionado entre cada um dos elementos.

## - `order`

    - com a order, podemos mudar a ordem dos elementos;
    - esta propriedade é utilizada nos elementos filhos.

## - `grow`

    - com a regra `flex-grow` , podemos mudar a proporção de um ou mais elementos filhos;
    - a width precisa estar sem valor, como automática;
    - exemplo: se colocarmos grow como 2, o elemento vai crescer duas vezes mais que os outros quando estiver se adaptando ao container.

## - `basis`

    - a regra `flex-basis` configura a largura base do elemento;
    - nós podemos trabalhar com `basis` e `grow` juntas;
    - `grow` vai preencher toda a largura que `basis` deixar vazia.

## - `shrink`

    - `shrink` é o oposto do grow;
    - quando o utilizamos, precisamos manter o tamanho dos outros elementos, então o elemento do shrink diminui seu tamanho para manter o dos outros;
    - nota: usamos esta regra em conjunto de basis e grow.

## - flex-shorthand

    - utilizando apenas flex, conseguimos configurar grow, shrink e basis;
    - colocamos os valores nesta ordem: `flex: 2 1 100px;` ;
    - ou seja, grow = 2, shrink = 1 e basis = 100px.

## - auto-alinhamento

    - a regra align-self alinha um elemento diferente dos demais;
    - podemos centralizar um elemento enquanto os outros seguem a regra de alinhamento do container.
