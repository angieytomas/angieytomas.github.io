import type { SiteContent } from "../utils/site";
import { RSVP_EMBED_URL } from "./rsvp";

export const es: SiteContent = {
  lang: "es",
  meta: {
    title: "Angie y Tomas en Buenos Aires",
    description: "Sitio bilingue temporal con la fecha, los planes en Buenos Aires, el RSVP y algunos consejos practicos de viaje."
  },
  nav: [
    { label: "Detalles", href: "#details" },
    { label: "RSVP", href: "#rsvp" },
    { label: "Viaje", href: "#travel" },
    { label: "FAQ", href: "#faq" }
  ],
  languageSwitcher: {
    label: "EN",
    otherLanguageLabel: "View in English",
    otherLanguageHref: "en/"
  },
  hero: {
    eyebrow: "Version temporal para reservar la fecha",
    names: "Angie y Tomas",
    date: "Sabado 20 de marzo de 2027",
    location: "Buenos Aires, Argentina",
    intro: "Queremos compartir desde ya la informacion mas importante para que puedan empezar a organizarse. Por favor reserven el sabado 20 de marzo de 2027 para la boda y, si pueden, tambien dejen libres el jueves 18 y el domingo 21 de marzo para hacer algo tranquilo alrededor de la celebracion. Vamos a sumar mas informacion muy pronto.",
    primaryCta: "Confirmar asistencia",
    secondaryCta: "Ver detalles",
    asideTemporaryLabel: "Version temporal",
    asideTemporaryText: "Esta web es una primera version. Ya estan los datos clave y pronto vamos a subir el resto del plan.",
    asideGuestLabel: "Lo importante por ahora",
    asideGuestText: "Por el momento, lo mas importante es la fecha, Buenos Aires, el RSVP y algunos consejos de viaje."
  },
  details: {
    title: "Datos clave",
    intro: "Esta es una version temporal de la web, asi que todavia hay cosas por definir. Por ahora, usen esta informacion para planear el viaje.",
    cards: [
      {
        title: "Celebracion principal",
        description: "La boda va a ser en Buenos Aires. Vamos a compartir el lugar exacto, los horarios y la logistica apenas esten confirmados.",
        meta: "Sabado 20 de marzo de 2027"
      },
      {
        title: "Otras fechas para reservar",
        description: "Si el viaje se los permite, tambien nos encantaria que se guarden el jueves 18 y el domingo 21 de marzo para hacer algo relajado con todos.",
        meta: "Jueves 18 y domingo 21 de marzo de 2027"
      },
      {
        title: "Mas detalles pronto",
        description: "Todavia nos faltan cerrar varias cosas, asi que piensen esta web como una version inicial para organizarse. Pronto vamos a sumar lugar, cronograma, recomendaciones de alojamiento y datos utiles.",
        meta: "Gracias por la paciencia"
      }
    ],
    mapLabel: "Abrir Buenos Aires en Google Maps",
    mapHref: "https://maps.google.com/?q=Buenos+Aires+Argentina",
    timelineTitle: "Plan actual",
    timeline: [
      {
        time: "Jue 18 Mar",
        title: "Encuentro tranquilo",
        description: "Nos gustaria organizar algo informal para quienes ya esten en la ciudad."
      },
      {
        time: "Sab 20 Mar",
        title: "Dia de la boda",
        description: "La celebracion principal en Buenos Aires."
      },
      {
        time: "Dom 21 Mar",
        title: "Cierre relajado",
        description: "Nos encantaria compartir un ultimo plan tranquilo antes de que todos vuelvan."
      }
    ]
  },
  rsvp: {
    title: "RSVP",
    intro: "Por favor confirmen cuando puedan, aunque todavia esten acomodando el viaje. Nos ayuda mucho tener una idea temprana.",
    embedNotice: "Si el formulario embebido no les carga bien, pueden abrirlo en una pestaña nueva con el boton.",
    embedUrl: RSVP_EMBED_URL,
    openFormLabel: "Abrir formulario",
    deadlineLabel: "Si pueden, respondan cuanto antes"
  },
  travel: {
    title: "Consejos de viaje",
    intro: "Por ahora, lo mas util es pensar el viaje alrededor de Buenos Aires y mantenerlo simple.",
    cards: [
      {
        title: "Aeropuertos",
        description: "La mayoria de quienes viajen desde afuera deberian planear llegar directo a Buenos Aires, normalmente por Ezeiza (EZE). No hay nada previsto en Mendoza."
      },
      {
        title: "Consejos para vuelos",
        description: "Si creen que van a venir, reservar antes suele ayudar con precios y rutas. Una tarifa flexible puede servir mientras terminamos de definir mas detalles."
      },
      {
        title: "Pasaporte y visa",
        description: "Revisen la vigencia del pasaporte y los requisitos de entrada con anticipacion. Algunas nacionalidades pueden necesitar verificar condiciones especificas."
      },
      {
        title: "Seguro de viaje",
        description: "Recomendamos contratar seguro de viaje, sobre todo si el itinerario incluye varias escalas o equipaje despachado."
      },
      {
        title: "Transporte local",
        description: "En Buenos Aires es facil moverse con taxi o apps de transporte. Si mas adelante hace falta coordinar algo puntual para los eventos, lo vamos a indicar."
      }
    ]
  },
  stay: {
    title: "Donde alojarse",
    intro: "Mas adelante vamos a compartir recomendaciones mas concretas. Por ahora, estas son algunas zonas a tener en cuenta en Buenos Aires.",
    cards: [
      {
        title: "Palermo",
        description: "Una zona muy elegida, con muchos cafes, restaurantes y opciones de alquiler temporario. Comoda para una estadia facil en la ciudad."
      },
      {
        title: "Recoleta",
        description: "Un barrio clasico, con hoteles, avenidas amplias y un ritmo mas tranquilo. Buena opcion si prefieren una zona mas tradicional."
      },
      {
        title: "Reservas flexibles",
        description: "Como todavia faltan definir algunos detalles del evento, puede ser buena idea reservar con cancelacion flexible si lo hacen con mucha anticipacion."
      }
    ]
  },
  guide: {
    title: "Notas utiles",
    intro: "Unos tips rapidos para quienes esten pensando en viajar a Buenos Aires.",
    cards: [
      {
        title: "Dinero",
        description: "En muchos lugares aceptan tarjeta, pero sigue siendo util llevar algo de efectivo. Como las practicas de pago pueden cambiar, conviene revisar informacion actual antes de viajar."
      },
      {
        title: "Clima",
        description: "Marzo sigue siendo epoca calida en Buenos Aires, con dias templados a calurosos y noches agradables, aunque puede haber humedad."
      },
      {
        title: "SIM y eSIM",
        description: "Si su telefono lo permite, una eSIM suele ser la opcion mas sencilla. Si no, tambien pueden conseguir una SIM local en ciudades grandes."
      },
      {
        title: "Enchufes",
        description: "En Argentina son comunes los enchufes tipo C y tipo I. Si hace falta, traigan adaptador y revisen la compatibilidad de voltaje."
      },
      {
        title: "Seguridad y costumbres",
        description: "Valen las mismas precauciones basicas que en cualquier ciudad. Cenas tardias, mucha calidez y celebraciones largas son parte del ritmo local."
      }
    ]
  },
  activities: {
    title: "Alrededor del fin de semana",
    intro: "Todavia no tenemos el plan social completo, pero estas son las instancias que nos gustaria armar alrededor de la boda.",
    items: [
      {
        title: "Jueves 18 de marzo",
        description: "Un encuentro relajado para quienes lleguen antes."
      },
      {
        title: "Sabado 20 de marzo",
        description: "La celebracion de la boda en Buenos Aires."
      },
      {
        title: "Domingo 21 de marzo",
        description: "Un ultimo plan tranquilo antes de despedirnos."
      }
    ]
  },
  faq: {
    title: "Preguntas frecuentes",
    intro: "Por ahora, algunas respuestas rapidas. Vamos a sumar mas cuando el plan este mas cerrado.",
    items: [
      {
        question: "Esta es la web definitiva?",
        answer: "Todavia no. Esta es la version temporal con la informacion mas importante para organizarse, y la vamos a ir actualizando."
      },
      {
        question: "Donde es la boda?",
        answer: "En Buenos Aires, Argentina. Cuando terminemos de definir el lugar exacto y los horarios, los vamos a publicar aca."
      },
      {
        question: "Conviene reservar otras fechas ademas del dia de la boda?",
        answer: "Si pueden, si. Nos encantaria que tambien se guarden el jueves 18 y el domingo 21 de marzo de 2027 para planes mas relajados."
      },
      {
        question: "Tengo que esperar a que este todo definido para hacer el RSVP?",
        answer: "No. Si ya saben mas o menos si van a venir, nos ayuda mucho que respondan cuanto antes."
      },
      {
        question: "Tengo que planear algo en Mendoza?",
        answer: "No. Todo, por ahora, esta pensado en Buenos Aires."
      }
    ]
  },
  stickyCta: "RSVP",
  footer: "Web temporal de la boda de Angie y Tomas en Buenos Aires."
};
