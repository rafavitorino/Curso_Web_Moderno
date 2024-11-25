/*Funções arrow tem essa vantagem de ter um this mais deterministico, uma vez que vc definir uma função num local, o this somente apontará para aquele local*/

let comparaComThis = function(param){
    console.log(this === param);
};

comparaComThis(global)//Retorna true tanto no contexto do Node quanto no browser

const obj = {};
comparaComThis = comparaComThis.bind(obj);//Sempre que eu chamar o 'comparaComThis' essa função vai apontar para o OBJETO 'obj'
comparaComThis(global);//Agora o resultado será 'false' pois a função não apontará mais para o parâmetro
comparaComThis(obj);//True


//Será que esse comportamento acontece com as arrow functions????

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) ;//Não aponta para a variável global
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);//O this criado na arrow function NÃO aponta para outra coisa exceto onde ele foi criado
