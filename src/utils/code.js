//gera um novo código encurtado de url

const gerarCodigo = () => Math.random().toString(36).substr(2, 9);

module.exports = gerarCodigo;