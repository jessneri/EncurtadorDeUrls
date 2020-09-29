const Router = require("koa-router");
const shorter = require("./controlers/short").shorter;
const redirect = require("./controlers/short").redirect;

const router = new Router();

router.post("/encurta", shorter);
router.get("/encurta/:id", redirect);

module.exports = router;