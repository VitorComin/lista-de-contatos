# Agenda De Contatos

Projeto **Angular** utilizando **FakeAPI** e biblioteca **PO UI**. Uma Agenda de Contatos Web onde é possível adicionar contatos novos e excluí-los.

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/2c8f4fa8-3ac9-448b-a1ac-7c88c1942ee7)

## Interface

O projeto foi desenvolvido com PO UI, onde o próprio já montou um template com o menu responsivo ao lado esquerdo, uma toolbar com o titulo e mais algumas estilizações. Meu papel a partir do template foi editar o menu, onde coloquei, além do home, uma página "sobre", e fiz abaixo dos títulos um <router-outlet> para que eu conseguisse fazer o routing ao clicar nas opções do menu, levando para a pagina inicial ou para a pagina /sobre, deixando assim a interface pronta para desenvolver os componentes e a aplicação como um todo.

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/4cc67e99-99ef-469e-b6d7-0dfc1825cbcf)

## Aplicação

A aplicação consiste em uma agenda de contatos onde é possível adicionar e remover contatos, que são apresentados em forma de lista na página inicial e que estão guardados em um FakeAPI, o arquivo db.json.

No "sobre", fiz apenas uma página que explica um pouco sobre o projeto e sobre mim, utilizando a cor padrão de títulos do PO UI e os links do PO UI para direcinar o usuário para uma nova aba com meu LinkedIn ou meu GitHub. Decidi fazer essa página sobre para praticar e mostrar o **routing**, **Angular Router**.

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/b138cc3d-b489-45e3-b05c-f870a05da6b3)

Na página "home", iniciei colocando um po-container do PO UI para agrupar os campos e o botão necessário para adicionar um contato a lista.

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/d002ea66-6c84-4e23-9f86-43550bcd5e4e)

Dentro do po-container coloquei dois po-input do PO UI, para que o usuário consiga inserir o nome do contato e o número. Todos os dois inputs possuem um p-max-length e um icone, que foram importados da biblioteca. Os dois inputs usam um **two-way databinding**, utilizando [(ngModel)] para salvar o valor inserido dentro da variável declarada no arquivo .ts nome ou numero.

Abaixo também há um po-button que coloquei do lado direito, com a cor primaria do PO UI, que ao ser cliclado chama a função "adicionar()" que, primeiro, verifica se todos os dois campos contém valores inseridos (caso não, da um alerta).

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/70d39f21-5531-4187-85c7-3f7daec4aa58)

Verifica também se o número inserido já está no arquivo de banco de dados, chamando a função jaExiste(numero: string): Observable<Contatos[]> que possui no service, que retorna a quantidade de objetos com aquele número que foram encontrados.

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/553b64b8-dbdc-4012-a9a3-f89e9297a368)

Caso tudo esteja OK, ele chama a função postItem(nome: string, numero: string): Observable<Contatos> do arquivo service, que faz um post no banco de dados e, após isso, a função adicionar() faz mais um get para jogar tudo do banco de dados no array contatos[], que é o array exibido na lista que falaremos mais pra frente.

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/77e062a7-adf1-470d-b5e9-54be92ce54b3)

Abaixo do container, há uma po-list-view que pega o conteudo do array contatos (array preenchido pelo banco de dados ao fazer um GET) e, com um **ngFor**, apresenta com o contato.nome, contato.numero e possui um po-button com a cor secundária do PO UI que, no clique, chama a função excluir(id: number), que joga o contato.id (contato do contatos).

![image](https://github.com/VitorComin/listaDeContatos/assets/106283734/0a69c11d-cd97-420c-bd52-1cc22d8bc691)

A função excluir(id: number) chama a função do service deleteItem(id: number): Observable<any> que faz um DELETE do objeto com aquele ID informado. Após isso, a função excluir(id: number) dá um retorno positivo no console e chama novamente a função getContatos() que faz um GET no banco de dados e armazena no array contatos[].

