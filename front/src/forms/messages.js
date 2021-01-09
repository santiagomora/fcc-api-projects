export function displayMessage( {message,error} ){
    const display = error
        ? error
        : message;
    return display.formatted;
}

export function formatError({status,message}){
    return(
        <>
            <div>
                <code>
                    Error status:<strong>{status}</strong>.
                </code>
            </div>
            <div>
                <code>
                    {message}
                </code>
            </div>
        </>
    )
}

export function formatMessage({original_url,access_url}){
    return (
        <>
            <div>
                <code>
                    Processed URL <strong>{original_url}</strong>.
                </code>
            </div>
            <div>
                <code>
                    Access using: <a href={access_url} target="_blank">{access_url}</a>
                </code>
            </div>
        </>
    )
}
