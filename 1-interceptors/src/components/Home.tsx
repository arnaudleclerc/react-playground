import { Component } from 'react';
import { call201 } from '../xhr/xhr-calls';

export class Home extends Component {

    call201() {
        call201().then(() => {
            console.log('201 Success');
        }, error => { console.error(error); });
    }

    render() {
        return <div>
            <button onClick={this.call201}>
                Call 201
            </button>
        </div>
    }
}