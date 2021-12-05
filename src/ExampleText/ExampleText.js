import { useState } from "react";
import { useEffect } from "react";

const ExampleText = ({
    paras,
}) => {
    const url = 'https://baconipsum.com/api/?type=all-meat-and-filler&paras=' + paras + '&start-with-lorem=1&format=html';
    const [data, setData] = useState(null);
    useEffect(() => {
        if (data == null) {
        fetch(url).then(response => {
            if (response.ok) {
            return response.text();
            }
        }).then(stuff => {
            setData(stuff);
        });
        }
    });
    
    return (
        <div>
            <p>
                <div dangerouslySetInnerHTML={{ __html: data}}></div>
            </p>
        </div>
    )
}

export default ExampleText;