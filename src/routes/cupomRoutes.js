const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Listar cupons')
})

router.get('/', (req, res) => {
    res.send('Criar cupons')
})

router.get('/', (req, res) => {
    res.send('Editar cupons')
})

router.get('/', (req, res) => {
    res.send('Deletar cupons')
})

module.exports = router;