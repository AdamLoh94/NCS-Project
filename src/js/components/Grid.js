import _ from 'lodash';
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';

const thumbsIcon = "glyphicon glyphicon-thumbs-up";

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
    title: 'Breakfast',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_02.jpg',
    title: 'Tasty burger',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_03.jpg',
    title: 'Camera',
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
    title: 'Hats',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_06.jpg',
    title: 'Honey',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_07.jpg',
    title: 'Vegetables',
    likes: 0,
    icon: './images/icons/icon_1.png',
  },
  {
    img: './images/image_08.jpg',
    title: 'Water plant',
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
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
  }

  post(){
      this.setState({ like: true});
      let likes = this.state.likes;
      likes++;
      this.setState({likes: likes});
      //this.tilesData.likes = likes;
  }

  delete(){
      this.setState({ like: false});
      let likes = this.state.likes;
      likes--;
      this.setState({likes: likes});
      //this.tilesData.likes = likes;
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render(){
    const likeBtn = this.state.like ? <img src="./images/icons/icon_2.png" onClick={this.delete} /> : <img src="./images/icons/icon_1.png" onClick={this.post} />;
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          cols={4}
          style={styles.gridList}
        >
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>Likes: <b>{tile.likes}</b></span>}
            actionIcon={likeBtn}
          >
            <img src={tile.img} />
          </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

Grid.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}