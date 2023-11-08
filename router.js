import {Router,json} from 'express';
import { createCliente, deleteCliente, getClienteById, getClientes, updateCliente } from './controllers/clienteController.js';
import { createProduto, getProdutoById, getProdutos } from './controllers/produtoController.js';
import { createFuncionario, getFuncionarioById, getFuncionarios } from './controllers/funcionarioController.js';
import { createCompra, getCompras} from './controllers/comprasController.js';

const router = Router();
// Permite que as rotas entendam requisições com o corpo no formato JSON
router.use(json())

// Lista de endpoints
router.get('/cliente',getClientes)
    // :clienteId é um parâmetro da rota
    .get('/cliente/:clienteId', getClienteById)
    .post('/cliente', createCliente)
    .put('/clientePizza', updateCliente)
    .delete('/cliente/:clienteId', deleteCliente)

    .get('/produto', getProdutos)
    .get('/produto/:produtoId', getProdutoById)
    .post('/produto', createProduto)

    .get('/funcionario', getFuncionarios)
    .get('/funcionario/:funcionarioId', getFuncionarioById)
    .post('/funcionario', createFuncionario)

    .get('/compras',getCompras)
    .post('/compras',createCompra)

export default router;