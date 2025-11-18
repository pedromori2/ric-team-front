// Tipos de treinos oferecidos
export interface TrainingType {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

// Planos de treino
export interface TrainingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  highlighted?: boolean;
}

// Depoimentos de clientes
export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  text: string;
  result: string;
}

// Dados para pagamento
export interface PaymentData {
  planId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  amount: number;
}

// Configuração do WhatsApp
export interface WhatsAppConfig {
  phoneNumber: string;
  defaultMessage: string;
}

// Dados do formulário de contato
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Resposta da API Infinity Pay
export interface InfinityPayResponse {
  payment_url: string;
  payment_id: string;
  status: string;
}