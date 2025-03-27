export const generateWhatsAppLink = (value: string) => {
  const words = value.split(' ');
  const joinWords = words.join('%20');
  return `https://api.whatsapp.com/send?phone=13529105594&text=Hola%2C%20estoy%20interesado%20en%20el%20producto%20${joinWords}`;
};
