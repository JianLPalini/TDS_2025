for (let contagem = 10; contagem >= 0; contagem--) {
    if (contagem === 0) {
      console.log("💥💥Booooooom 💥💥");
    } else if (contagem % 2 === 0) {
      console.log(contagem + " - Tic");
    } else {
      console.log(contagem + " - Tac");
    }
  }