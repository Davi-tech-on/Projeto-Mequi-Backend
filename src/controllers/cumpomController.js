const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function listarTodosCupons(){
    return await prisma.cupons.findMany();
}
async function listarTodosCupons(id){
    return await prisma.cupons.findMany({
        where : {
            cupom_id: Number (id)
        }
    })
}

function listarTodosCupons(){

}
function listarUmCupom(){

}
function criarUmCupom(){

}
function editarUmCupom(){

}
function deletarUmCupm(){

}

module.exports = {
    listarTodosCupons,
    listarUmCupom,
    criarUmCupom,
    editarUmCupom,
    deletarUmCupom,
}






























