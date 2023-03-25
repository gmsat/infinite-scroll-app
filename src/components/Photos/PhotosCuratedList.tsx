import React from 'react';
import { Loader, PhotoItem } from "../index";
import styled from "@emotion/styled";
import { useInfinitePhotos } from "./useInfinitePhotos";
import { theme } from "../../assets/themes/theme";

export const PhotosContainer = styled('div')`
  box-sizing: border-box;
  container-type: inline-size;
  margin: 40px auto;
  justify-content: center;
  width: 100%;
  height: auto;
`

export const PhotosGrid = styled('div')`
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  align-items: center;

  @container ${theme.breakpoints.device.mobileXs} {
    grid-template-columns: repeat(auto-fill, 90%);
  }
  @container ${theme.breakpoints.device.mobile} {
    grid-template-columns: repeat(auto-fill, 90%);
  }
  @container ${theme.breakpoints.device.tablet} {
    grid-template-columns: repeat(auto-fill, 40%);
  }
  @container ${theme.breakpoints.device.laptop} {
    grid-template-columns: repeat(auto-fill, 30%);
  }
  @container ${theme.breakpoints.device.desktop} {
    grid-template-columns: repeat(auto-fill, 30%);
  }
  @container ${theme.breakpoints.device.desktopXl} {
    grid-template-columns: repeat(auto-fill, 20%);
  }
`

export type PhotoSrc = {
  original: string,
  large2x: string,
  large: string,
  medium: string,
  small: string,
  portrait: string,
  landscape: string,
  tiny: string
}

export interface Photo {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: number,
  avg_color: string,
  src: PhotoSrc,
  liked: boolean,
  alt: string
}

export type CuratedPhotosData = {
  page: number,
  per_page: number,
  photos: Photo[],
  next_page: string
}

const PhotosCuratedList = () => {
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
  const url = "https://api.pexels.com/v1/curated?per_page=12";

  const options = {
    headers: {
      Authorization: API_KEY,
    },
  };

  const {photosData, loading, error, elementRef} = useInfinitePhotos<Photo>(url, options);

  if (loading && !photosData) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!photosData) {
    return <div>no data!</div>;
  }

  return (
    <>
      <PhotosContainer>
        <PhotosGrid>
          {photosData && photosData.map((photo, index) => (
            <PhotoItem photo={photo} key={index} />
          ))}
          {error && <div>Error: failed to load photos</div>}
          <div ref={elementRef}></div>
        </PhotosGrid>
      </PhotosContainer>
      {loading && <Loader/>}
    </>
  );
};

export default PhotosCuratedList;