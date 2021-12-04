import s from './Loader.module.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Component } from 'react';

class Fallback extends Component{
    render() {
        return (
            <div className={s.Loader}>
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={40}
                    width={40}
                    timeout={1500}
                />
            </div>
        )
    }
}

export default Fallback