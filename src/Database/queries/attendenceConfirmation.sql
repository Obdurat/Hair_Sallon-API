    SELECT nome, serviço, preço, data, telefone, rua, cidade, bairro, complemento FROM Hair_Sallon.atendimentos AS atendimentos 
    JOIN Hair_Sallon.clientes AS clientes ON atendimentos.clienteId = clientes.id
    JOIN Hair_Sallon.logradouros AS logradouros ON clientes.endereço = logradouros.id
    JOIN Hair_Sallon.serviços AS serviços ON atendimentos.serviçoId = serviços.id
    WHERE atendimentos.clienteId = ?
    ORDER BY atendimentos.atualizadoEm
    LIMIT 1;