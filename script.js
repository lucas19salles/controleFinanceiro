let saldo = prompt("Informe a quantidade de dinheiro inicial: ");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    `Saldo disponível: R$ ${saldo} \n1- Depósitar \n2- Saque \n3- Encerrar`
  );
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Qual valor deseja depósitar?"));
      break;

    case "2":
      saldo -= parseFloat(prompt("Qual valor deseja sacar?"));
      break;

    case "3":
      alert(`Encerrando`);
      break;

    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");
