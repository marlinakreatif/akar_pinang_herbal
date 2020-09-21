import React, { Component } from "react";
import Banner from "./SectionBanner";
import Biografi from "./SectionBiografi";
import News from "./SectionNews";
import Products from "./SectionProducts";
import Testimoni from "./SectionTestimoni";
import "./dashboard.css";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import { getDashboardContent } from "../../rx-actions/clientDashboard";
import { connect } from "react-redux";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollIndex: 0,
    };
    this.mainRef = React.createRef();
  }

  scrollUp = () => {
    const { scrollIndex } = this.state;
    const scrollTop = this.mainRef.current.scrollTop;
    const clientHeight = this.mainRef.current.clientHeight;
    const isMoreThenHalve =
      scrollTop >= clientHeight * scrollIndex + clientHeight / 4;
    if (isMoreThenHalve) {
      this.mainRef.current.scrollTop = clientHeight * scrollIndex;
    } else if (scrollIndex > 0) {
      this.mainRef.current.scrollTop = clientHeight * (scrollIndex - 1);
    }
  };

  scrollDown = () => {
    const { scrollIndex } = this.state;
    if (scrollIndex < 3) {
      this.mainRef.current.scrollTop =
        this.mainRef.current.clientHeight * (scrollIndex + 1) + 140;
    }
  };

  onScroll = (e) => {
    const element = e.target;
    const { scrollTop, clientHeight } = element;
    const { scrollIndex } = this.state;
    let index = 0;
    if (scrollTop <= clientHeight) {
      index = 0;
    } else if (scrollTop <= clientHeight * 2 && scrollTop > clientHeight) {
      index = 1;
    } else if (scrollTop <= clientHeight * 3 && scrollTop > clientHeight * 2) {
      index = 2;
    } else {
      index = 3;
    }

    if (scrollTop < clientHeight * 3 && scrollTop >= clientHeight * 2) {
      index = 2;
    } else if (scrollTop < clientHeight * 2 && scrollTop >= clientHeight) {
      index = 1;
    } else if (scrollTop < clientHeight && scrollTop >= 0) {
      index = 0;
    } else {
      index = 3;
    }
    // console.log(
    //   `scrollTop : ${scrollTop} ,clientHeight:${clientHeight}, Index: ${index}`
    // );
    if (index !== scrollIndex) {
      this.setState({
        scrollIndex: index,
      });
    }
  };

  componentDidMount() {
    this.props.getDashboardContent();
  }

  render() {
    return (
      <>
        <div
          className="main-container"
          ref={this.mainRef}
          onScroll={this.onScroll}
        >
          <ResponsiveMenu type="client" />
          <section className="section" id="section-0">
            <Banner />
          </section>
          <section className="section" id="section-1">
            <Biografi />
          </section>
          <section className="section" id="section-2">
            <Products />
          </section>
          <section className="section" id="section-3">
            <News />
          </section>
          <section className="section" id="section-4">
            <Testimoni />
          </section>
        </div>

        <div className="section-button">
          <div id="up" onClick={this.scrollUp}>
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </div>
          <div id="down" onClick={this.scrollDown}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { getDashboardContent })(index);
