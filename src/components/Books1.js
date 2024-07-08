import { useEffect } from "react";
import axios from 'axios';




function Books1(){
    useEffect(() => {
        async function fetchData() {
            var url = 'http://localhost:8080/api/books';
            var response = await axios.get(url);
            console.log(response);
        }

        fetchData();
    }, []);

    
return(
    <div>
        Inspect ctrl + shift + i to view data!
    </div>
)

};

export default Books1;