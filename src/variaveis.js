// Testando variáveis

const currentDate = new Date();
const formatedDate = Intl.DateTimeFormat("pt-br").format(currentDate);

const myName = "Daniel";

function dispatchWelcomeMessage({ name, date }) {
  console.log(`Bem vindo ${name}! Hoje é ${date}`);
}

dispatchWelcomeMessage({
  name: myName,
  date: formatedDate
});
