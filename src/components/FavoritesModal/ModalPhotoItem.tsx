import React, { useEffect, useRef, useState } from 'react';
import { Photo } from "../Photos/PhotosCuratedList";
import { useFavorites } from "../../hooks/useFavorites";
import { Flex } from "../common/Layout/Flex";
import {
  Backdrop,
  Divider,
  FavoriteButton,
  Image,
  ImageContainer,
  PhotoAuthor,
  Title
} from "../Photos/ImageItemStyles";
import { extractStringFromUrl } from "../../helpers/helpers";

interface ModalPhotoItemProps {
  photo: Photo,
  removePhotoItem: (photo: Photo) => void
}

const ModalPhotoItem: React.FC<ModalPhotoItemProps> = ({photo, removePhotoItem}) => {
  const {removeFromFavoritesById} = useFavorites();
  const [showDetails, setShowDetails] = useState(false);
  const [photoTitle, setPhotoTitle] = useState<string>("");

  useEffect(() => {
    const titleFromUrl = extractStringFromUrl(photo.url, "photo/", "-");
    setPhotoTitle(titleFromUrl);
  }, [photo]);

  function renderOnHover() {
    return (
      <>
        <Backdrop>
          <Flex flexDirection={"column"} style={{position: "absolute", gap: 10, bottom: 0, paddingBottom: 24}}>
            <Flex flexDirection={"column"} padding={"20px"}>
              <Title>{photoTitle}</Title>
              <Divider/>
              <PhotoAuthor>{photo.photographer}</PhotoAuthor>
            </Flex>
            <Flex>
               <FavoriteButton onClick={() => removePhotoItem(photo)}>Un-Favourite</FavoriteButton>
            </Flex>
          </Flex>
        </Backdrop>
      </>
    )
  }

  return (
    <>
      <ImageContainer onPointerEnter={() => setShowDetails(true)} onPointerLeave={() => setShowDetails(false)}>
        <Image alt={photo.alt} src={photo.src.large}/>
        {showDetails && renderOnHover()}
      </ImageContainer>
    </>

  );
};

export default ModalPhotoItem;