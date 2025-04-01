import { pool } from "../database";

export const editarPerfilCliente = async (request, response, next) => {

    const connection = await pool.getConnection();

    try {
        
        const { telefone, email, obs, redeSocial } = request.body;

        if (!telefone || !email || !obs || !redeSocial) {
            return response.status(400).json({
                success: false,
                message: "Todos os campos são obrigatórios!"
            });
        }

        await connection.beginTransaction();

        const [result] = await connection.query(
            `UPDATE Cliente 
            (email, telefone, obs, redeSocial) 
            VALUES (?, ?, ?)
            WERE idCliente = ?;`,
            [email, telefone, obs, redeSocial, idCliente] //implementar id do cliente
        );
    } catch (error) {
        console.error('Erro na atualização dos dados do consultor:', error);
        return response.status(500).json({
            success: false,
            message: "Erro interno do servidor"
        });
    } finally {
        connection.release();
    }

}