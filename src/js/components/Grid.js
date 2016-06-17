import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';

const thumbsIcon = "glyphicon glyphicon-thumbs-up";
var likeValue = 0;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 500,
  },
};

var tilesData = [
  {
    img: './images/image_01.jpg',
    title: 'Dessert',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_02.jpg',
    title: 'Cereal',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_03.jpg',
    title: 'Chickpeas',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_04.jpg',
    title: 'Morning',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_05.jpg',
    title: 'Christmas',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_06.jpg',
    title: 'Italian',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_07.jpg',
    title: 'Sandwich',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_08.jpg',
    title: 'Snacks',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
];

export default class Grid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      like: false,
      likes: tilesData.likes,
    };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render(){
      return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          cols={4}
          style={styles.gridList}
        >
        <Subheader>Meals</Subheader>
        {tilesData.map((tile) => (
          <GridTileInternal
            key={tile.img}
            img={tile.img}
            title={tile.title}
            //subtitle={tile.likes}
          >
          </GridTileInternal>
          ))}
        </GridList>
      </div>
    );
  }
}

class GridTileInternal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      like: false,
      likes: tilesData.likes,
    };
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
  }

  post(){
      this.setState({ like: true});
      likeValue += 1;
  }

  delete(){
      this.setState({ like: false});
      likeValue -= 1;
  }


  render(){
    const likeBtn = this.state.like ? <img src="./images/icons/icon_2.png" onClick={this.delete} /> : <img src="./images/icons/icon_1.png" onClick={this.post} />;
    const tempValue = likeValue;
    return (
          <GridTile
            key={this.props.img}
            title={this.props.title}
            subtitle={<span>Likes: <b>{tempValue}</b></span>}
            actionIcon={likeBtn}
          >
            <img src={this.props.img} />
          </GridTile>
    );
  }
}

Grid.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}