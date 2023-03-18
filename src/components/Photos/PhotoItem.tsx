import React from 'react';
import { Photo } from "./PhotosCuratedList";

interface PhotoItemProps {
  photo: Photo
}

const PhotoItem: React.FC<PhotoItemProps> = ({photo}) => {
  return (
    <img style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "10px", width: "30%"}} src={photo.src.medium}/>
  );
};

export default PhotoItem;