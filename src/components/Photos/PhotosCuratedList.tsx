import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { Flex, PhotoItem } from "../index";
import styled from "@emotion/styled";
import { useInfinitePhotos } from "./useInfinitePhotos";
import { Loader } from "../index";
import { inlineSizeContainer } from "../common/Modal/Modal";
import { css } from "@emotion/react";
import { theme } from "../../assets/themes/theme";

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

const example = {
  "page": 1,
  "per_page": 1,
  "photos": [
    {
      "id": 2880507,
      "width": 4000,
      "height": 6000,
      "url": "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
      "photographer": "Deden Dicky Ramdhani",
      "photographer_url": "https://www.pexels.com/@drdeden88",
      "photographer_id": 1378810,
      "avg_color": "#7E7F7B",
      "src": {
        "original": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
        "large2x": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      },
      "liked": false,
      "alt": "Brown Rocks During Golden Hour"
    }
  ],
  "next_page": "https://api.pexels.com/v1/curated/?page=2&per_page=1"
}

export const PhotosContainer = styled('div')`
  display: inline-flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  margin: 60px auto;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: auto;
  container-type: inline-size;
  
  @container ${theme.breakpoints.device.mobile} {
    >* { flex: 0 0 90%; }
  }
  @container ${theme.breakpoints.device.tablet} {
    >* { flex: 0 0 40%; }
  }
  @container ${theme.breakpoints.device.laptop} {
    >* { flex: 0 0 30%; }
  }
  @container ${theme.breakpoints.device.desktop} {
    >* { flex: 0 0 30%; }
  }
  @container ${theme.breakpoints.device.desktopXl} {
    >* { flex: 0 0 20%; }
  }
`

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
        {photosData && photosData.map((photo, index) => (
          <PhotoItem photo={photo} key={index} />
        ))}
        {error && <div>Error: failed to load photos</div>}
        <div ref={elementRef}></div>
      </PhotosContainer>
      {loading && <Loader/>}
    </>
  );
};

export default PhotosCuratedList;