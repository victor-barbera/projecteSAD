import Meeting from '../models/meeting';
import User from '../models/user';

export const MEETINGS = [ //id, concept, possible dates, status
    new Meeting("1", "Sopar amics", "1 de gener 2021", "21:00", "pending", "Jo"),
    new Meeting("2", "Esport per collserola", "Dimarts", "11:00", "pending", "Jo"),
    new Meeting("3", "Quedada post confinament", "2 de desembre 2021", "23:00", "solved", "Victor"),
    new Meeting("4", "Anem al cine", "Dijous", "17:00", "solved", "Jo"),
    new Meeting("5","Dinar aquesta setmana", "", "13:00", "solved", "Judit"),
    new Meeting("6", "Fem algo dissabte", "Dissabte", "", "solved", "Joan"),
    new Meeting("7", "Quedar per dinar", "", "13:00", "solved", "Marc"),
    new Meeting("8", "Festa coronavirus", "Dimarts", "22:00", "solved", "Jo"),
  ];
  export const INVITATIONS = [ //id, concept, possible dates, status
    new Meeting("1", "Fem la compra", "2021", "13:00", "pending", "Adri"),
    new Meeting("2", "Bici matiner", "Dimarts", "11:00", "pending", "Marc"),
  ];


export const USER = [
  {
    id:"1",
    name:"Example User", 
    email: "example@gmail.com", 
    password:"example_pwd", 
    contacts:["Victor", "Marc", "Judit","Joan","Adri"],
    image: "https://png.pngitem.com/pimgs/s/130-1300380_female-user-image-icon-hd-png-download.png"
  }
];