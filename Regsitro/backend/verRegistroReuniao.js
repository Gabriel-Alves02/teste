import { pool } from "../database";

export const consultarRegistroReuniao = async (request, response, next) => {

    const connection = await pool.getConnection();

    try {

        await connection.beginTransaction();

        const [result] = await connection.query(
            `SELECT nome, data, topicosTratados, solucaoProposta, infoSolicitadas from Registro inner join Reuniao
            on Registro.idReuniao = Reuniao.idReuniao
            inner join Cliente
            on Reuniao.idCliente = Cliente.idCliente
            WERE idRegistro = ?;`,
            [idRegistro] //implementar id do registro
        );

        response.status(200).json({
            success: true,
            registro
        });
        
    } catch (error) {
        console.error('Erro na consulta dos dados do registro:', error);
        return response.status(500).json({
            success: false,
            message: "Erro interno do servidor"
        });
    } finally {
        connection.release();
    }

}