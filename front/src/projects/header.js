
const headerProject = {
    title:() => (
        <h2>
            Request Header Parser Microservice
        </h2>
    ),
    content:() => (
        <>
            <h3>
                Endpoints:
            </h3>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <code><strong>[GET] - /api/whoami:</strong></code>
                    <hr/>
                </div>
                <div className="col-md-12">
                    Returns information about client
                </div>
            </div>
        </>
    )
};

export default headerProject;
