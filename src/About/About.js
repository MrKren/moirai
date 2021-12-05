import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

function About() {
  const url = 'https://baconipsum.com/api/?type=all-meat-and-filler&paras=20&start-with-lorem=1&format=html';
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
        <h2>About Page</h2>
        <main>
          <p>This section contains information about...</p>
          <p>
            <div dangerouslySetInnerHTML={{ __html: data}}></div>
          </p>
        </main>
    </div>
  )
}

export default About;