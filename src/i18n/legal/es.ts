import type { LegalContent } from "./types";

export const legalEs: LegalContent = {
  privacy: (c) => ({
    intro:
      "Cleenty respeta su privacidad. Esta política explica qué datos personales recogemos, para qué los utilizamos, con quién los compartimos y cuáles son sus derechos, de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la legislación portuguesa aplicable.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: [
          `El responsable del tratamiento de sus datos es ${c.entity}, con domicilio en ${c.address}.`,
          `Para cualquier consulta sobre privacidad, puede contactarnos en ${c.email} o por WhatsApp en el ${c.phone}.`,
        ],
      },
      {
        heading: "2. Qué datos recogemos",
        body: [
          "Solo recogemos los datos necesarios para responder a sus solicitudes y prestar nuestros servicios:",
          [
            "Datos de identificación y contacto: nombre, número de teléfono y dirección de correo electrónico.",
            "La dirección donde se presta el servicio o donde se recoge y entrega la ropa.",
            "Información sobre el servicio: tipo de limpieza, fechas, características de la vivienda e instrucciones que nos indique.",
            "Datos de facturación: nombre y número de identificación fiscal (NIF), cuando solicita factura.",
            "El contenido de los mensajes que nos envía por WhatsApp, correo electrónico o teléfono.",
          ],
          "Este sitio web no tiene formularios ni área de cliente. Las solicitudes de presupuesto se hacen por WhatsApp, fuera del sitio.",
        ],
      },
      {
        heading: "3. Para qué utilizamos los datos y con qué base legal",
        body: [
          [
            "Responder a solicitudes de presupuesto e información — medidas precontractuales a petición suya.",
            "Programar y prestar los servicios de limpieza y de recogida y entrega de ropa — ejecución del contrato.",
            "Emitir facturas y cumplir obligaciones fiscales y contables — obligación legal.",
            "Garantizar la seguridad y el buen funcionamiento del sitio — interés legítimo.",
            "Enviar novedades o promociones — solo con su consentimiento previo, que puede retirar en cualquier momento.",
          ],
          "No tomamos decisiones automatizadas ni elaboramos perfiles con sus datos.",
        ],
      },
      {
        heading: "4. Con quién compartimos los datos",
        body: [
          "No vendemos ni alquilamos sus datos. Solo los compartimos con quien los necesita para prestar el servicio o cumplir la ley:",
          [
            "Lavanderías asociadas, que reciben únicamente la información necesaria para tratar su ropa.",
            "WhatsApp (Meta Platforms Ireland), cuando nos contacta por esa vía, según la política de privacidad de WhatsApp.",
            "El proveedor de alojamiento del sitio, que puede registrar datos técnicos de acceso.",
            "Nuestro contable y la Autoridad Tributaria portuguesa, a efectos de facturación.",
            "Autoridades públicas, cuando la ley lo exija.",
          ],
        ],
      },
      {
        heading: "5. Transferencias fuera del Espacio Económico Europeo",
        body: [
          "Algunos proveedores, como WhatsApp (Meta) o Google, pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, las transferencias están protegidas por garantías adecuadas previstas en el RGPD, como las cláusulas contractuales tipo aprobadas por la Comisión Europea o el Marco de Privacidad de Datos UE-EE. UU.",
        ],
      },
      {
        heading: "6. Durante cuánto tiempo conservamos los datos",
        body: [
          [
            "Solicitudes de presupuesto que no resulten en un servicio: hasta 12 meses después del último contacto.",
            "Datos de clientes: mientras dure la relación comercial y, después, durante el plazo necesario para atender posibles reclamaciones.",
            "Facturas y documentos contables: 10 años, según exige la ley.",
          ],
          "Transcurridos estos plazos, los datos se eliminan o se anonimizan.",
        ],
      },
      {
        heading: "7. Cookies y tecnologías similares",
        body: [
          "Este sitio no utiliza cookies publicitarias ni de análisis. Solo guardamos, en el almacenamiento local de su navegador, el idioma que ha elegido, para mantenerlo en su próxima visita. Esta información permanece en su dispositivo y no se nos envía.",
          "El sitio incluye enlaces a servicios externos — WhatsApp, Google Maps, Instagram y Facebook. Al abrirlos, se aplica la política de privacidad de cada uno de esos servicios.",
          "Si en el futuro utilizamos herramientas como Google Analytics o Google Ads, le pediremos su consentimiento antes de activarlas y actualizaremos esta política. Puede obtener más información sobre cómo utiliza Google los datos en https://policies.google.com/technologies/partner-sites.",
        ],
      },
      {
        heading: "8. Sus derechos",
        body: [
          "De acuerdo con el RGPD, tiene derecho a:",
          [
            "Acceder a sus datos personales.",
            "Solicitar la rectificación de datos inexactos o incompletos.",
            "Solicitar la supresión de sus datos.",
            "Solicitar la limitación del tratamiento.",
            "Oponerse al tratamiento basado en el interés legítimo.",
            "Recibir sus datos en un formato estructurado (portabilidad).",
            "Retirar su consentimiento en cualquier momento, sin que ello afecte al tratamiento ya realizado.",
          ],
          `Para ejercer estos derechos, escríbanos a ${c.email}. Le responderemos en un plazo máximo de un mes.`,
          "También tiene derecho a presentar una reclamación ante la autoridad portuguesa de protección de datos (CNPD), en https://www.cnpd.pt.",
        ],
      },
      {
        heading: "9. Seguridad",
        body: [
          "Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos frente a pérdidas, accesos no autorizados o divulgación indebida. El sitio se sirve mediante conexión segura (HTTPS) y el acceso a los datos de clientes está limitado a quien los necesita.",
        ],
      },
      {
        heading: "10. Menores",
        body: [
          "Nuestros servicios están dirigidos a mayores de 18 años. No recogemos intencionadamente datos de menores.",
        ],
      },
      {
        heading: "11. Cambios en esta política",
        body: [
          "Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios. La fecha de la última actualización figura al principio de esta página.",
        ],
      },
    ],
  }),

  terms: (c) => ({
    intro:
      "Estos Términos y condiciones regulan el uso de este sitio web y la prestación de los servicios de Cleenty. Al pedir un presupuesto o reservar un servicio, declara haberlos leído y aceptado.",
    sections: [
      {
        heading: "1. Identificación",
        body: [
          `Los servicios los presta ${c.entity}, con domicilio en ${c.address}. Contacto: ${c.email} y WhatsApp ${c.phone}.`,
        ],
      },
      {
        heading: "2. Servicios",
        body: [
          "Cleenty presta los siguientes servicios en Amora, Cruz de Pau y alrededores:",
          [
            "Limpieza doméstica, periódica o puntual.",
            "Limpieza a fondo.",
            "Limpieza de fin de obra.",
            "Recogida y entrega de ropa para lavado y planchado, realizados por nuestras lavanderías asociadas.",
          ],
          "La descripción de los servicios en este sitio es informativa. El alcance exacto de cada servicio es el acordado en el presupuesto.",
        ],
      },
      {
        heading: "3. Presupuestos y reservas",
        body: [
          "Los presupuestos son gratuitos y sin compromiso, y se solicitan por WhatsApp o por correo electrónico. El importe se basa en la información que nos facilita. Si las condiciones en el lugar son muy distintas de las descritas, se lo comunicaremos antes de empezar y solo continuaremos con su conformidad.",
          "Una reserva queda confirmada cuando acordamos por escrito la fecha, el servicio y el precio.",
        ],
      },
      {
        heading: "4. Precios y pago",
        body: [
          [
            "Los precios se indican en euros e incluyen el IVA al tipo legal vigente, cuando corresponda.",
            "El tratamiento de la ropa se cobra por kilo.",
            "La recogida y entrega de ropa no tiene coste dentro de nuestra zona de servicio. Fuera de ella, cualquier coste se indica antes de la reserva.",
            "Las formas y el momento de pago se indican en el presupuesto. Emitimos factura de todos los servicios.",
          ],
        ],
      },
      {
        heading: "5. Cambios y cancelaciones",
        body: [
          "Puede cambiar o cancelar una reserva sin coste hasta 24 horas antes de la hora acordada. Las cancelaciones con menos antelación, o la imposibilidad de acceder a la vivienda a la hora acordada, pueden suponer el pago de una tarifa, indicada en el presupuesto.",
          "Si, por causa de fuerza mayor, no podemos acudir, le avisaremos con la mayor antelación posible y le propondremos una nueva fecha, sin ningún coste para usted.",
        ],
      },
      {
        heading: "6. Obligaciones del cliente",
        body: [
          [
            "Garantizar el acceso a la vivienda y la disponibilidad de agua y electricidad.",
            "Informarnos de objetos frágiles o de valor, o de superficies que requieran cuidados especiales.",
            "Guardar el dinero, las joyas y otros objetos de valor antes del servicio.",
            "Avisarnos si hay animales de compañía en la vivienda.",
          ],
        ],
      },
      {
        heading: "7. Recogida y entrega de ropa",
        body: [
          [
            "Revise los bolsillos antes de la recogida. No nos hacemos responsables de los objetos que queden en la ropa.",
            "Indíquenos las prendas delicadas o que necesiten un tratamiento especial. Cada prenda se trata según su etiqueta.",
            "Podemos rechazar prendas sin etiqueta, muy dañadas o que no puedan tratarse con seguridad.",
            "El plazo habitual de devolución es de 48 a 72 horas. Es una estimación que puede variar en épocas de mayor demanda; siempre le avisaremos de cualquier retraso.",
            "Revise la ropa en la entrega y comuníquenos cualquier problema en un plazo de 48 horas.",
          ],
        ],
      },
      {
        heading: "8. Responsabilidad",
        body: [
          "Realizamos todos los servicios con cuidado y profesionalidad. Si se produce algún daño causado por nuestro equipo o por las lavanderías asociadas, comuníquelo en un plazo de 48 horas, a ser posible con fotografías. Analizaremos cada caso y, cuando la responsabilidad sea nuestra, procederemos a la reparación o compensación adecuada.",
          "No somos responsables de los daños derivados de defectos o desgaste preexistentes, de etiquetas incorrectas o de información no facilitada por el cliente.",
          "Nada de lo dispuesto en estos términos limita los derechos que la ley reconoce a los consumidores.",
        ],
      },
      {
        heading: "9. Reclamaciones",
        body: [
          `Puede presentar cualquier reclamación en ${c.email}. También disponemos de Libro de Reclamaciones (Livro de Reclamações), incluida la versión electrónica en https://www.livroreclamacoes.pt.`,
        ],
      },
      {
        heading: "10. Resolución alternativa de litigios",
        body: [
          "En caso de litigio de consumo, el consumidor puede acudir a una entidad de resolución alternativa de litigios, de acuerdo con la Ley portuguesa n.º 144/2015, de 8 de septiembre, como el CNIACC – Centro Nacional de Información y Arbitraje de Conflictos de Consumo (https://www.cniacc.pt).",
          "Más información en el Portal del Consumidor portugués, en https://www.consumidor.gov.pt.",
        ],
      },
      {
        heading: "11. Uso del sitio web",
        body: [
          "Los textos, imágenes, logotipo y demás contenidos de este sitio pertenecen a Cleenty o se utilizan con autorización, y no pueden reproducirse sin consentimiento previo.",
          "Procuramos que la información del sitio sea correcta y esté actualizada, pero los precios y condiciones aplicables a cada servicio son siempre los del presupuesto.",
        ],
      },
      {
        heading: "12. Ley aplicable y cambios",
        body: [
          "Estos términos se rigen por la ley portuguesa. Podemos actualizarlos en cualquier momento; los cambios solo se aplican a los servicios reservados después de su publicación.",
        ],
      },
    ],
  }),
};
