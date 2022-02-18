import { Component } from 'react';
import { call201 } from '../xhr/xhr-calls';
import { trackPromise } from 'react-promise-tracker';
import Register from './Register';

export class Home extends Component {

    call201() {
        trackPromise(
            call201().then(() => {
                console.log('201 Success');
            }, error => { console.error(error); })
        );;
    }

    render() {
        return <div>
            <Register />
        </div>
    }
}