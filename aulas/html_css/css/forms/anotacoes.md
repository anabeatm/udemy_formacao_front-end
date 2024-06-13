# Formulários (Forms)

## o que é um formulário

    - forms tem o papel de receber dados do usuário e enviar para um servidor;
    - podemos validar dados;
    - as tags mais utilizadas são: `form, label` e `input`;
    - a tag form cria o formulário e o delimita;
    - label descreve os inputs;
    - o input é a tag em que inserimos dados, temos vários tipos como: number, email, text, etc,.

## criando um formulário

    - para criar um formulário, precisa-se da tag form, que encapsula todos os elementos do formulário;
    - dentro dela, temos labels e inputs, mas podemos ter outras tags como divs;
    - a tag input tem um atributo chamado type, que é onde definimos o propósito do input;
    - um input do tipo text, recebe dados de texto.

## atributos da `tag form`

    - a tag form tem doi atributos, que geralmente, são:
        - action: o arquivo/página que os dados serão enviados;
        - method: GET ou POST, receber dado ou enviar dado;

## atributo `<name>`

    - utilizamos o atributo name para configurar os nossos inputs;
    - o valor é ligado ao propósito do input, a sua categoria;
    - exemplo: um input que recebe a idade de um usuário, pode ter um name com o valor de age/idade;
    - este atributo é utilizado para pegar o valor quando o form é enviado para o servidor.

## atributo `<label>`

    - a tag label é um atributo;
    - sendo utilizada para linkar com um input, o nome do atributo é for;
    - o valor deve ser o mesmo que o atributo name do atributo que corresponde aquela label;
    - utilizamos for por propósitos semânticos.

## enviando `form`

    - podemos enviar os dados do form para o servidor através de um botão de submit;
    - o botão também é um input, porém mudamos o type para submit;
    - quando o usuário clicar no botão, o processamento do form acontecerá;
    - os dados serão enviados ao servidor através de uma requisição HTTP;
    - onde é necessário uma integração back-end.

## elemento `select`

    - a tag select tem as opções representadas por tags de option;
    - select também tem um atributo name;
    - o value estará em cada uma das options, e é isso que receberão no lado do servidor;
    - então não temos duas tags para criar um elemento de seleção: select e option.

## atributo `selected`

    - podemos iniciar o input de select com uma opção selecionada;
    - para isso, a option precisa ter o atributo selected.

## múltiplas opções

    - podemos criar um select que nos permite mais de uma option selecionada;
    - precisamos apenas inserir o atributo multiple na tag select.

## campo `textarea`

    - a tag textarea é semelhante ao input text;
    - utilizamos para textos maiores;
    - nos permitindo uma área maior para digitar e verificar o texto que digitamos.

## `fieldset` e `legend`

    - fieldset é uma tag para agrupar inputs;
    - legend é como uma label, que descreve os inputs agrupados;
    - utiliza-se esta tag para conectar dois ou mais inputs que tenham o mesmo sentido. por exemplo: nome e sobrenome.

## `datalist`

    - datalist é como um select, porém autocomplete;
    - podemos pesquisar por possíveis valores para preencher o input;
    - ou selecionar alguma opção por meio de uma lista;
    - as opções são linkadas por um atributo chamado list.

## input para senhas

    - se nós estamos esperando uma senha do usuário, podemos utilizar a tag input;
    - porém no atributo `type`, colocaremos `password`;
    - e então o texto passa a ser exibido com *, para mascarar os dígitos.

## resetando formulários

    - podemos reiniciar todos os campos do form;
    - isso é feito através de um input do tipo `reset`;
    - ele é um botão, que ao ser clicado, limpa o form.

## input radio

    - este input é utilizado para selecionar apenas uma opção de várias possibilidades. por exemplo: o modelo do carro que estamos comprando;
    - não é possível escolher mais de um, então há a necessidade da decisão entre uma das opções.

## `checkbox`

    - o checkbox é similar ao radio;
    - temos que selecionar uma ou mais opções, e também cancelar a seleção de uma opção.

## input de datas

    - o input do tipo date é utilizado para selecionar uma data;
    - temos um calendário que nos auxilia para datas passadas ou futuras;
    - podemos também preencher o valor digitando.

## enviando arquivos

    - o input de arquivos pode ser criado com o type igual file;
    - assim podemos enviar um arquivo ao servidor.

## input para números

    - configurando o type para number temos um input que só aceita dígitos;
    - este possui setas, que nos permite alterar o número através de cliques.

## input para emails

    - o input de e-mail é similar ao de texto;
    - porém quando enviamos o formulário, temos uma validação que checa se o texto tem o padrão de um e-mail.
    - verificando o @, por exemplo.

## atributo `value`

    - com o value, podemos definir um valor ao input alvo;
    - como se o usuário já tivesse preenchido algo.

## atributo `disabled`

    - o atributo disabled é utilizado para bloquear um input;
    - não podendo mais digitar neste input.

## `placeholder`

    - placeholder pode-se adicionar dicas para os usuários do sistema;
    - será exibida no próprio input;
    - ao começarmos a preencher com algum valor, a dica some e o nosso valor sobrepõe.

## atributo `required`

    - o atributo required força o preenchimento de algum campo;
    - se tentarmos enviar o form sem um valor no campo com required, receberemos um alerta da página;
    - é um tipo de validação HTML.
