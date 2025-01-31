const Favourites = require('../Model/favouriteModel.js');

const favouriteCtrl = {
  //Xem toàn bộ danh sách bộ phim yêu thích
  async getAllListFavourite(req, res) {
    try {
      const data = await Favourites.find({}).populate('user').populate('film');
      return res.status(200).json({
        status: 200,
        success: true,
        msg: `Get all list favourite films successfully`,
        data: data,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get all list favourite films',
      });
    }
  },

  //Xem danh sách bộ phim yêu thích của người dùng
  async getFavouriteListOfUser(req, res) {
    try {
      const userId = req.user.id;
      const list = await Favourites.find({
        user: userId,
      })
        .populate('user')
        .populate('film');

      return res.status(200).json({
        status: 200,
        success: true,
        msg: `Get list favourite films successfully`,
        data: list,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get list favourite films',
      });
    }
  },

  //Thêm bộ phim vào danh sách yêu thích của người dùng
  async addFilmIntoFavouriteList(req, res) {
    try {
      const userId = req.user.id;
      const filmId = req.params.filmId;

      const newFavourite = new Favourites({
        user: userId,
        film: filmId,
      });

      //save in mongodb
      await newFavourite.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Added film into list favourite successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed add film into list favourite',
      });
    }
  },

  //Xóa bộ phim khỏi danh sách yêu thích của người dùng
  async removeFilmFromListFavourite(req, res) {
    try {
      const idFilm = req.params.idFilm;
      await Favourites.deleteMany({ film: idFilm });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Removed film from list successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to remove film from list',
      });
    }
  },
};

module.exports = favouriteCtrl;
