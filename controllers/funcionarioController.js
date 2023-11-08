import dbKinex from '../database/db_config.js';

export const getFuncionarios = async (req, res) => {
    try {
        const funcionarios = await dbKinex('funcionarios').select('*');
        res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getFuncionarioById = async (req, res) => {
    const {funcionarioId} = req.params;
    
    try {
        const funcionario = await dbKinex('funcionarios').select('*').where({id: funcionarioId});
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createFuncionario = async (req, res) => {
    const { nome, cargo } = req.body;

    if (!nome  || !cargo) {
        res.status(400).json({ message: 'Dados inválidos' });
        return; // Encerre a função após a resposta.
    }

    try {
        const funcionario = await dbKinex('funcionarios').insert({ nome, cargo });
        res.status(201).json(funcionario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}