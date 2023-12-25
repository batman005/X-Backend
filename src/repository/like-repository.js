import Like from "../models/like";
import CrudRepository from "./crud-repositoy";


class LikeRepository extends CrudRepository {
      constructor() {
             super(Like);
      }

}