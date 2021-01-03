import {useState} from 'react';
import logo from '../logo.svg';
import '../public/css/App.css';
import functions from './projects/entry';

function App( props ) {
    const [show,changeShow] = useState(-1),
        changeCurrent = ( e ) => {
            e.preventDefault();
            const val = parseInt( e.currentTarget.getAttribute('show') );
            changeShow(
                val === show
                    ? -1
                    : val
            );
        };
    return (
        <div className="App">
            <hr/>
            <div className="container-fluid"
                style={{
                    padding:"0px",
                    textAlign:"left"
                }}>
            {
                functions.map(
                    (e,i) => (
                        <div key={i}>
                            <div className="row">
                                <div className="col-md-10">
                                    {e.title()}
                                </div>
                                <div className="col-md-2" style={{textAlign:"right"}}>
                                    <button onClick={changeCurrent.bind(this)}
                                        show={i}>
                                        show
                                    </button>
                                </div>
                            </div>
                            {
                                i === show
                                    ? e.content()
                                    : <></>
                            }
                            <hr/>
                        </div>
                    )
                )
            }
            </div>
        </div>
    );
}

export default App;
