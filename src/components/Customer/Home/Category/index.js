import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import beverage from './images/beverage.jpg';
import canned from './images/canned.jpg';
import cleaning from './images/cleaning.jpg';
import liquor from './images/liquor.jpg';
import personalCare from './images/personalCare.jpg';
import snacks from './images/snacks.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    marginBottom:"50px",

   
    // width:'100vw',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 400,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));




const tileData = [
  {
     img: beverage,
     title: 'Beverage',
    //  author: 'author',
   },
   {
      img: canned,
      title: 'Canned Goods',
      // author: 'author',
    },
    {
      img: snacks,
      title: 'Snacks',
      // author: 'author',
    },
    {
      img: liquor,
      title: 'Liquor',
      // author: 'author',
    },
    {
      img: personalCare,
      title: 'Personal Care',
      // author: 'author',
    },
    {
      img: cleaning,
      title: 'Cleaning',
      // author: 'author',
    },
];




export default function CategoryGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Categories</ListSubheader>
        </GridListTile> */}
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              // subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
