class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo; 
    }
    
}
class ContaCorrente extends ContaBancaria{
    construtor(agencia, numero, cartaoCredito) {
        Super (agencia, numero);
    this.tipo = "Corrente";
    this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }

}

class ContaPoupanca extends ContaBancaria{
    construtor(agencia, numero ) {
    Super (agencia, numero);
    this.tipo = "Poupanca";
    
    }
}

class ContaUniversitaria extends ContaBancaria{
    construtor(agencia, numero) {
    Super (agencia, numero);
    this.tipo = "Universitaria";
    }
    sacar(valor){
        if(valor > 500){
            return "Operação negada"
        }
        this._saldo = this_saldo - valor;
        return this._saldo;
    
    }
}


