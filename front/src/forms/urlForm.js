import dns from 'dns';

import {useState} from 'react';

import {POST} from './axios';

const postUrl = '/shorturl/new';

const appStatus = {
    waiting:true,
    success:false,
    error:"empty address"
};

function loadUrl( urlData,changeStatus ){
    POST({
        url:postUrl,
        data:urlData
    }).then(
        (res) => {
            console.log(res)
        }
    ).catch(
        (err) => {
            const {status,data} = err.response;
            changeStatus({
                waiting:true,
                success:false,
                error:`status:${status}. message:${data.msg}`
            })
        }
    );
}

function UrlForm(){
    const [url,changeUrl] = useState(""),
        [status,changeStatus] = useState(appStatus),
        changeText = (e) => {
            e.preventDefault();
            changeUrl( e.currentTarget.value )
        },
        resolveCallback = ( urlData,changeStatus ) => {
            return function( err,addr,fam ){
                console.log(err,addr,fam);
                return err
                    ? changeStatus({
                        waiting:true,
                        success:false,
                        error:"invalid address"
                    })
                    : loadUrl( {url:urlData},changeStatus );
            }
        },
        sendUrl = (e) => {
            e.preventDefault();
            dns.lookup( url,resolveCallback( url,changeStatus ) )
        };
    console.log(dns);
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
                    value={url}/>
                <input onClick={sendUrl}
                    type="submit"
                    value="Send URL"/>
                <div>
                    <code>{status.error}</code>
                </div>
            </form>
        </div>
    )
}

export default UrlForm;
