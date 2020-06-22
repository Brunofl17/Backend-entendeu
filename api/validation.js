module.exports = app => {
    // validações do back
    
    // verica se o valor nao e nulo
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }

    // verifica se é nulo
    function notExistsOrError(value, msg){
        try{
            existsOrError(value, msg)
        }catch(msg){
            return
        }
        throw msg
    }

    // verica valores iguais
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    // verifica de o valor e uma das opçeos
    function onEnumOrError(value, options, msg){
        let onEnum = false
        options.forEach(element => {
            if(value === element) onEnum = true
        });
        if(!onEnum) throw msg
    }

    // retorna as funcoes para o consign
    return { existsOrError, notExistsOrError, equalsOrError, onEnumOrError }
}