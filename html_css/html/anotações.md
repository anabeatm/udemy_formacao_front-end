# HTML

## a anatomia das tags

- é o elemento principal do html;
- toda tag tem um nome e um propósito, a tag p serve para parágrafos;
- precisamos envolver uma tag com sinais de maior e menor: ```<p>```;
- e no meio, colocar seu conteúdo: ```<p> texto </p>```;

## estrutura base do html

- DOCTYPE: declara a versão do html;
- html: envolve todo o código de html;
- head: colocamos todas as configurações de um site, como a importação de css e o título da página (meta tags);
- body: é onde todos os elementos visíveis estão.

## títulos

- títulos são conhecidos como headings;
- utilizamos principalmente para separar seções;
- o nome da tag é h*, onde* pode ser um valor de 1 a 6;
- o maior título é o h1, e também o mais importante, colocamos apenas um por página;
- a importância deve estar conectada com o propósito da nossa página.

## parágrafos

- utilizamos para inserir textos maiores;
- tag é ```<p>```;
- cada parágrafo começa uma nova linha, e este comportamento acontece com todas as tags de bloco;

## tags sem conteúdo

- possuem recursos como quebrar linha;
- podemos utilizar a tag ```<br/>``` - break
- para uma linha horizontal, temos ```<hr/>```
- eles também introduzem o conceito de self closing tags, onde a tag não possui uma outra tag de fechamento.

## comentários

- `ctrl + ;`

```html
<!-- Comentário -->
```

## atributos

- atributos podem ser utilizados para adicionar funcionalidades as tags;
- a tag ```<a>``` (âncora) é responsável por nos direcionar a uma nova página ou site;
- colocamos no atributo chamado href. exemplo: ```<a href=”<https://www.google.com”>Google></a>```

## abrir link em nova aba

- com um atributo podemos fazer o link abrir em uma nova aba;
- isso é utilizado frequentemente para redirecionar a outro site;
- por exemplo: um link que leva a um e-commerce que não seja do nosso domínio;
- utilizamos o atributo target com o valor _blank;

## imagens no html

- nós podemos inserir imagens no nosso site com a tag ```<img>```;
- o caminho relativo até a imagem é inserido no atributo ```<src>```;
- normalmente colocamos a imagem numa pasta chamada img ou assets, para fins de organização;
- a imagem é uma self closing tag.

## atributo alt

- nas tags de imagens temos um atributo chamado alt;
- nós inserimos nele um texto que descreve a imagem;
- todas as imagens devem ter este atributo configurado;
- este recurso é importante para acessibilidade.

## listas não ordenadas

- listas são importantes;
- podemos criar um menu a partir de uma lista;
- as listas não ordenadas são criadas pela tag ```<ul>```;
- cada item na lista é representado pela tag ```<li>```.

## listas ordenadas

- quando há um procedimento ou passos a serem seguidos. exemplo: receita de algum alimento;
- utilizamos a tag ```<ol>```;
- e os itens continuam sendo a tal ```<li>```;

## tabelas

- exibir dados que podem ser categorizados em colunas;
- tabelas são complexas em html e não tão utilizadas;
- precisamos da tag ```<table>```;
- cada linha é criada em uma tag ```<tr>```, e os dados ficam em ```<td>```;
- no cabeçalho utilizamos a tag ```<th>```.

```html
<table> <!-- Tabela -->
    <tr> <!-- Linha da Tabela -->
        <th>ID:</th> <!-- Cabeçalho da Tabela (ID) -->
        <th>Nome:</th> <!-- Cabeçalho da Tabela (Nome) -->
        <th>Profissão</th> <!-- Cabeçalho da Tabela (Profissão) -->
    </tr>
    <tr> <!-- Linha da Tabela -->
        <td>1</td> <!-- Dados da Tabela (1) -->
        <td>Matheus</td> <!-- Dados da Tabela (Matheus) -->
        <td>Programador</td> <!-- Dados da Tabela (Programador) -->
    </tr>
    <tr> <!-- Linha da Tabela -->
        <td>2</td> <!-- Dados da Tabela (2) -->
        <td>Alexa</td> <!-- Dados da Tabela (Alexa) -->
        <td>Engenheira Civil</td> <!-- Dados da Tabela (Engenheira Civil) -->
    </tr>
</table>

```

## a tag ```<div>```

- a tag ```<div>``` é utilizada para criar divisões/seções no nosso site;
- podendo criar elementos menores, como os cards;
- o principal propósito é: encapsular elementos que estão conectados entre si.

## criando a estrutura do HTML

- podemos criar toda a estrutura básica do vs code com um simples comando: `! + tab` .
