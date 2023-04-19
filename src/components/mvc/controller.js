const dominioDao = require("./dao");
const { respuesta_envio_api } = require("../../utils/error");
async function obtener_nombre(data) {
    try {

        const {dominio} = data;

        if(dominio){

            let result = await dominioDao.obtener_nombre(dominio);

            if(result.length !== 0){
                return respuesta_envio_api(true, "SUCCESS", "Se realizo correctamente", result);
            }else{
                return respuesta_envio_api(true, "SUCCESS", "Se realizo correctamente",[{nombre:dominio}]);
            }

           

        }else{
            return respuesta_envio_api(true, "FALSE", "No se han enviado los parámetros correctos", []);
        }

       
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {

    async obtener_nombre(req, res) {
        try {
            const data = req.query;
            const info = await obtener_nombre(data);
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
