/*
  CONFIGURAÇÃO CENTRAL — LIBERTA CABUÇU 2026
  Edite este arquivo para atualizar o conteúdo sem mexer na estrutura do site.
*/
const EVENT_CONFIG = {
  name: "Liberta Cabuçu 2026",
  startDate: "2026-09-26T18:00:00-03:00", // horário inicial editável
  dateLabel: "26 e 27 de setembro de 2026",
  locationLabel: "Estrada Antônio Cícero de Souza, n° 305 - Cabuçu - Itaboraí - RJ",

  // Substitua pelo endereço real da igreja.
  address: "Estrada Antônio Cícero de Souza, n° 305 - Cabuçu - Itaboraí - RJ",
  mapsUrl: "https://maps.app.goo.gl/yB3LV7Ee9A5eSXEk9",

  social: {
    instagram: "https://www.instagram.com/ieccabucu?igsi=aHA2eGU4bGdpNGRs&utm_source=qr",
    facebook: "https://www.facebook.com/share/1PRXLqeRiR/?mibextid=wwXIfr",
    whatsapp: "https://wa.me/(21) 4114-1549"
  },

  shareMessage:
    "Oi! Queria te convidar para o Liberta Cabuçu 2026. Vai acontecer nos dias 26 e 27 de setembro, na Igreja Evangélica Congregacional de Cabuçu. É um encontro aberto para todo mundo. Vem com a gente! ",

  schedule: [
    {
      date: "26 DE SETEMBRO",
      label: "SÁBADO",
      items: [
        { time: "18:00", title: "Acolhimento & Conexão", type: "Recepção" },
        { time: "19:00", title: "Abertura do Liberta", type: "Programação" },
        { time: "19:30", title: "Louvor & Palavra", type: "Culto" },
        { time: "21:00", title: "Encontro & Comunhão", type: "Comunidade" }
      ]
    },
    {
      date: "27 DE SETEMBRO",
      label: "DOMINGO",
      items: [
        { time: "18:00", title: "Acolhimento & Conexão", type: "Recepção" },
        { time: "19:00", title: "Louvor", type: "Música" },
        { time: "19:30", title: "Palavra & Transformação", type: "Culto" },
        { time: "21:00", title: "Encerramento", type: "Comunidade" }
      ]
    }
  ],

  faq: [
    { q: "É gratuito?", a: "Sim. O Liberta é uma programação aberta ao público e gratuita." },
    { q: "Preciso ser cristão para participar?", a: "Não. Você não precisa seguir uma religião nem ter experiência com igreja. A ideia é justamente receber você como está." },
    { q: "Posso levar alguém?", a: "Pode — e a gente espera que você leve! Compartilhe o convite com alguém que gostaria de viver essa experiência." },
    { q: "Preciso fazer inscrição?", a: "Não há inscrição prévia indicada nesta configuração. Caso isso mude, atualize esta resposta aqui no config.js." },
    { q: "Onde será realizado?", a: "Em uma igreja localizada em Cabuçu, São Gonçalo/RJ. O endereço completo pode ser atualizado no config.js." },
    { q: "O que preciso levar?", a: "Você só precisa vir como está. Se houver alguma orientação especial, ela pode ser acrescentada nesta resposta." }
  ]
};
