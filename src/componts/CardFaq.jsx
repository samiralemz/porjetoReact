
function CardFaq(props) {
    const { image, topico, cor } = props;
    return (

        <div class="col col-lg-2 card-spotify w-25">
            <div class="card-content" style={{ backgroundColor: cor }}>
                <img src={image}
                    width="64" height="64" class="card-image" />
                <div class="card-title">
                    <p class="content-title">{topico}</p>
                </div>
            </div>
        </div>

    )
}
export default CardFaq;