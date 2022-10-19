
function CardFaq(props) {
    const { image, topico, cor } = props;
    return (

        <div className="col col-lg-2 card-spotify w-25">
            <div className="card-content" style={{ backgroundColor: cor }}>
                <img src={image}
                    width="64" height="64" className="card-image" />
                <div className="card-title">
                    <p className="content-title">{topico}</p>
                </div>
            </div>
        </div>

    )
}
export default CardFaq;