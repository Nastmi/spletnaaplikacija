import logo from './logo.svg';
import './App.css';
import {useState} from "react";


export default function App(props, state){
    const [name, setName] = useState(props);

    return (
        <p className={"tst"}>
            {props.name}
        </p>
    );
}

//App.propTypes = {
  //  name: PropTypes.string
//};

