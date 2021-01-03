
const timestampProject = {
    title: () => (
        <h2>
            Timestamp API
        </h2>
    ),
    content: () => (
        <>
            <h3>
                Endpoints:
            </h3>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <code><strong>[GET] - /api/timestamp/{"{unix-epoch-timestamp}"}</strong></code>
                    <hr/>
                </div>
                <div className="col-md-6">
                    <code><strong>unix-epoch-timestamp:</strong> <br/>Valid unix epoch timestamp [Integer]</code>
                    <div>returns date considering {"{unix-epoch-timestamp}"} as the timestamp</div>
                </div>
                <div className="col-md-6">
                    <code><strong>unix-epoch-timestamp:</strong> <br/>Empty</code>
                    <div>returns current date</div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <code><strong>[GET] - /api/timestamp/{"{date}"}/{"{format}"}</strong></code>
                    <hr/>
                </div>
                <div className="col-md-6">
                    <code><strong>date:</strong><br/>[dd,int]-[mm,int]-[yyyy,int]<br/></code>
                    <br/>
                    <code><strong>format:</strong><br/>d-m-y [case insensitive]<br/>m-d-y [case insensitive] </code>
                </div>
                <div className="col-md-6">
                    <code><strong>date:</strong><br/>[yyyy,int]-[dd,int]-[mm,int]<br/></code>
                    <br/>
                    <code><strong>format:</strong><br/>y-m-d [case insensitive]<br/>y-d-m [case insensitive] </code>
                </div>
            </div>
        </>
    )
};

export default timestampProject;
