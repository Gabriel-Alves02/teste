import { pool } from "../database";

export const BuscarRegistros = async (request, response, next) => {

    const connection = await pool.getConnection();

    try {
        const { idConsultor } = request.params;

        const [registros] = await connection.query(
            `SELECT idRegistro, Cliente.nome, data FROM Registro inner join Reuniao
            on registro.idReuniao = Reuniao.idReuniao
            inner join Cliente
            on Reuniao.idCliente = Cliente.idCliente
            WHERE idConsultor = ?`,
            [idConsultor]
        );

        // AO ACERTAR O MECANISMO, SERA REFINADO O SQL PARA "ORDER BY data, periodo"

        if (registros.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Nenhum registro encontrado para este consultor."
            });
        }

        response.status(200).json({
            success: true,
            registros
        });

    } catch (error) {
        console.error('Erro ao buscar registros:', error);
        return response.status(500).json({
            success: false,
            message: "Erro interno do servidor"
        });
    } finally {
        connection.release();
    }
};