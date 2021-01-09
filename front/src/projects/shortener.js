import UrlForm from '../forms/urlForm';

const shortenerProject = {
    title:() => (
        <h2>
            URL shortener
        </h2>
    ),
    content:() => (
        <>
            <hr/>
            <div className="row justify-content-center">
                <UrlForm />
            </div>
            <hr/>
            <h3>
                Endpoints:
            </h3>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <code><strong>[GET] - /api/shorturl/{"{number}"}:</strong></code>
                    <hr/>
                    <p>Returns the url associated with number if it exists.</p>
                    <hr/>
                </div>
                <div className="col-md-12">
                    <code><strong>[POST] - /api/shorturl/new:</strong></code>
                    <hr/>
                    <p>Creates new shortened URL if not exists. If it does, returns json with corresponding information</p>
                    
                </div>
            </div>
        </>
    )
}

export default shortenerProject;
