# Responsividade

## - o que é responsividade?

    - responsividade é a técnica de adaptar uma página web para vários tipos de dispositivos, ou seja, temos mudanças de css baseada na resolução;
    - detectamos o que o usuário está utilizando e adaptamos a nosso site a resolução;
    - as regras de css são as mesmas, porém dentro de um recurso chamado `media query` .

## - configurando a responsividade

    - primeiro vamos adicionar uma `meta tag` ao nosso `head`;
    - ele é: `<meta name="viewpoint" content="width=device-width, initial-scale=1.0">` ;
    - isso faz com que o conteúdo se adapte com os dispositivos;
    - adicionamos também uma escala de 1:1.

## - aplicando o `media query`

    - media query é o recurso que utilizamos para criar os breakpoints;
    - os breakpoints adaptam o nosso projeto para diferentes tipos de tela;
    - configuramos uma largura, e depois as regras começam a serem alteradas dependendo do tamanho da tela.

## - `media query` com `min-width`

    - se utilizarmos min-width em vez de max-width, a media query funciona ao contrário;
    - então podemos desenvolver projetos com uma técnica chamada mobile first;
    - os projetos que tem mais usuários mobile, geralmente, são feitos em mobile first.

## - breakpoints mais utilizados

    - estes breakpoints são utilizados frequentemente:
        - 600px pra baixo: celular;
        - 768px até 600px: tablets;
        - 992px até 768px: mini laptops;
        - 992px pra cima: laptops e desktop.
    - é comum em projetos profissionais, utilizarem estes valores para desenvolvimentos para diferentes dispositivos.

## - landscape

    - podemos alterar css apenas para usuários com visão em landscape;
    - para isso, precisamos de um atributo chamado orientation com o valor de landscape, na media query;
    - o código é ativado quando a orientação é alterada.