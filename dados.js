let dados = {
  Comestiveis: [
    {
      titulo: "Coentro",
      nomeCientifico: "Coriandrum sativum",
      descricao:
        "Planta aromática utilizada na culinária, rica em vitaminas e minerais com propriedades medicinais.",
      cultivo: {
        regagem:
          "Regular, mantendo o solo levemente úmido, evitando encharcamentos.",
        luminosidade: "Prefere sol pleno, mas tolera meia-sombra.",
        solo: "Rico em matéria orgânica, bem drenado e leve.",
        adubacao: "Mensal, utilizando adubo orgânico ou NPK.",
        poda: "Podas regulares para estimular o crescimento.",
      },
      beneficios: {
        saude:
          "Auxilia na digestão, antioxidante, anti-inflamatório, controla níveis de açúcar no sangue.",
        culinaria: "Tempero para carnes, sopas, saladas e molhos.",
        outros: "",
      },
    },
    {
      titulo: "Manjericão",
      nomeCientifico: "Ocimum basilicum",
      descricao:
        "Planta aromática muito utilizada na culinária italiana, rica em vitaminas, antioxidantes e anti-inflamatórios.",
      cultivo: {
        regagem: "Regular, mantendo o solo levemente úmido.",
        luminosidade: "Prefere sol pleno, tolera meia-sombra.",
        solo: "Rico em matéria orgânica, bem drenado e leve.",
        adubacao: "Mensal, utilizando adubo orgânico ou NPK.",
        poda: "Podas regulares para estimular o crescimento.",
      },
      beneficios: {
        saude:
          "Antioxidante, anti-inflamatório, antibacteriano, auxilia na digestão.",
        culinaria:
          "Essencial na culinária italiana, combina com tomates e massas.",
        outros: "",
      },
    },
    {
      titulo: "Salsa",
      nomeCientifico: "Petroselinum crispum",
      descricao:
        "Planta herbácea bienal, muito utilizada como tempero fresco, rica em vitaminas A, C e K.",
      cultivo: {
        regagem: "Regular, mantendo o solo levemente úmido.",
        luminosidade: "Prefere sol pleno, mas tolera meia-sombra.",
        solo: "Rico em matéria orgânica, bem drenado e leve.",
        adubacao: "Mensal, utilizando adubo orgânico ou NPK.",
        poda: "Podas regulares para estimular o crescimento.",
      },
      beneficios: {
        saude: "Auxilia na digestão, saúde óssea e pressão arterial.",
        culinaria: "Usada como tempero fresco em diversas receitas.",
        outros: "Pele saudável e combate ao mau hálito.",
      },
    },
    {
      titulo: "Hortelã",
      nomeCientifico: "Mentha × piperita",
      descricao:
        "Planta herbácea perene com aroma refrescante, usada na culinária e em chás.",
      cultivo: {
        regagem: "Regular, mantendo o solo úmido.",
        luminosidade: "Prefere sombra parcial, mas tolera sol pleno.",
        solo: "Rico em matéria orgânica, leve e bem drenado.",
        adubacao: "Mensal, utilizando adubo orgânico ou NPK.",
        poda: "Podas regulares para estimular novos ramos.",
      },
      beneficios: {
        saude: "Auxilia na digestão, respiratório e dores.",
        culinaria: "Usada em temperos e bebidas.",
        outros: "Cuidados com a pele e cabelo.",
      },
    },
    {
      titulo: "Tomilho",
      nomeCientifico: "Thymus vulgaris",
      descricao:
        "Planta perene com aroma intenso e sabor levemente amargo, usada na culinária.",
      cultivo: {
        regagem: "Moderada, evitando encharcamentos.",
        luminosidade: "Prefere sol pleno.",
        solo: "Bem drenado e leve.",
        adubacao: "Anual com pequenas quantidades de adubo.",
        poda: "Podas após a floração para estimular o crescimento.",
      },
      beneficios: {
        saude: "Auxilia no sistema respiratório e digestão.",
        culinaria: "Usado como tempero e aromatizante.",
        outros: "Ajuda a reduzir ansiedade e cuida da pele.",
      },
    },
    {
      titulo: "Tomate Cereja",
      nomeCientifico: "Solanum lycopersicum var. cerasiforme",
      descricao:
        "Variedade de tomate com frutos adocicados, ideal para saladas e molhos.",
      cultivo: {
        regagem: "Regular, mantendo o solo levemente úmido.",
        luminosidade: "Prefere sol pleno.",
        solo: "Rico em matéria orgânica e bem drenado.",
        adubacao: "Mensal, rico em fósforo e potássio.",
        poda: "Podas regulares para controle de crescimento.",
      },
      beneficios: {
        saude: "Antioxidante, auxilia no coração e visão.",
        culinaria: "Utilizado em saladas e molhos.",
        outros: "Rico em vitamina C e licopeno.",
      },
    },
    {
      titulo: "Alecrim",
      nomeCientifico: "Rosmarinus officinalis",
      descricao:
        "Arbusto aromático, muito utilizado como tempero na culinária mediterrânea.",
      cultivo: {
        regagem: "Moderada, preferindo solos bem drenados.",
        luminosidade: "Prefere sol pleno.",
        solo: "Bem drenado e leve.",
        adubacao: "Anual com pequenas quantidades de adubo.",
        poda: "Podas após a floração para estimular o crescimento.",
      },
      beneficios: {
        saude: "Auxilia no sistema respiratório e digestão.",
        culinaria: "Usado como tempero e aromatizante.",
        outros: "Melhora a memória e promove relaxamento.",
      },
    },
    {
      titulo: "Pimenta Dedo-de-Moça",
      nomeCientifico: "Capsicum baccatum",
      descricao:
        "Planta perene com frutos picantes, ideal para cultivo em vasos e utilizada na culinária.",
      cultivo: {
        regagem: "Regular, mantendo o solo levemente úmido.",
        luminosidade: "Prefere sol pleno.",
        solo: "Rico em matéria orgânica e bem drenado.",
        adubacao: "Mensal, com adubo rico em potássio e fósforo.",
        poda: "Podas regulares para estimular o crescimento.",
      },
      beneficios: {
        saude: "Antioxidante, auxilia na circulação sanguínea.",
        culinaria: "Usada em molhos, conservas e temperos.",
        outros: "Possui propriedades anti-inflamatórias.",
      },
    },
    {
      titulo: "Babosa",
      nomeCientifico: "Aloe vera",
      descricao:
        "Planta suculenta com propriedades medicinais, amplamente utilizada para cuidados com a pele.",
      cultivo: {
        regagem: "Escassa, regar apenas quando o solo estiver seco.",
        luminosidade: "Prefere sol pleno, mas tolera meia-sombra.",
        solo: "Bem drenado, com solo arenoso ou próprio para suculentas.",
        adubacao: "A cada 2-3 meses com adubo específico.",
        poda: "Remover folhas secas ou danificadas.",
      },
      beneficios: {
        saude: "Propriedades cicatrizantes, hidratantes e anti-inflamatórias.",
        culinaria: "Pode ser utilizada em sucos e bebidas detox.",
        outros: "Cuidados com a pele e cabelo.",
      },
    },
  ],
  Ornamental: [
    {
      titulo: "Jiboia",
      nomeCientifico: "Epipremnum aureum",
      descricao:
        "Planta trepadeira resistente e fácil de cuidar, ideal para ambientes internos.",
      cultivo: {
        regagem: "Moderada, mantendo o solo levemente úmido.",
        luminosidade: "Adapta-se a diferentes níveis de luminosidade.",
        solo: "Rico em matéria orgânica e bem drenado.",
        adubacao: "Mensal com adubo líquido.",
        poda: "Podas regulares para controle de crescimento.",
      },
      beneficios: {
        saude: "",
        culinaria: "",
        outros: "Purifica o ar e melhora a umidade.",
      },
    },
    {
      titulo: "Espada de São Jorge",
      nomeCientifico: "Sansevieria trifasciata",
      descricao:
        "Planta suculenta perene, resistente e ideal para ambientes internos.",
      cultivo: {
        regagem: "Moderada, tolerando períodos de seca.",
        luminosidade: "Adapta-se a diferentes níveis de luminosidade.",
        solo: "Bem drenado, podendo ser uma mistura de terra e areia.",
        adubacao: "A cada 3 meses com adubo diluído.",
        poda: "Remover folhas secas ou amareladas.",
      },
      beneficios: {
        saude: "",
        culinaria: "",
        outros: "Purifica o ar e pode ser usada como decoração.",
      },
    },
    {
      titulo: "Lírio da Paz",
      nomeCientifico: "Spathiphyllum wallisii",
      descricao:
        "Planta herbácea popular para ambientes internos, conhecida por suas flores brancas.",
      cultivo: {
        regagem: "Regular, mantendo o solo úmido.",
        luminosidade: "Prefere meia-sombra.",
        solo: "Rico em matéria orgânica e bem drenado.",
        adubacao: "Mensal com adubo líquido.",
        poda: "Remover folhas secas ou danificadas.",
      },
      beneficios: {
        saude: "",
        culinaria: "",
        outros: "Ajuda a purificar o ar e é ornamental.",
      },
    },
    {
      titulo: "Cactos",
      nomeCientifico: "Cactaceae",
      descricao:
        "Planta suculenta que armazena água, ideal para ambientes internos e de fácil manutenção.",
      cultivo: {
        regagem:
          "Escassa, regar apenas quando o solo estiver completamente seco.",
        luminosidade: "Prefere sol pleno, mas pode adaptar-se a meia-sombra.",
        solo: "Bem drenado, pode ser utilizado substrato para cactos.",
        adubacao: "A cada 2-3 meses com adubo específico para suculentas.",
        poda: "Não requer podas frequentes.",
      },
      beneficios: {
        saude: "",
        culinaria: "",
        outros: "Melhora a decoração e não exige muitos cuidados.",
      },
    },
    {
      titulo: "Samambaia",
      nomeCientifico: "Nephrolepis exaltata",
      descricao:
        "Planta herbácea popular para ambientes internos, apreciada por suas folhas longas e decorativas.",
      cultivo: {
        regagem: "Regular, mantendo o solo úmido, mas sem encharcar.",
        luminosidade: "Prefere meia-sombra, não tolera luz solar direta.",
        solo: "Rico em matéria orgânica e bem drenado.",
        adubacao: "Mensal com adubo diluído.",
        poda: "Remover folhas secas para estimular o crescimento.",
      },
      beneficios: {
        saude: "",
        culinaria: "",
        outros: "Purifica o ar e ajuda a manter a umidade do ambiente.",
      },
    },
    {
      titulo: "Orquídea",
      nomeCientifico: "Orchidaceae",
      descricao:
        "Planta herbácea de floração ornamental, apreciada por sua beleza e elegância.",
      cultivo: {
        regagem: "Moderada, mantendo o solo úmido sem encharcar.",
        luminosidade: "Prefere luz indireta e ambientes ventilados.",
        solo: "Bem drenado, utilizando substrato específico para orquídeas.",
        adubacao: "A cada 15 dias com adubo líquido específico.",
        poda: "Remover hastes secas após a floração.",
      },
      beneficios: {
        saude: "",
        culinaria: "",
        outros: "Decoração e embelezamento de ambientes internos.",
      },
    },
  ],
};
