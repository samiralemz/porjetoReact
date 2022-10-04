function PlaylistCard(props) {
  const {image,  artista, titulo} = props;

  return (
    <div className="card" style={{width: "10rem;"}}>
        <img src={image} style={{width: "100%", height: "15rem"}} className="card-img-top"/>
        <div className="card-body">
            <span className="card-title fw-bold">{titulo}</span>
            <p style={{ marginLeft: '10px' }} >{artista}</p>
        </div>
    </div>
  )  
}

export default PlaylistCard;