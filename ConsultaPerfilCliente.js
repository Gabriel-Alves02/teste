import { pool } from "../database";

export const consultarPerfilCliente = async (request, response, next) => {

    const connection = await pool.getConnection();

    try {

        await connection.beginTransaction();

        const [result] = await connection.query(
            `SELECT email, telefone, redeSocial from Cliente 
            WERE idCliente = ?;`,
            [idCliente] //implementar id do cliente
        );
    } catch (error) {
        console.error('Erro na consulta dos dados do consultor:', error);
        return response.status(500).json({
            success: false,
            message: "Erro interno do servidor"
        });
    } finally {
        connection.release();
    }

}