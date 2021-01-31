import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));