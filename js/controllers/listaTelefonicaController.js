angular.module("listaTelefonica").controller("listaTelefonicaController",
    function ($scope, contatosAPI, operadorasAPI) {
        $scope.app = "Lista Telefônica";
        $scope.contatos = [];

        // Consumindo a API trazendo contatos
        var carregarContatos = function () {
            contatosAPI.getContatos().then(function (data) {
                $scope.contatos = data.data;
            }).catch(function (data, status) {
                $scope.message = "Houve um problema carregar os contatos: " + data.data;
            });
        };

        // Consumindo a API trazendo operadoras
        var carregarOperadoras = function () {
            operadorasAPI.getOperadoras().then(function (data) {
                $scope.operadoras = data.data;
            }).catch(function (data, status) {
                $scope.message = "Houve um problema ao carregar as operadoras: " + data.data;
            });
        };

        // Adicionar contatos
        $scope.adicionarContato = function (contato) {
            contato.data = new Date();
            contatosAPI.saveContato(contato).then(function (data) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                carregarContatos();
            });
        };


        // Apagar contatos - Excluir da API
        $scope.apagarContato = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato;
            });
        };

        // Verifica se tem contato selecionado
        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado;
            });
        };

    
        carregarContatos();
        carregarOperadoras();
    });