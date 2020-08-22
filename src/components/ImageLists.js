import React from "react";
import "./ImageLists.css";
import ImageCard from "./ImageCard";

const ImageLists = (props) => {
	if (props.images.length === 0 ){
		return <div>There are no images. Try another.</div>
	} else {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return (
    <div className="image-item" style={{ display: "grid" }}>
      {images}
    </div>
  )};
};

export default ImageLists;
