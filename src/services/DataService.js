import { db } from "../main";
import firebase from "firebase/compat/app";

class DataService {
  getAll() {
    const ref = db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("projects")
      .get();
    return ref;
  }

  create(project) {
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
