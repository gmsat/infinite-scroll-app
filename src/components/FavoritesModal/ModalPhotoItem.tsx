import React from 'react';
import { Photo } from "../Photos/PhotosCuratedList";
import { Backdrop, Divider, FavoriteButton, Img, PhotoAuthor, PhotoCard, Title } from "../Photos/PhotoItem";
import { usePhotoItem } from "../Photos/usePhotoItem";
import { Flex, Fade } from "../common";
import { Image } from "../Photos/PhotoItem";

interface ModalPhotoItemProps {
  photo: Photo,
  removePhotoItem: (photo: Photo) => void
}

export const ModalPhotoItem: React.FC<ModalPhotoItemProps> = ({photo, removePhotoItem}) => {
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
               <FavoriteButton style={{padding: "10px 14px 8px 14px"}}
                               onClick={() => removePhotoItem(photo)}>Un-favorite
               </FavoriteButton>
            </Flex>
          </Flex>
        </Backdrop>
      </>
    )
  }

  return (
    <>
      <PhotoCard shadow={"primary"}
                 onPointerEnter={() => setShowDetails(true)}
                 onPointerLeave={() => setShowDetails(false)}>
        <Image photo={photo}/>
        <Fade show={showDetails}>
          {renderPhotoDetails()}
        </Fade>
      </PhotoCard>
    </>

  );
};
