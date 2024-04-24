import React from 'react';
import $ from 'jquery'; // jQuery 라이브러리
import './about.css'; // 리액트 컴포넌트에서 사용하는 CSS 파일


function FeaturedSection() {
  return (
    <section className="featured">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="title">
              <h6 className="title-primary">New product</h6>
              <h3 className="title-blue">더마트리아 시그니처</h3>
            </div>
            <p>
              더마트리아 시그니처는 천연 유래 성분 97.6%를 함유하고 있습니다. <br />
              이 제품은 사람과 환경을 고려하여 개발되었으며, 클린뷰티 원칙을 따르는 화장품입니다. <br />
              자연에서 얻은 성분들로 구성되어 있어 피부에 자극을 최소화하고 효과적인 피부 관리를 지원합니다.<br />
              또한 피부를 더욱 생기있게 만들어 주고, 피부의 탄력과 유연성을 개선합니다
            </p>
            <div className="media-element d-flex justify-content-between">
              <div className="media">
                <div className="media-body">
                  <h5>원산지</h5>
                  Korea
                </div>
              </div>
              <div className="media">
              </div>
            </div>
            <a href="#" className="btn"><strong>Read More</strong></a>
          </div>
          <div className="col-md-6">
            <div className="featured-img">
              <img className="featured-big" src={process.env.PUBLIC_URL + '/images/featured-img1.jpg'} alt="" />
              <img className="featured-small" src={process.env.PUBLIC_URL + '/images/featured-img2.jpg'} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
