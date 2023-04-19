const {dominiosModel} = require("./model");

module.exports = {
    async obtener_nombre(dominio){
        try{

            const datos_obtener = {
                _id:0,
                nombre: 1
            };

            const datos_buscar = {
                dominio
            };

            const result = await dominiosModel.find(datos_buscar, datos_obtener).lean();
            return result;

        }catch(err){
            throw new Error(err);
        }
    }
}
