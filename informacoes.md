# Aula 02 
### `Diretivas Parte 1`

#### ngApp
- Definindo as fronteiras da aplicação

#### ngController
- Vinculando um elemento da View ao Controller

#### ngBind
- Substitui o elemento por uma expressão
- Pega um elemento do $scope e exibe

#### ngRepeat
- Repetindo elementos (parecido com foreach)

#### ngModel
- Vinculando uma propriedade ao $scope
- Pega um elemento da view e exibe
- Elementos de exemplo para aplicar o ``ngModel`` abaixo:
- _Select, Inputs, Textareas_

#### ngClick
- Atribui um comportamento ao evento
___

# Aula 03
### `Diretivas Parte 2`

#### Diretivas 

- São extensões da linguagem HTML que permitem a implementação de novos comportamentos, de forma declarativa.

#### ngDisabled
- Desabita um elemento dinamicamente

#### ngOptions
- Renderiza as opções de um select

#### ngClass e ngStyle
- Aplica classes CSS e estilos dinamicamente

#### ngShow, ngHide, ngIf
- Exibe um elemento condicionalmente

#### ngInclude
- Inclui conteúdo dinamicamente
___

# Aula 04
### `Validando Formulários`

#### ngRequired
- Define um determinado campo como obrigatório

#### $valid e $invalid
- Consultar a validade de um campo ou formulário

#### $pristine e $dirty
- Verifica se um formulário ou campo já foi utilizado alguma vez

#### ngMinlength e ngMaxlength
- Define o tamanho mínimo e máximo permitido

#### $error
- Consultando os erros de um campo ou formulário

#### ngPatttern
- Define uma RegExp para validar campos
___

# Aula 05
### `Aplicando Filtros`

#### Filtros
- Transforma o resultado de uma expressão, realizando operações como a formatação de data, a conversão de moeda e a ordenação de array.

#### Filter
- Filtra um array com base em um critério

#### OrderBy
- Ordena um array com base em uma condição

#### Currency
- Converte um número para moeda

#### Number
- Formata um número
```
50 | number:2  =  50.00
50 | number:4  =  50.0000
```

#### limitTo
- Limita um array ou uma string
___

# Aula 06
### `Integrando com o back-end por AJAX`

#### $http
- O serviço $http do angular permite a realização de requisições utilizando XMLHttpRequest ou via JSONP.

- _get(url, config)_
- _post(url, data, config)_
- _put(url, data, config)_
- _delete(url, config)_
- _head(url, config)_
- _jsonp(url, config)_

#### SOP - _Same-Origin Policy_
```
Política de restrição de segurança que impede que o navegador acesse recursos alheios a sua origem, considerando protocolo, host e porta;    
```

#### JSONP - _JSON With padding_
```
Estratégia utilizada para **burlar** o mecanismo de proteção dos navegadores em relação ao acesso de recursos externos.
```

#### CORS - _Cross-Origin Resource Sharing_
```
Permissão para acessar recursos externos por meio de **cabeçalhos HTTP adicionais
```
___

# Aula 07
### `Organizando o projeto`
- Organização do projeto

___

# Aula 08
### `Criando Serviços`
```
Um serviço é um **singleton**, ou seja, um objeto único. Criado na inicialização da aplicação e que está disponível para ser injetado em outros componentes.
```

#### Factory Function
- É qualquer função que não é uma classe ou construtor que retorna um objeto (_presumivelmente novo_). Em JavaScript, qualquer função pode retornar um objeto. Quando isso acontece sem a palavra-chave ``new``, é uma Factory Function.

#### Service Function
- Ao declarar _service_ como um argumento injetável, você receberá uma instância da função. Em outras palavras ``new ``. Por tanto podemos usar tanto uma ``factory ou service.``

#### Value
- Objetos de configuração para seu projeto

#### Provider
- É o serviço que da origem a todos os outros 

#### config
- É como se fosse uma inicialização e permite passar parametros para os serviços do tipo provider.
___

# Aula 09
### `Criando Filtros`

-  **Filtro 1 - _Names_** - Converter nomes, escritos em letras minúscula ou maiúscula, deixando apenas a primeira letra maiúscula.
Ex: _`` pablo ferreira -> Pablo Ferreira ``_.

-  **Filtro 2 - _Ellipsis_** _Limitar a quantidade de caracteres de uma string, incluindo ``...`` no final, se necessário com base no tamanho passado por parâmetro. 
Ex: _``Pablo Ferreira -> Pablo F...``_.
___

# Aula 10
### `Criando Diretivas 01`

#### _Directive Definition Object_
```
 Este objeto basicamente é composto por propriedades, e são essas propriedades que definem o comportamento de cada diretiva.

```
#### Template e TemplateUrl
- Especifica o template ou a url do template que deverá ser incluído dentro do elemento que estiver utilizando a diretiva.

#### Replace
- Substitui o elemento pelo template da diretiva.

#### Restrict
- Restringe o modo de utilização da diretiva ao atributo, elemento, classe e comentário ou ainda uma combinação deles. Caso não seja definido, o padrão é que a diretiva seja atribuída pelo atributo.

#### Tipos de restrição
**A** - Diretiva restrita ao atributo do elemento.

**B** - Diretiva restrita ao elemento.

**C** - Diretiva restrita a classe do elemento.

**M** - Diretiva restrita ao comentário do elemento.

#### Scope
- Por padrão uma diretiva compartilha o mesmo scope de onde é utilizada. Para aumentar seu potencial de reuso, podemos isolar seu scope, passando os dados por parâmetro.

## @
- Vincula o valor do atributo diretamente a uma propriedade do scope da diretiva.

## =
- Cria um vínculo bi-direcional entre uma propriedade do scope do template a uma propriedade do scope da diretiva.

#### Transclude
- Encapsula elementos dentro de uma diretiva, criando um scope não isolado.
___

# Aula 11
### `Criando Diretivas 02`

#### Link
- Executada depois do template ter sido compilado, podemos utilizá-la para interagir com a DOM, tratando eventos ou mesmo para definir o comportamento associado com a lógica da diretiva.

#### Require
- Estabelece um vínculo com outra diretiva, interagindo por meio do controller que é um dos parâmetros da função link.
___

# Aula 12
### `Criando Diretivas 03`

#### Controller
- Permite a definição de uma API que pode ser compartilhada com outras diretivas.
___

# Aula 13
### `Modularizando o projeto`

#### Módulo
- É uma _coleção de componentes_, ou seja, um conjunto de controllers, directives, filters, services entre outros tipos de componente utilizados pelas aplicação.

#### $templateCache
- Utilizando o _$templateCache_ para guardar o template. Na primeira vez que um template é carregado, ele é ``armazenado em cache`` e acessível por meio do serviço $templateCache.
___

# Aula 14
### `Single-Page-Application com ngRoute`
- É uma aplicação que realiza suas transições dentro de uma mesma página, carregando seus componentes de forma dinânima utilizando AJAX.

#### ngRoute
- É um módulo do framework que fornece serviços para realizar o roteamento de páginas.

#### $routeProvider
- Podemos configurar o serviço de roteamento por meio de $routeProvider, configurando cada rota específica e também uma rota padrão, caso nenhum seja encontrada.

- ``when`` (path, route)
- ``otherwise`` (path)

#### Route Object
- Objeto de configuração de cada rota, permite configurar diversos aspectos do roteamento.

#### ngView
- Diretiva utilizada para renderizar o template da rota acessada.

