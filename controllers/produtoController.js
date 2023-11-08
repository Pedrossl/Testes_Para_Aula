import dbKinex from '../database/db_config.js';

export const getProdutos = async (req, res) => {
    try {
        const produtos = await dbKinex('produtos').select('*');
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProdutoById = async (req, res) => {
    const {produtoId} = req.params;
    
    try {
        const produto = await dbKinex('produtos').select('*').where({id: produtoId});
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createProduto = async (req, res) => {
    const { nome, preco, imagem } = req.body;

    if (!nome || !preco || !imagem) {
        res.status(400).json({ message: 'Dados inválidos' });
        return; // Encerre a função após a resposta.
    }

    try {
        const produto = await dbKinex('produtos').insert({ nome, preco, imagem });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}