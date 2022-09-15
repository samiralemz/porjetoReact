function PlaylistCard(props) {
  const {image,  artista, titulo} = props;

  return (
    <div className="card" style={{maxWidth: "18rem", minWidth:"18rem"}}>
        <img src={image} className="card-img-top"/>
        <div className="card-body">
            <span className="card-title fw-bold">{titulo}</span>
            <p className="card-text">{artista}</p>
        </div>
    </div>
  )  
}

export default PlaylistCard;