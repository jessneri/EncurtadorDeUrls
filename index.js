const koa = require("koa");
const bodyparser = require("koa-bodyparser");

const server = new Koa();

server.use(bodyparser());
server.use((ctx) => {
    if (ctx.url.includes("/encurta")) {
        if (ctx.method === "POST") {

        }

    } else {
        ctx.body = 404; //status de erro pra conteúdo não encontrado
        ctx.body = {
            status: "erro",
            dados: {
                mensagem: "Conteúdo não encontrado!"
            }
        }
    }
});
server.listen(8081, () => console.log("Running!"));