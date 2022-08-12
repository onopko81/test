export class Prova {
    name:string
    cognome:string
    constructor(nome:string, cognome:string) {
       this.name = nome
       this.cognome = cognome
    }
}

interface Test {
    nome: string,
    cognome: string
}

export function test (p: Test) : string {
    return `${p.nome} ${p.cognome} cx`;
}



