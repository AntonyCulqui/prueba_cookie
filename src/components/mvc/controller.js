//const dominioDao = require("./dao");
const { respuesta_envio_api } = require("../../utils/error");
async function obtener_nombre(data) {
    try {

        console.log("[PRUEBA COOKIES]");
       
        return "ok";
       
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {

    async obtener_nombre(req, res) {
        try {
            const data = req.query;
            const info = await obtener_nombre(data);
            res.cookie("prueba_cookie", "valor cookire",{maxAge: 10000, httpOnly: true , secure: true, sameSite:'none'});
            return res.json(info);
        } catch (err) {
            info = {
                "bEstado": false,
                "iCodigo": 0,
                "sRpta": err.message,
                "obj": []
            }
            console.log('[response error]', err.message);
            return res.status(500).send(info);
        }
    }

};
