import { GET_BANNERS, GET_BIOGRAFI } from "../constants/types";

export const getAllBanner = () => {
  const banners = [
    {
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      img: "/assets/banner-1.jpg",
    },
    {
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/assets/banner-2.jpg",
    },
    {
      title: "Third Slide Label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/assets/banner-3.jpg",
    },
  ];

  return {
    type: GET_BANNERS,
    payload: banners,
  };
};

export const getBiografi = () => {
  const biografi = {
    name: "H. Andi Muhammad",
    history:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
    profile_picture: "/assets/biografi.png",
  };

  return {
    type: GET_BIOGRAFI,
    payload: biografi,
  };
};

export const getDashboardContent = () => (dispatch, getState) => {
  dispatch(getAllBanner());
  dispatch(getBiografi());
};
