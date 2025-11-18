import { TrainingType, TrainingPlan, Testimonial, WhatsAppConfig } from '@/types';

export const trainingTypes: TrainingType[] = [
  {
    id: '1',
    name: 'Treino para Emagrecer',
    description: 'Programa intensivo focado na queima de gordura e definição muscular',
    icon: 'Flame',
    benefits: ['Queima até 500 calorias por sessão', 'Acelera o metabolismo', 'Tonifica músculos', 'Melhora condicionamento']
  },
  {
    id: '2',
    name: 'Treino de Força',
    description: 'Desenvolvimento de força máxima e potência muscular',
    icon: 'Dumbbell',
    benefits: ['Aumenta força funcional', 'Fortalece ossos', 'Melhora postura', 'Previne lesões']
  },
  {
    id: '3',
    name: 'Musculação',
    description: 'Hipertrofia muscular e ganho de massa magra',
    icon: 'Zap',
    benefits: ['Ganho de massa muscular', 'Definição corporal', 'Aumento da autoestima', 'Melhora da composição corporal']
  },
  {
    id: '4',
    name: 'Treino Funcional',
    description: 'Exercícios que simulam movimentos do dia a dia',
    icon: 'Activity',
    benefits: ['Melhora coordenação', 'Aumenta flexibilidade', 'Fortalece core', 'Previne dores nas costas']
  }
];

export const trainingPlans: TrainingPlan[] = [
  {
    id: '1',
    name: 'Plano Básico',
    price: 19900, // R$ 199,00 em centavos
    duration: '1 mês',
    features: [
      '2x por semana',
      'Treino personalizado',
      'Acompanhamento via WhatsApp',
      'Avaliação física inicial'
    ]
  },
  {
    id: '2',
    name: 'Plano Premium',
    price: 34900, // R$ 349,00 em centavos
    duration: '3 meses',
    features: [
      '3x por semana',
      'Treino personalizado',
      'Acompanhamento diário',
      'Plano nutricional básico',
      'Avaliação mensal',
      'Suporte prioritário'
    ],
    highlighted: true
  },
  {
    id: '3',
    name: 'Plano Elite',
    price: 59900, // R$ 599,00 em centavos
    duration: '6 meses',
    features: [
      'Treinos ilimitados',
      'Personal trainer dedicado',
      'Acompanhamento nutricional completo',
      'Avaliação quinzenal',
      'Acesso a todos os treinos',
      'Suporte 24/7',
      'Garantia de resultados'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    photo: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20happy%20woman%20fitness%20client%20smiling&image_size=square',
    text: 'Em 3 meses com o Ricardo Team perdi 15kg e ganhei muito mais disposição. O acompanhamento é excepcional!',
    result: '-15kg em 3 meses'
  },
  {
    id: '2',
    name: 'João Santos',
    photo: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20muscular%20man%20fitness%20client%20confident&image_size=square',
    text: 'Nunca imaginei que conseguiria ganhar tanto músculo. O Ricardo é um profissional incrível!',
    result: '+8kg de massa magra'
  },
  {
    id: '3',
    name: 'Ana Costa',
    photo: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20athletic%20woman%20fitness%20client%20strong&image_size=square',
    text: 'O treino funcional mudou minha vida. Não tenho mais dores nas costas e me sinto muito mais forte.',
    result: 'Sem dores nas costas'
  }
];

export const whatsappConfig: WhatsAppConfig = {
  phoneNumber: '5511999999999', // Número do Ricardo (exemplo)
  defaultMessage: 'Olá! Gostaria de saber mais sobre os treinos do Ricardo Team.'
};