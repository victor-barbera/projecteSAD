import { TouchableNativeFeedback } from "react-native-gesture-handler";

class Meeting {
    constructor(id, title, day, hour, status, admin) {
      this.id = id;
      this.title = title;
      this.day = day;
      this.hour = hour;
      this.status = status;
      this.admin = admin;
    }
  }
  
  export default Meeting;