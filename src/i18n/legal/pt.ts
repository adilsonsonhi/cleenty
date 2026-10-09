import type { LegalContent } from "./types";

export const legalPt: LegalContent = {
  privacy: (c) => ({
    intro:
      "A Cleenty respeita a sua privacidade. Esta política explica que dados pessoais recolhemos, para que os utilizamos, com quem os partilhamos e quais são os seus direitos, nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD) e da legislação portuguesa aplicável.",
    sections: [
      {
        heading: "1. Responsável pelo tratamento",
        body: [
          `O responsável pelo tratamento dos seus dados é ${c.entity}, com morada em ${c.address}.`,
          `Para qualquer questão sobre privacidade, contacte-nos através de ${c.email} ou pelo WhatsApp ${c.phone}.`,
        ],
      },
      {
        heading: "2. Que dados recolhemos",
        body: [
          "Recolhemos apenas os dados necessários para responder aos seus pedidos e prestar os nossos serviços:",
          [
            "Dados de identificação e contacto: nome, número de telefone e endereço de e-mail.",
            "Morada onde é prestado o serviço ou feita a recolha e entrega de roupa.",
            "Informações sobre o serviço: tipo de limpeza, datas, características da casa e instruções que nos indique.",
            "Dados de faturação: nome e número de contribuinte (NIF), quando pede fatura.",
            "O conteúdo das mensagens que nos envia por WhatsApp, e-mail ou telefone.",
          ],
          "Este site não tem formulários nem área de cliente. Os pedidos de orçamento são feitos pelo WhatsApp, fora do site.",
        ],
      },
      {
        heading: "3. Para que utilizamos os dados e com que fundamento",
        body: [
          [
            "Responder a pedidos de orçamento e de informação — diligências pré-contratuais a seu pedido.",
            "Marcar e prestar os serviços de limpeza e de recolha e entrega de roupa — execução do contrato.",
            "Emitir faturas e cumprir obrigações fiscais e contabilísticas — obrigação legal.",
            "Garantir a segurança e o bom funcionamento do site — interesse legítimo.",
            "Enviar novidades ou promoções — apenas com o seu consentimento prévio, que pode retirar a qualquer momento.",
          ],
          "Não tomamos decisões automatizadas nem criamos perfis com os seus dados.",
        ],
      },
      {
        heading: "4. Com quem partilhamos os dados",
        body: [
          "Não vendemos nem alugamos os seus dados. Só os partilhamos com quem precisa deles para prestar o serviço ou cumprir a lei:",
          [
            "Lavandarias parceiras, que recebem apenas a informação necessária para tratar a sua roupa.",
            "WhatsApp (Meta Platforms Ireland), quando nos contacta por essa via, de acordo com a política de privacidade do WhatsApp.",
            "Fornecedor de alojamento do site, que pode registar dados técnicos de acesso.",
            "Contabilista certificado e Autoridade Tributária, para efeitos de faturação.",
            "Autoridades públicas, quando a lei o exija.",
          ],
        ],
      },
      {
        heading: "5. Transferências para fora do Espaço Económico Europeu",
        body: [
          "Alguns prestadores, como o WhatsApp (Meta) ou a Google, podem tratar dados fora do Espaço Económico Europeu. Nesses casos, as transferências estão protegidas por garantias adequadas previstas no RGPD, como as cláusulas contratuais-tipo aprovadas pela Comissão Europeia ou o Quadro de Privacidade de Dados UE-EUA.",
        ],
      },
      {
        heading: "6. Durante quanto tempo guardamos os dados",
        body: [
          [
            "Pedidos de orçamento que não resultem em serviço: até 12 meses após o último contacto.",
            "Dados de clientes: enquanto mantivermos uma relação comercial e, depois, pelo prazo necessário para eventuais reclamações.",
            "Faturas e documentos contabilísticos: 10 anos, conforme exigido por lei.",
          ],
          "Terminados estes prazos, os dados são apagados ou anonimizados.",
        ],
      },
      {
        heading: "7. Cookies e tecnologias semelhantes",
        body: [
          "Este site não utiliza cookies de publicidade nem de análise estatística. Guardamos apenas, no armazenamento local do seu navegador, o idioma que escolheu, para o manter na próxima visita. Esta informação fica no seu dispositivo e não é enviada para nós.",
          "O site inclui links para serviços externos — WhatsApp, Google Maps, Instagram e Facebook. Ao abri-los, passa a aplicar-se a política de privacidade de cada um desses serviços.",
          "Se no futuro passarmos a utilizar ferramentas como o Google Analytics ou o Google Ads, pediremos o seu consentimento antes de as ativar e atualizaremos esta política. Pode saber mais sobre como a Google utiliza os dados em https://policies.google.com/technologies/partner-sites.",
        ],
      },
      {
        heading: "8. Os seus direitos",
        body: [
          "Nos termos do RGPD, tem direito a:",
          [
            "Aceder aos seus dados pessoais.",
            "Pedir a retificação de dados incorretos ou incompletos.",
            "Pedir o apagamento dos seus dados.",
            "Pedir a limitação do tratamento.",
            "Opor-se ao tratamento baseado no interesse legítimo.",
            "Receber os seus dados num formato estruturado (portabilidade).",
            "Retirar o consentimento a qualquer momento, sem afetar o tratamento já realizado.",
          ],
          `Para exercer estes direitos, escreva para ${c.email}. Respondemos no prazo máximo de um mês.`,
          "Tem ainda o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em https://www.cnpd.pt.",
        ],
      },
      {
        heading: "9. Segurança",
        body: [
          "Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda, acesso não autorizado ou divulgação indevida. O site é servido através de ligação segura (HTTPS) e o acesso aos dados de clientes está limitado a quem deles necessita.",
        ],
      },
      {
        heading: "10. Menores",
        body: [
          "Os nossos serviços destinam-se a maiores de 18 anos. Não recolhemos intencionalmente dados de menores.",
        ],
      },
      {
        heading: "11. Alterações a esta política",
        body: [
          "Podemos atualizar esta política para refletir alterações legais ou nos nossos serviços. A data da última atualização é indicada no topo desta página.",
        ],
      },
    ],
  }),

  terms: (c) => ({
    intro:
      "Estes Termos e Condições regulam a utilização deste site e a prestação dos serviços da Cleenty. Ao pedir um orçamento ou marcar um serviço, declara que leu e aceita estas condições.",
    sections: [
      {
        heading: "1. Identificação",
        body: [
          `Os serviços são prestados por ${c.entity}, com morada em ${c.address}. Contactos: ${c.email} e WhatsApp ${c.phone}.`,
        ],
      },
      {
        heading: "2. Serviços",
        body: [
          "A Cleenty presta os seguintes serviços, em Amora, Cruz de Pau e arredores:",
          [
            "Limpeza doméstica, regular ou pontual.",
            "Limpeza profunda.",
            "Limpeza pós-obra.",
            "Recolha e entrega de roupa para lavagem e engomadoria, realizadas pelas nossas lavandarias parceiras.",
          ],
          "A descrição dos serviços neste site é informativa. O âmbito exato de cada serviço é o que for acordado no orçamento.",
        ],
      },
      {
        heading: "3. Orçamentos e marcações",
        body: [
          "Os orçamentos são gratuitos e sem compromisso, e são pedidos pelo WhatsApp ou por e-mail. O valor indicado baseia-se nas informações que nos transmite. Se as condições no local forem muito diferentes das descritas, informamos antes de começar e só avançamos com o seu acordo.",
          "Uma marcação fica confirmada quando acordarmos por escrito a data, o serviço e o preço.",
        ],
      },
      {
        heading: "4. Preços e pagamento",
        body: [
          [
            "Os preços são apresentados em euros e incluem IVA à taxa legal em vigor, quando aplicável.",
            "O tratamento de roupa é cobrado ao quilo.",
            "A recolha e entrega de roupa não tem custo dentro da nossa zona de atuação. Fora dessa zona, qualquer custo é indicado antes da marcação.",
            "As formas e o momento de pagamento são indicados no orçamento. Emitimos fatura de todos os serviços.",
          ],
        ],
      },
      {
        heading: "5. Alterações e cancelamentos",
        body: [
          "Pode alterar ou cancelar uma marcação sem custos até 24 horas antes da hora combinada. Cancelamentos com menos antecedência, ou a impossibilidade de acesso à casa na hora marcada, podem implicar o pagamento de uma taxa, indicada no orçamento.",
          "Se, por motivo de força maior, não pudermos comparecer, avisamos com a maior antecedência possível e propomos uma nova data, sem qualquer custo para si.",
        ],
      },
      {
        heading: "6. Obrigações do cliente",
        body: [
          [
            "Garantir o acesso à casa e a disponibilidade de água e eletricidade.",
            "Informar-nos de objetos frágeis, valiosos ou superfícies que exijam cuidados especiais.",
            "Guardar dinheiro, joias e outros bens de valor antes do serviço.",
            "Avisar-nos da presença de animais de estimação.",
          ],
        ],
      },
      {
        heading: "7. Recolha e entrega de roupa",
        body: [
          [
            "Antes da recolha, verifique os bolsos. Não nos responsabilizamos por objetos deixados na roupa.",
            "Indique-nos peças delicadas ou que precisem de tratamento especial. O tratamento segue as etiquetas de cada peça.",
            "Podemos recusar peças sem etiqueta, muito danificadas ou que não possam ser tratadas em segurança.",
            "O prazo habitual de devolução é de 48 a 72 horas. É uma estimativa, que pode variar em épocas de maior procura; avisamos sempre que houver atraso.",
            "Verifique a roupa na entrega e comunique-nos qualquer problema no prazo de 48 horas.",
          ],
        ],
      },
      {
        heading: "8. Responsabilidade",
        body: [
          "Realizamos todos os serviços com cuidado e profissionalismo. Se ocorrer algum dano causado pela nossa equipa ou pelas lavandarias parceiras, comunique-o no prazo de 48 horas, se possível com fotografias. Analisaremos cada caso e, quando a responsabilidade for nossa, procederemos à reparação ou compensação adequada.",
          "Não somos responsáveis por danos resultantes de defeitos ou desgaste pré-existentes, de etiquetas incorretas ou de informação não transmitida pelo cliente.",
          "Nada nestes termos limita os direitos que a lei reconhece aos consumidores.",
        ],
      },
      {
        heading: "9. Reclamações",
        body: [
          `Pode apresentar qualquer reclamação através de ${c.email}. Dispomos também de Livro de Reclamações, incluindo no formato eletrónico, em https://www.livroreclamacoes.pt.`,
        ],
      },
      {
        heading: "10. Resolução alternativa de litígios",
        body: [
          "Em caso de litígio de consumo, o consumidor pode recorrer a uma entidade de resolução alternativa de litígios, nos termos da Lei n.º 144/2015, de 8 de setembro, como o CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo (https://www.cniacc.pt).",
          "Mais informações no Portal do Consumidor, em https://www.consumidor.gov.pt.",
        ],
      },
      {
        heading: "11. Utilização do site",
        body: [
          "Os textos, imagens, logótipo e restante conteúdo deste site pertencem à Cleenty ou são utilizados com autorização, e não podem ser reproduzidos sem consentimento prévio.",
          "Procuramos manter a informação do site correta e atualizada, mas os preços e condições aplicáveis a cada serviço são sempre os do orçamento.",
        ],
      },
      {
        heading: "12. Lei aplicável e alterações",
        body: [
          "Estes termos regem-se pela lei portuguesa. Podemos atualizá-los a qualquer momento; as alterações aplicam-se apenas aos serviços marcados depois da sua publicação.",
        ],
      },
    ],
  }),
};
