import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './MainCarousel.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBigPosters } from '../actions/fetch';

class MainCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    const { getBigPostersAction } = this.props;
    getBigPostersAction('http://localhost:4100/movies-api/big-posters');
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { activeIndex } = this.state;
    if (this.animating) return;
    const nextIndex = activeIndex === 2 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const { activeIndex } = this.state;
    if (this.animating) return;
    const nextIndex = activeIndex === 0 ? 2 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { bigPosters } = this.props;
    const items = bigPosters[0] ? [
      {
        src: bigPosters[0].big_poster,
        altText: bigPosters[0].name,
        caption: bigPosters[0].name,
      },
      {
        src: bigPosters[1].big_poster,
        altText: bigPosters[1].name,
        caption: bigPosters[1].name,
      },
      {
        src: bigPosters[2].big_poster,
        altText: bigPosters[2].name,
        caption: bigPosters[2].name,
      },
    ] : [];

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img width="100%" height="600px" src={item.src} alt={`${item.altText} poster`} />
          <CarouselCaption captionText="" captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="Carousel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

const mstp = state => ({
  bigPosters: state.bigPosters,
});

const mdtp = dispatch => bindActionCreators({
  getBigPostersAction: getBigPosters,
}, dispatch);


export default connect(mstp, mdtp)(MainCarousel);
