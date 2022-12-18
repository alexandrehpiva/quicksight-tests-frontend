export const zipCodeValidate = (cep) => {
  if (!RegExp(/^\d{5}-\d{3}$/).test(cep)) {
    return false
  }

  const _cep = cep.replace(/\D/g, '')
  if (_cep.length !== 8) {
    return false
  }

  const part1 = (c) => parseInt(c.substring(0, 3))

  const cepStates = [
    { state: 'SP', match: (c) => part1(c) >= 10 && part1(c) <= 199 },
    { state: 'RJ', match: (c) => part1(c) >= 200 && part1(c) <= 289 },
    { state: 'ES', match: (c) => part1(c) >= 290 && part1(c) <= 299 },
    { state: 'MG', match: (c) => part1(c) >= 300 && part1(c) <= 399 },
    { state: 'BA', match: (c) => part1(c) >= 400 && part1(c) <= 489 },
    { state: 'SE', match: (c) => part1(c) >= 490 && part1(c) <= 499 },
    { state: 'PE', match: (c) => part1(c) >= 500 && part1(c) <= 569 },
    { state: 'AL', match: (c) => part1(c) >= 570 && part1(c) <= 579 },
    { state: 'PB', match: (c) => part1(c) >= 580 && part1(c) <= 589 },
    { state: 'RN', match: (c) => part1(c) >= 590 && part1(c) <= 599 },
    { state: 'CE', match: (c) => part1(c) >= 600 && part1(c) <= 639 },
    { state: 'PI', match: (c) => part1(c) >= 640 && part1(c) <= 649 },
    { state: 'MA', match: (c) => part1(c) >= 650 && part1(c) <= 659 },
    { state: 'PA', match: (c) => part1(c) >= 660 && part1(c) <= 688 },
    {
      state: 'AM',
      match: (c) =>
        (part1(c) >= 690 && part1(c) <= 692) ||
        (part1(c) >= 694 && part1(c) <= 698)
    },
    { state: 'AP', match: (c) => part1(c) === 689 },
    { state: 'RR', match: (c) => part1(c) === 693 },
    { state: 'AC', match: (c) => part1(c) === 699 },
    { state: 'DF', match: (c) => part1(c) >= 700 && part1(c) <= 769 },
    { state: 'TO', match: (c) => part1(c) >= 770 && part1(c) <= 779 },
    { state: 'MT', match: (c) => part1(c) >= 780 && part1(c) <= 788 },
    { state: 'MS', match: (c) => part1(c) >= 790 && part1(c) <= 799 },
    { state: 'RO', match: (c) => part1(c) === 789 },
    { state: 'PR', match: (c) => part1(c) >= 800 && part1(c) <= 879 },
    { state: 'SC', match: (c) => part1(c) >= 880 && part1(c) <= 899 },
    { state: 'RS', match: (c) => part1(c) >= 900 && part1(c) <= 999 }
  ]

  const cepState = cepStates.find((state) => state.match(_cep))

  if (!cepState) {
    return false
  }

  return cepState.state
}
