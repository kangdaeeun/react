import useAlbums from "./usdAlbums";

function App() {
  const albums = useAlbums();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {albums.map((album) => (
        <div key={album.id}>
          <div
            style={{
              height: "240px",
            }}
          >
            <img src={album.thumbnailUrl} alt={album.title} />
            <p>{album.title}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;