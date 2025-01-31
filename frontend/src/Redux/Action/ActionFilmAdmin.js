import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?get all Categories
export const GetAllCategoryStart = () => ({
    type: types.GET_ALL_CATEGORY_START,
  });
  export const GetAllCategorySuccess = (token) => ({
    type: types.GET_ALL_CATEGORY_SUCCESS,
    payload: token,
  });
  export const GetAllCategoryFail = (error) => ({
    type: types.GET_ALL_CATEGORY_FAIL,
    payload: error,
  });
//?get all Categories
export const GetAllSeriesFilmStart = () => ({
    type: types.GET_ALL_SERIESFILM_START,
  });
  export const GetAllSeriesFilmSuccess = (token) => ({
    type: types.GET_ALL_SERIESFILM_SUCCESS,
    payload: token,
  });
  export const GetAllSeriesFilmFail = (error) => ({
    type: types.GET_ALL_SERIESFILM_FAIL,
    payload: error,
  }); 
export const GetAllFilmStart = () => ({
    type: types.GET_ALL_FILM_START,
  });
  export const GetAllFilmSuccess = (token) => ({
    type: types.GET_ALL_FILM_SUCCESS,
    payload: token,
  });
  export const GetAllFilmFail = (error) => ({
    type: types.GET_ALL_FILM_FAIL,
    payload: error,
  }); 
export const GetAllRateStart = () => ({
    type: types.GET_ALL_RATE_START,
  });
  export const GetAllRateSuccess = (token) => ({
    type: types.GET_ALL_RATE_SUCCESS,
    payload: token,
  });
  export const GetAllRateFail = (error) => ({
    type: types.GET_ALL_RATE_FAIL,
    payload: error,
  }); 
export const GetAllFavouriteStart = () => ({
    type: types.GET_ALL_FAVOURITE_START,
  });
  export const GetAllFavouriteSuccess = (token) => ({
    type: types.GET_ALL_FAVOURITE_SUCCESS,
    payload: token,
  });
  export const GetAllFavouriteFail = (error) => ({
    type: types.GET_ALL_FAVOURITE_FAIL,
    payload: error,
  }); 
  //! Get All Category
  export const  GetAllCategoryInitiate = (token) => {
    return async function (dispatch) { 
      try {
        dispatch(GetAllCategoryStart());
    
        const { data } = await axios.get(`/api/category/all`, {
          headers: { Authorization: token },
        });
    
        dispatch(GetAllCategorySuccess(data.data));
      } catch (error) {
        dispatch(GetAllCategoryFail(error));
      }
    };
  };
  export const  GetAllSeriesFilmInitiate = (token) => {
    return async function (dispatch) { 
      try {
        dispatch(GetAllSeriesFilmStart());
    
        const { data } = await axios.get(`/api/film/all`, {
          headers: { Authorization: token },
        });
    
        dispatch(GetAllSeriesFilmSuccess(data.data));
      } catch (error) {
        dispatch(GetAllSeriesFilmFail(error));
      }
    };
  };
  export const  GetAllFilmInitiate = (token) => {
    return async function (dispatch) { 
      try {
        dispatch(GetAllFilmStart());
    
        const { data } = await axios.get(`/api/film/all`, {
          headers: { Authorization: token },
        });
    
        dispatch(GetAllFilmSuccess(data.data));
      } catch (error) {
        dispatch(GetAllFilmFail(error));
      }
    };
  };
  export const  GetAllRateInitiate = (token) => {
    return async function (dispatch) { 
      try {
        dispatch(GetAllRateStart());
    
        const { data } = await axios.get(`/api/rating/all`, {
          headers: { Authorization: token },
        });
    
        dispatch(GetAllRateSuccess(data.data));
      } catch (error) {
        dispatch(GetAllRateFail(error));
      }
    };
  };
  export const  GetAllFavouriteInitiate = (token) => {
    return async function (dispatch) { 
      try {
        dispatch(GetAllFavouriteStart());
    
        const { data } = await axios.get(`/api/favourite/all`, {
          headers: { Authorization: token },
        });
    
        dispatch(GetAllFavouriteSuccess(data.data));
      } catch (error) {
        dispatch(GetAllFavouriteFail(error));
      }
    };
  };