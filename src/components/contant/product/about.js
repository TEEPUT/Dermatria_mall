import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS 라이브러리
import $ from 'jquery'; // jQuery 라이브러리
import './about.css'; // 리액트 컴포넌트에서 사용하는 CSS 파일


function FeaturedSection() {
    useEffect(() => {
        // AOS 초기화
        AOS.init();
    }, []);

    return (
        <section className="featured">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                        <div className="title">
                            <h6 className="title-primary">New product</h6>
                            <h3 className="title-blue">여기에 타이틀 설명을 입력하면 됩니다</h3>
                        </div>
                        <p>여기에 제품 설명 <br />
                          내용을 입력하면 됩니다 <br />
                          테스트 예시입니다 <br />
                          여러가지 넣겠습니다<br />
                        </p>
                        <div className="media-element d-flex justify-content-between">
                            <div className="media">
                                <i className="fa fa-magic mr-4"></i>
                                <div className="media-body">
                                    <h5>추가 설명</h5>
                                    추가 디테일 설명
                                </div>
                            </div>
                            <div className="media">
                                <i className="fa fa-magic mr-4"></i>
                                <div className="media-body">
                                    <h5>추가 설명</h5>
                                    추가 디테일 설명
                                </div>
                            </div>
                        </div>
                        <a href="#" className="btn"><strong>Read More</strong></a>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
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
