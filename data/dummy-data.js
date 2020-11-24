import Meeting from '../models/meeting';
//id, concept, status, senderID, receiverID, result
export const MEETINGS = [
  {"id": "1", "concept":"sopar", "status":"pending","senderID":"Victor","receiverID":"Marina", "result": ["Dilluns","Dimarts"]},
  {"id": "2", "concept":"passejar", "status":"solved","senderID":"Marina","receiverID":"Victor", "result": ["Divendres","Dijous"]},  
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
    days: ["Dilluns", "Dimecres", "Diumenge"],
    image: "https://png.pngitem.com/pimgs/s/130-1300380_female-user-image-icon-hd-png-download.png"
  }
];