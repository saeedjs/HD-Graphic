import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardCollectionComp from "./DashboardCollectionComp";
const DashboardCollection = () => {
  const [access, setAccess] = useState('');
  useEffect(() => {
    setAccess(localStorage.getItem('access'));
  }, [access])
  const [collections, setCollections] = useState([]);
  // const access = localStorage.getItem('access');
  axios
    .post("https://hdgraphic.ir/api/v1/users/user-collections",{}, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${access}` 
      },
    })
    .then((result) => {
      setCollections(result.data)
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {/* <DashboardCollectionComp data={data} /> */}
      <DashboardCollectionComp data={collections} />
    </>
  );
};

export default DashboardCollection;