import { useEffect, useState } from "react";

type Props = {};

function RegionReports({ }: Props) {
     const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/report/regions')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                // setUserData(data);
            });
    }, []);
    return <div>RegionReports</div>;
}

export default RegionReports;
