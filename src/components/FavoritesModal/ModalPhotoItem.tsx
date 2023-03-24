import React from 'react';
import { Photo } from "../Photos/PhotosCuratedList";
import { Flex } from "../common/Layout/Flex";
import { Backdrop, Divider, FavoriteButton, Image, PhotoAuthor, PhotoCard, Title } from "../Photos/ImageItemStyles";
import { Fade } from "../common/Transitions/Fade";
import { usePhotoItem } from "../Photos/usePhotoItem";

interface ModalPhotoItemProps {
  photo: Photo,
  removePhotoItem: (photo: Photo) => void
}

const ModalPhotoItem: React.FC<ModalPhotoItemProps> = ({photo, removePhotoItem}) => {
  const { showDetails, setShowDetails, photoTitle } = usePhotoItem(photo);

  function renderPhotoDetails() {
    return (
      <>
        <Backdrop>
          <Flex flexDirection={"column"} style={{justifyContent: "flex-end", height: "100%", gap: 10}}>
            <Flex flexDirection={"column"} style={{height: "100%", position: "absolute"}}>
              <Title>{photoTitle}</Title>
              <Divider/>
              <PhotoAuthor>{photo.photographer}</PhotoAuthor>
            </Flex>
            <Flex style={{position: "absolute", bottom: 22}}>
               <FavoriteButton style={{paddingTop: 10, paddingBottom: 8, paddingLeft: 14, paddingRight: 14}} onClick={() => removePhotoItem(photo)}>Un-favorite</FavoriteButton>
            </Flex>
          </Flex>
        </Backdrop>
      </>
    )
  }

  return (
    <>
      <PhotoCard shadow={"primary"} onPointerEnter={() => setShowDetails(true)} onPointerLeave={() => setShowDetails(false)}>
        <Image alt={photo.alt} src={photo.src.large}/>
        <Fade show={showDetails}>
          {renderPhotoDetails()}
        </Fade>
      </PhotoCard>
    </>

  );
};

export default ModalPhotoItem;