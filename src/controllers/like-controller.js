import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
      

      try{
        const data = req.body;
        const response = await likeService.toggleLike(data.modelId, data.modelType, data.userId);
        console.log(response);
        return res.status(201).json({
            success: true,
            message: "Successfully toggle a like",
            data: response,
            err: {}
        });
      } catch(error){
        return res.status(500).json({
            success: false,
            message: "Error Encountered while toggling a tweet",
            data: {},
            err: error
        });
      }

}