interface User {
  fullName: string;
  commerce: string;
  email: string;
  type: string;
  role: string;
}

export const usersData: User[] = [
  {
    fullName: "Pedro Jimenez",
    commerce: "Falabella",
    email: "pedro@falabella.com",
    type: "Nemo",
    role: "Administrador",
  },
  {
    fullName: "Andrea Lopez",
    commerce: "Falabella",
    email: "andrea@falabella.com",
    type: "Nemo",
    role: "Vendedor",
  },
  {
    fullName: "Diomedes Diaz",
    commerce: "Koaj",
    email: "dias@gmail.com",
    type: "Nemo",
    role: "Administrador",
  },
  {
    fullName: "Aria Stark",
    commerce: "Winter",
    email: "sinrostro@bravos.com",
    type: "Nemo",
    role: "Administrador",
  },
];
