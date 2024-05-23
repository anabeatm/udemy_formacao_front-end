# maneiras de adicionar CSS

- **inline**: quando os estilos são adicionados por um atributo;
- **internal**: quando o css é adicionado na tag ```<head>```;
- **external**: quando o css é adicionado através de um arquivo externo, e depois importado no html;
- geralmente usamos o método external, quando houver a opção.

## a anatomia do css

- aplicamos css a um elemento;
- primeiramente devemos selecionar o elemento, isso pode ser feito através da tag do elemento;
- depois precisamos colocar as propriedades e seus valores;
- se quisermos mudar a cor de algo - por exemplo -, utilizamos: color: red;
- `nome da propriedade, dois pontos, valor, ponto e vírgula`.

## inline css

- pode ser adicionado sem selecionar o elemento, porque é um atributo diretamente inserido no mesmo;
- o elemento já está selecionado;
- o atributo style nos permite escrever regras de css;
- exemplo: style=”color: red;”

## múltiplas regras

- podemos adicionar várias regras de css;
- elas podem ser separadas por ponto e vírgula;
- é possível fazer uma união de estilos, dar um design melhor ao elemento.

## internal css

- o css interno é uma técnica melhor que o inline, vamos colocar todos os estilos na tag ```<head>```;
- as regras precisam também estar entre a tag ```<style>```;
- e através desta maneira, é necessário selecionar o elemento alvo:

```p{
color: red;
}
```

## external css

- para adicionar css como external, precisa-se criar um arquivo .css;
- geralmente ficam em uma pasta css;
- é importada através da tag ```<link>```;
- as regras que estão no arquivo são aplicadas no html.

## ordem do css

- o css é carregado a partir de uma ordem;
- se temos estilos misturados (inline, internal e external), qual será aplicado?
- todos eles, mas com a seguinte ordem: inline > internal = external > padrão do navegador;
- esta regra funciona quando temos estilos em um mesmo elemento;
- interno e externo tem a mesma prioridade, a última regra ganha a corrida.

## múltiplos arquivos de css

- é possível ter mais de uma folha de estilo no nosso projeto;
- precisamos apenas importar todas elas na tag ```<head>```;
- os arquivos importados por último tem mais prioridade;
- é uma boa prática, pois possibilita a divisão de CSS por páginas.

## comentários no css

- comentários do css são como os de html, utilizamos para descrever algo no código;
- caso o código seja inspecionado, os comentários também serão exibidos;
- a sintaxe é: `/* algum comentário /*` ;

```css
h1 {
	font-family: sans-serif; /* Vai definir a fonte do título */
}

```

## sobre classes e ids

- classes e ids são atributos de tags do html, porém estão diretamente relacionados no css;
- podemos especificar elementos específicos com eles;
- ids são utilizados para elementos únicos;
- e classes servem para um ou mais elementos, geralmente utilizadas em conjuntos de elementos;

## classes

- as classes são inseridas através de um atributo de html;
- o valor do atributo é o nome da classe - escolha nossa;
- por exemplo: temos um botão que aparece x vezes no projeto, podemos colocar uma classe btn nele;
- ou seja, os padrões de estilo desses botões podem ser transmitidos através desta classe para os demais;
- o seletor fica: `.<nome_da_classe>`

## ids

- também são atributos do html;
- podemos escrever qualquer coisa como valor, será o nome do id;
- id são únicos, ou seja, não repetimos o mesmo nome na mesma página;
- o html não proíbe disso, mas é uma má prática;
- o seletor fica: `#<nome_do_id>`

## ordem de seletores

- e se a tag estiver com id e uma classe, o que acontece?
- há uma ordem, que é: id > classe > seletor de tag;
- id vai vencer todos os outros;
- regras que não entram em conflito serão aplicadas normalmente.

## as cores do css

- em css as cores são divididas em grupos, temos:
    - nomes de cor: como red ou blue - não muito utilizadas;
    - RGB: configuramos as tonalidades de red, green e blue;
    - Hexadecimal: uma união de letras e números que podem criar uma cor - maneira mais utilizada;
    - HSL: hue, saturation e lightness. mudando estes valores, temos uma cor.

## nomes das cores

- nós utilizamos muito essa maneira até agora, mas em projetos reais não é tão empregada;
- ela nos limita a apenas as cores com nomes existentes;
- o nome da cor consiste na utilização do nome real da cor como valor da propriedade.

## cores hexadecimais

- HEX ou Hexadecimal é a abordagem mais utilizada;
- inserimos 6 dígitos, precedidos de uma #;
- os dois primeiros representam o tom de vermelho, depois o de verde e por fim o azul;
- os valores vão de 0 a 9 e A a F;
- 0 é o mais escuro e F é o mais claro;
- o valor de `#000` é a cor preta e `#FFF` a cor branca.
- mais sobre o HEX
    - se um valor for repetido 6 vezes, podemos escrever a cor de forma mais simples;
    - por exemplo, `#FFFFFF` podemos reescrever como `#FFF` ;
    - a mesma regra vale para `#112233` que pode ser reescrita como `#123`.

    ```html
    <p class="simple-hex">Hex simplicado</p>
    <p class="simple-hex-2">Hex simplicado</p>
    ```

    ```css
    .simple-hex {
    /*color: #333333; */
    	color: #333;
    }
    
    .simple-hex-2 {
    /*color: #AA55FF; */
    	color: #A5F
    }
    ```

## RGB

- RGB significa Red, Green e Blue;
- nós precisamos inserir a intensidade de cada com valores de 0 a 255;
- 0 é o mais escuro e 255 o mais claro;
- aplicamos RGB com a seguinte sintaxe: `rgb(0-255, 0-255, 0-255)`;
- o primeiro valor representa o vermelho, depois verde e, por fim, azul;
- para criar a cor verde, inserimos: `rgb(0, 255, 0)`.
- RGBA
    - podemos criar cores com o RGBA, onde A vem de alpha;
    - a alteração dele muda a opacidade da cor;
    - os valores possíveis são de 0 a 1;
    - sendo 0 transparente e 1 totalmente visível;
    - a sintaxe é: `rgb(0-255, 0-255, 0-255, 0-1)` .

## HSL

- hsl é um acrônimo para hue, saturation e lightness;
- podemos definir uma cor com: `hsl(0-255, 0-100%, 0-100%)`;

## background

- quase todo elemento tem um background e podemos mudar a cor dele;
- todas as regras de cores podem ser aplicadas em cores de background;
- a regra é: `background-color: ‘cor’`;
- as regras de cor de fundo e cor de fonte podem ser utilizadas juntas.
- opacidade do background
    - podemos alterar a opacidade de uma cor de fundo com CSS;
    - a regra é a `opacity`;
    - sendo 1 totalmente visível e 0 remove a cor;
    - com esta regra mudamos também a opacidade dos elementos dentro do elemento que alteramos a opacidade.
- RGBA
    - se não quer aplicar a opacidade para elementos filhos, precisa utilizar o RGBA em vez de opacity;
    - alterando o valor de alpha, temos a opacidade colocada apenas na cor de fundo;
    - então preservamos o conteúdo e alteramos o background.
- imagem
    - podemos inserir imagens no background dos elementos;
    - a regra é: `background-image: url(”pasta/imagem.jpg”)` ;
    - geralmente a imagem fica em outra pasta, então temos que voltar um diretório;
    - isso pode ser feito com o símbolo `..` .
    - centralizando a imagem de background
        - a centralização pode ser feita com dias regras:
            - `background-position`, com o valor de center;
            - `background-size` com o valor de cover;

## box model

- box model é uma entidade que é criada em todo elemento HTML;
- ela consiste em quatro partes: altura, largura, padding, border e margin;
- todas elas podem ser alteradas por css;
- alguns elementos do html já vem com valor nestas regras.

## largura e altura

- a altura e largura são o core do box model;
- estas propriedades consistem no conteúdo do elemento;
- podemos alterara as duas e mudar o tamanho do elemento na tela;
- alguns elementos do html - blocks elements - já vem com 100% de largura, ou seja, preenchendo a tela toda na horizontal.
