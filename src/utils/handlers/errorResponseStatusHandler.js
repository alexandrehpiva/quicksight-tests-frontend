export const errorResponseStatusHandler = (err, setError) => {
  const errorMessages = {
    400: 'Erro interno no formato da requisição',
    401: 'Usuário não autorizado',
    404: 'Recurso não encontrado',
    500: 'Erro interno no servidor',
    default: 'Erro desconhecido'
  }

  setError?.(errorMessages[err.response?.status ?? 'default'])
}
