import { TouchableNativeFeedback } from "react-native-gesture-handler";

class Meeting {
    constructor(id, title, day, hour, participants) {
      this.id = id;
      this.title = title;
      this.day = day;
      this.hour = hour;
      this.participants = participants;
    }
  }
  
  export default Meeting;