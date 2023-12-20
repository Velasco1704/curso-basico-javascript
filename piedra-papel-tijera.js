const game = (userOption) => {
  const options = {
    PIEDRA: "piedra",
    PAPEL: "papel",
    TIJERA: "tijera",
  };

  const machine = [options.PIEDRA, options.TIJERA, options.PAPEL][
    Math.floor(Math.random() * 3)
  ];

  if (userOption === machine)
    return console.log(`you: ${userOption} / machine: ${machine} = tie`);
  else if (userOption === options.PIEDRA && machine === options.PAPEL)
    return console.log(`you: ${userOption} / machine: ${machine} = lose`);
  else if (userOption === options.PIEDRA && machine === options.TIJERA)
    return console.log(`you: ${userOption} / machine: ${machine} = win`);
  if (userOption === options.PAPEL && machine === options.PIEDRA)
    return console.log(`you: ${userOption} / machine: ${machine} = win`);
  else if (userOption === options.PAPEL && machine === options.TIJERA)
    return console.log(`you: ${userOption} / machine: ${machine} = lose`);
  if (userOption === options.TIJERA && machine === options.PIEDRA)
    return console.log(`you: ${userOption} / machine: ${machine} = lose`);
  else if (userOption === options.TIJERA && machine === options.PAPEL)
    return console.log(`you: ${userOption} / machine: ${machine} = win`);
  else if (
    userOption !== options.PAPEL ||
    userOption !== options.PIEDRA ||
    userOption !== options.TIJERA
  )
    return console.log("You may have made a mistake writing");
  else return console.log("Error");
};

game("piedra");
