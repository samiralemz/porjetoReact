import React from 'react';

function Faq() {
    return (
        <div className="container">
            <div className="grid-spotify">
                <div className="row">
                    <div className="col col-lg-7">
                        <p>ATENDIMENTO DO SPOTIFY </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                        <p className="display-1 font-weight-bold">Como podemos ajudar?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12 mt-1 mb-1">
                        <p className="text-login"><a href="#">Faça log in</a> para ter ajuda mais rápido
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                        <input type="text" placeholder="Buscar" className="input-search" />
                    </div>
                </div>
                <div className="grid-cards">
                    <div className="row gap-0 mt-4">
                        <div className="col col-lg-2 card-spotify">
                            <div className="card-content">
                                <img src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format"
                                    width="64" height="64" className="card-image" />
                                <div className="card-title">
                                    <p className="content-title">Ajuda com pagamentos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 card-spotify w-25">
                            <div className="card-content">
                                <img src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format"
                                    width="64" height="64" className="card-image" />
                                <div className="card-title">
                                    <p className="content-title">Ajuda com o plano</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 card-spotify w-25">
                            <div className="card-content">
                                <img src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format"
                                    width="64" height="64" className="card-image" />
                                <div className="card-title">
                                    <p className="content-title">Ajuda com o app</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gap-0 mt-4">
                        <div className="col col-lg-2 card-spotify w-25">
                            <div className="card-content">
                                <img src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format"
                                    width="64" height="64" className="card-image" />
                                <div className="card-title">
                                    <p className="content-title">Ajuda com dispositivos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 card-spotify w-25">
                            <div className="card-content">
                                <img src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format"
                                    width="64" height="64" className="card-image" />
                                <div className="card-title">
                                    <p className="content-title">Privacidade e Segurança</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 card-spotify w-25">
                            <div className="card-content">
                                <img src="https://cdn.sanity.io/images/tsbkzvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format"
                                    width="64" height="64" className="card-image" />
                                <div className="card-title">
                                    <p className="content-title">Ajuda com a conta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;