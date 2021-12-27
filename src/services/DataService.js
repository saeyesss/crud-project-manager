import { db } from "../main";
import firebase from "firebase/compat/app";

class DataService {
  getAll() {
    return db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("projects");
  }

  create(project) {
    // return db.add(project);n
    return db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("projects")
      .add(project);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new DataService();
