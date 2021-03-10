import './App.css';
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import { Input,Button,Box,Flex, Text } from "@chakra-ui/react"

export default function App(props, state) {

    const [names, setNames] = useState([props.name]);
    const [input, setInput] = useState();

    useEffect(() => {
        localStorage.setItem("names", JSON.stringify(names))
    })

    function inputChanged(event) {
        const {target: {value}} = event;
        setInput(value)
    }


    function saveName(event){
        let storedNames = JSON.parse(localStorage.getItem("names"))
        storedNames.push(input)
        localStorage.setItem("names",JSON.stringify(storedNames))
        setNames(storedNames)
    }

    return (
        <Box  w="100%" p={4}>
            {names.map((name, index) =>
                <Text key={index}>
                    {name}
                </Text>
            )}
            <Flex>
                <Input onChange={inputChanged} placeholder="Basic usage" />
                <Button marginLeft={2} onClick={saveName} colorScheme="blue">Button</Button>
            </Flex>
        </Box>
    );
}

App.propTypes = {
    name: PropTypes.string
};