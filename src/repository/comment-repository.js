import Comment from "../models/comment";
import CrudRepository from "./crud-repositoy";

class CommentRepository extends CrudRepository{
    constructor() {
           super(Comment);
    }       
}