import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { PhotoItem } from "../index";
import styled from "@emotion/styled";

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

const PhotosContainer = styled.div({
  display: "flex",
  margin: "auto",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 36
});

const PhotosCuratedList = () => {
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
  const url = "https://api.pexels.com/v1/curated?per_page=12";

  const options = {
    headers: {
      Authorization: API_KEY,
    },
  };

  const { data, loading, error } = useFetch<CuratedPhotosData>(
    url,
    options,
    true,
    true
  );

  const [photosData, setPhotosData] = useState<Photo[]>([]);
  const [nextPage, setNextPage] = useState<string | null>("");
  const [loading2, setLoading2] = useState(false);

  const elementRef = useRef(null);

  function onIntersection(entries: any[]) {
    const firstEntry = entries[0];

    if (firstEntry.isIntersecting && nextPage) {
      fetchMoreItems();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    });

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    }

  }, [photosData]);

  useEffect(() => {
    if (data) {
      setPhotosData(data.photos);
      setNextPage(data.next_page);
    }
  }, [data]);

  async function fetchMoreItems() {
    setLoading2(true);

    if (!nextPage) {
      setLoading2(false);
      return;
    }

    if (nextPage) {
      const res = await fetch(nextPage, options);
      const json: CuratedPhotosData = await res.json();
      setPhotosData((prevPhotos) => [...prevPhotos, ...json.photos]);
      setNextPage(json.next_page);
      setLoading2(false);
    }
  }

  // if (loading && !photosData) {
  //   return <div>...loading ...loading ...loading</div>;
  // }
  //
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  //
  // if (!data) {
  //   return <div>no data!</div>;
  // }

  return (
    <PhotosContainer>
      {photosData.map((photo, index) => (
        <PhotoItem photo={photo} key={index} />
      ))}
      {loading2 && <div>...loading ...loading ...loading</div>}
      <div ref={elementRef}></div>
    </PhotosContainer>
  );
};

export default PhotosCuratedList;