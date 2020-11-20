import Meeting from '../models/meeting';
import User from '../models/user';

export const MEETINGS = [
    new Meeting("1", "Sopar amics", "1 de gener 2021", "21:00", "Marina"),
    new Meeting("2", "Esport per collserola", "Dimarts", "11:00", "Vicor, Adri, Marc"),
    new Meeting("3", "Quedada post confinament", "2 de desembre 2021", "23:00", "Victor"),
    new Meeting("4", "Anem al cine", "Dijous", "17:00", "Ayla, Lili"),
    new Meeting("5","Dinar aquesta setmana", "", "13:00", "Joan, Judit"),
    new Meeting("6", "Fem algo dissabte", "Dissabte", "", "Marina"),
  ];

export const INVITATIONS = [
    new Meeting("1", "Quedar per dinar", "", "13:00", "Joan"),
    new Meeting("2", "Festa coronavirus", "Dimarts", "22:00", "Marina"),
];

export const USER = [
  new User("1","Marina Miró Blanco", "marinamiro.99@gmail.com", "Lili99", "Victor, Marc, Judit, Joan, Adri, Ayla, Lili")
];