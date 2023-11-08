import dbKinex from '../database/db_config.js';

export const getCompras = async (req, res) => {
    try {
        const compras = await dbKinex('compras')
            .select('compras.id', 'clientes.nome AS cliente', 'funcionarios.nome AS funcionario', 'produtos.nome AS produto')
            .join('clientes', 'compras.cliente_id', '=', 'clientes.id')
            .join('funcionarios', 'compras.funcionario_id', '=', 'funcionarios.id')
            .join('produtos', 'compras.produto_id', '=', 'produtos.id');

        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCompraById = async (req, res) => {
    const {compraId} = req.params;
    
    try {
        const compra = await dbKinex('compras').select('*').where({id: compraId});
        res.status(200).json(compra);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createCompra = async (req, res) => {
    const { cliente_id, funcionario_id, produto_id } = req.body;

    if (!cliente_id || !funcionario_id || !produto_id ) {
        res.status(400).json({ message: 'Dados inválidos' });
        return; // Encerre a função após a resposta.
    }

    try {
        // Valide se o cliente existe
        const cliente = await dbKinex('clientes').select().where('id', cliente_id)
        if (!cliente) {
            res.status(400).json({ message: 'Cliente não encontrado' });
            return;
        }

        // Valide se o funcionário existe
        const funcionario = await dbKinex('funcionarios').select().where('id', funcionario_id)
        if (!funcionario) {
            res.status(400).json({ message: 'Funcionário não encontrado' });
            return;
        }

        // Valide se o produto existe
        const produto = await dbKinex('produtos').select().where('id', produto_id)
        if (!produto) {
            res.status(400).json({ message: 'Produto não encontrado' });
            return;
        }

        const compra = await dbKinex('compras').insert({ cliente_id, funcionario_id, produto_id });
        res.status(201).json('compra criada com sucesso');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
