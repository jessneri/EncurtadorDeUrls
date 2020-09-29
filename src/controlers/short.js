const gerarCodigo = require("../utils/code");
const response = require("./responde");

const urls = [];


const obterUrl = (codigo) => {
    for (let i = 0; i < urls.length; i++) {
        return urls[i][codigo];
    }

    return null;
};

//função que encurta uma
const shorter = (ctx) => {
    const url = ctx.request.body.url;
    if (!url) {

        response(ctx, 400, { mensagem: "Pedido mal-formatado!" });
        return;

    } else {
        const codigo = gerarCodigo();
        urls.push({
            [codigo]: url
        });

        response(ctx, 201, {
            url_original: url,
            url_encurtada: `localhost:8081/encurta/${codigo}`
        });

    }
}

//função responsável pelo redirect
const redirect = (ctx) => {
    //const url_desejada = ctx.url.split("/")[2];
    const url_desejada = ctx.params.id;
    if (url_desejada) {
        const url_original = obterUrl(url_desejada);
        if (url_original) {
            ctx.status = 301;
            ctx.redirect(url_original);
        } else {

            response(ctx, 404, { mensagem: "Conteúdo não encontrado!" });
        }
    }

}

module.exports = {
    shorter,
    redirect
}