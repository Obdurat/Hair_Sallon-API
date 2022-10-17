export const addressSelector = {
  select: {
    cep: true, city: true, street: true, id: true,
  },
};

export const schedulesSelector = {
  select: {
    created_at: true, price: true, service: { select: { name: true } },
  },
};
