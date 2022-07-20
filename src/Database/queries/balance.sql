SELECT SUM(preço) as total FROM Hair_Sallon.atendimentos AS atendimentos 
JOIN Hair_Sallon.serviços AS serviços ON atendimentos.serviçoId = serviços.id
WHERE atendimentos.data BETWEEN ? AND ?
