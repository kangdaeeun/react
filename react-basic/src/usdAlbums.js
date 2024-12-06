import { useEffect, useState } from "react";

const useAlbums = () => {
  // 여기에 코드 추가
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  return albums
};

export default useAlbums;