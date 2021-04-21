import React, { useContext } from "react";
import CardData from "./CardData";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";

const Card = () => {
  const { apidata } = useContext(GlobalContext);

  if (!apidata) {
    return "Loading...";
  }

  return (
    <div className="cardContianer">
      <Grid container spacing={2} justify="center">
        <CardData
          cardTitle="Infected"
          value={apidata.confirmed.value}
          lastUpdate={apidata.lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardData
          cardTitle="Recovered"
          value={apidata.recovered.value}
          lastUpdate={apidata.lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardData
          cardTitle="Deaths"
          value={apidata.deaths.value}
          lastUpdate={apidata.lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Card;
