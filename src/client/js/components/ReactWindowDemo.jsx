import { FixedSizeList } from "react-window";
import { Grid, makeStyles, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    margin: "10px 0"
  },
  list: {
    border: "1px solid rgba(0,0,0,0.3)"
  }
});

const Row = ({ data, index, style }) => (
  <MenuItem style={style}>Row {index}</MenuItem>
);

export default () => {
  const classes = useStyles();
  return (
    <Grid className={classes.outer} container justify="center">
      <Grid item xs={4}>
        <FixedSizeList
          className={classes.list}
          height={150}
          itemCount={1000}
          itemSize={35}
          width={300}
          itemData={{ classes }}
        >
          {Row}
        </FixedSizeList>
      </Grid>
    </Grid>
  );
};