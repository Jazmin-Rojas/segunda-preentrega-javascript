const fechaDeOperacion = () => {
  const fecha = new Date();
  return fecha.toLocaleDateString();
};

const gestionarSaldo = () => {
  let saldo = parseFloat(prompt("Ingrese su saldo Inicial"));
  const transacciones = [];

  if (isNaN(saldo)) {
    alert("Ingreso Inválido. Ingrese un número válido.");
    return;
  }

  while (true) {
    const operacion = prompt(`¿Qué Desea Realizar?
                               1- Deposito
                               2- Transferencia
                               3- Retiro
                               4- Salir`);

    if (operacion === "4") {
      break;
    }

    const monto = parseFloat(prompt("Ingrese el monto:"));

    if (isNaN(monto)) {
      alert("Monto inválido. Ingrese un número válido.");
      continue;
    }

    switch (operacion) {
      case "1":
        const depositoMsg = `Depositado ${monto} el ${fechaDeOperacion()}`;
        alert(depositoMsg);
        transacciones.push(depositoMsg);
        saldo += monto;
        break;

      case "2":
        if (monto <= saldo) {
          const cuentaDestino = prompt("Ingrese el número de cuenta destino:");
          const transferenciaMsg = `Transferidos ${monto} a la cuenta ${cuentaDestino} el ${fechaDeOperacion()}`;
          alert(transferenciaMsg);
          transacciones.push(transferenciaMsg);
          saldo -= monto;
        } else {
          alert("Fondos insuficientes para la transferencia.");
        }
        break;

      case "3":
        if (monto <= saldo) {
          const retiroMsg = `Retirados ${monto} de la cuenta el ${fechaDeOperacion()}`;
          alert(retiroMsg);
          transacciones.push(retiroMsg);
          saldo -= monto;
        } else {
          alert("Fondos insuficientes para el retiro.");
        }
        break;

      default:
        alert("Operación no reconocida. Ingrese una operación válida.");
        break;
    }
  }

  alert(`Su Saldo Final es ${saldo} con fecha ${fechaDeOperacion()}\n\nHistorial de Transacciones:\n${transacciones.join("\n")}`);
};

gestionarSaldo();
