# Diagrama de Componentes 

## Descrição textual das componentes
### 1) Controlador de usuário
- **Responsabilidade**: Gerenciar interações de entrada do usuário, ou seja, ele deve receber e coordenar as ações iniciadas pelo usuário na interface (frontend) da plataforma, como login, cadastro e alterações no perfil;
- **Interface**: Deverá expor endpoints para cadastro, recuperação de senha e atualização de dados, por meio dos quais será feita a comunicação entre o frontend (interface visualizada pelo usuário) e o backend (banco de dados);
- **Dependências**: Serviço de usuário.

### 2) Serviço de usuário
- **Responsabilidade**: Lidar com a persistência de dados associados à plataforma, permitindo a realização de operações de leitura, escrita e atualização dos dados dos usuários diretamente no banco de dados utilizado;
- **Dependências**: Banco de dados.

### 3) Controlador de conteúdo
- **Responsabilidade**: Gerenciar as solicitações de conteúdo feita pelos usuários na interface, ou seja, ele deve receber uma demanda do usuário e coordenar o fluxo de dados para entregar as informações corretas na interface;
- Interface: Como exemplos de conteúdos exibidos pela interface e que podem ser acessados pelo usuário na plataforma, temos: **i) Exibição de notícias**: O controlador recebe a solicitação para exibir uma notícia e retorna parâmetros dela para o usuário, como manchete, autor, data de publicação e corpo do texto; **ii) Visualização de cursos**: Permite que o usuário visualize a lista de cursos divulgados pela plataforma e informações básicas deles, como uma breve descrição e um link para seu acesso; **iii) Acesso a leituras didáticas**: Permite que o usuário explore leituras didáticas, organizadas por parâmetros de categoria e dificuldade. Ao selecionar um texto, o controlador deve exibir o texto, em sua íntegra, para o usuário.
- **Dependências**: Repositório de conteúdos e APIs externas públicas.

### 4) Repositório de conteúdos
- **Responsabilidade**: Lidar diretamente com a persistência dos dados relacionados aos conteúdos exibidos pelo controlador de conteúdos, isto é, ele é responsável por adicionar e manter atualizadas as notícias, leituras e os cursos exibidos para os usuários, mantendo também organizadas as informações essenciais sobre esses;
- **Dependências**: Banco de dados.

### 5) Banco de dados
- **Responsabilidade**: Armazenar os dados relacionados aos usuários e aos conteúdos da plataforma de maneira organizada e persistente, permitindo o funcionamento correto do site.
