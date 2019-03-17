const modelUser = {
    nome: {
      type: String,
      required: true
    },
    nascimento: {
        type: String
    },
    rg: {
        type: String
    },
    cpf: {
        type: String
    },
    endereco: {
        type: String
    },
    bairro: {
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
    ocupacaoatual: {
        type: String
    },
    formacao: {
        type: String
    },
    disponibilidade: [{
      dia: {
        type: String
      },
      horario: {
        type: Date
      }
    }],
    cargahoraria: [{
      dia: {
        type: String
      },
      horario: {
        type: Date
      }
    }],
    ocupacao: {
      type: String
    },
    setorpreferencia: {
      type: String
    },
    qtdtempopreferenciaatuacao: {
        type: String
    },
    ajudadecusto: {
        type: String
    },
    frequenciarealizacaoatividade: {
      type: String
    },
    necessitamateriais: {
        type: Bolean
    },
    faixaetaria: {
        type: String
    },
    descricao: {
        type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  }


console.log(modelUser);
