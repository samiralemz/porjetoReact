import React from "react";

import { useNavigate } from 'react-router-dom';
function PlaylistGrid(props) {
    const { key, id, imagem } = props;
    const navigate = useNavigate();

    return (
        <div key={key} className="item-grid-playlist" onClick={() => navigate(`playlist/${id}`)}>
            <img style={{ height: "15rem", width: "18rem" }} src={imagem} />
        </div>
    )
}

export default PlaylistGrid;