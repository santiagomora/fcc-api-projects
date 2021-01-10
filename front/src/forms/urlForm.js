import {useState} from 'react';

import {POST,API_BASE} from './axios';

import {displayMessage,formatMessage,formatError} from './messages';

const postUrl = '/shorturl/new';

function encodeFormData({url_input}){
    const params = new URLSearchParams();
    params.append( 'url_input', url_input );
    return params;
}

const appStatus = {
    message:{
        formatted:(
            <code>No URL sent</code>
        )
    },
    error:null
};

const defaulUrl = 'https://www.freecodecamp.org';

function loadUrl( urlData,changeStatus ){
    POST({
        url:postUrl,
        data:encodeFormData( urlData )
    }).then(
        (res) => {
            const {original_url,short_url} = res.data;
            const access_url = `${API_BASE}/shorturl/${short_url}`;
            changeStatus({
                error:null,
                message:{
                    original: res.data,
                    formatted: formatMessage({original_url,access_url})
                }
            });
        }
    ).catch(
        (err) => {
            const {status,data} = err.response;
            const error_data = {
                status:status,
                message:data.error ? data.error : data
            };

            changeStatus({
                message:null,
                error:{
                    original: error_data,
                    formatted: formatError(error_data)
                }
            })
        }
    );
}

function UrlForm(){
    const [url_input,changeUrl] = useState(defaulUrl),
        [status,changeStatus] = useState(appStatus),
        changeText = (e) => {
            e.preventDefault();
            changeUrl( e.currentTarget.value )
        },
        sendUrl = (e) => {
            e.preventDefault();
            loadUrl( {url_input},changeStatus );
        };
    return (
        <div className="col-md-8" style={{textAlign:"center"}}>
            <form method="POST"
                style={{width:"100%"}}>
                <label style={{
                    marginRight:"10px",
                    verticalAlign:"middle",
                    textAlign:"left "
                }}>
                    <h5>
                        Enter a URL <br/>
                        to be shortened:
                    </h5>
                </label>
                <input style={{margin:"0px 10px 10px 0px"}}
                    onChange={changeText}
                    type="text"
                    value={url_input}/>
                <input onClick={sendUrl}
                    type="submit"
                    value="Send URL"/>
                <div>
                    {displayMessage(status)}
                </div>
            </form>
        </div>
    )
}

export default UrlForm;
