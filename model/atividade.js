const modelAtividade = {
    user: {
      type: Object.Id
    },
    nomeresponsavel: {
      type: String,
      required: true
    },
    cnpj: {
        type: String
    },
    cpf: {
        type: String
    },
    telefone: {
        type: String
    },
    telefone2: {
        type: String
    },
    email: {
        type: String
    },
    tipoatividade: {
      type: String
    },
    dataatividade: {
      type: Date
    },
    faixaetaria: {
        type: String
    },
    resumo: {
        type: String
    },
    objetivo: {
      type: String
    },
    publicoestimado: {
        type: Number
    },
    necessitaincricaoprevia: {
        type: Boolean
    },
    equipamentosnecessarios: {
        type: Boolean
    },
    descricao: {
        type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  }

  console.log(modelAtividade);
