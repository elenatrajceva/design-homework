import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import PlaceCard from "./PlaceCard";
import useStyles from './PlaceListView.styles';

const PlaceListView = ({ data }) => {
  const currentDate = new Date();
  
  console.log(currentDate.toLocaleString());
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">{currentDate.toLocaleString("default", {month: "long"})}</ListSubheader>
          <ListSubheader component="div">{currentDate.toLocaleString()}</ListSubheader>
        </GridListTile>
        {data.map((x, index) => {

          return (<PlaceCard key={index} info={x} />);
        })}
      </GridList>
    </div>
  );
};

export default PlaceListView;
