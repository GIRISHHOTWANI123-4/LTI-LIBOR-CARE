import React from "react";
import Header from "../shared/header";
const PowerBI=()=>{

    return(
        <div>

            <Header/>
            <iframe width="1550" height="541.25"
                    src="https://app.powerbi.com/reportEmbed?reportId=56ed72c6-5366-41ea-aaec-afa8015f81e8&autoAuth=true&ctid=02aa9fc1-18bc-4798-a020-e01c854dd434&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
                    frameBorder="0" allowFullScreen="true"></iframe>
        </div>
    )

}

export default PowerBI;
