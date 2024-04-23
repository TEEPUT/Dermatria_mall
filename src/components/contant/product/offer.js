import React from 'react';
import $ from 'jquery'; // jQuery 라이브러리
import './offer.css'; // 리액트 컴포넌트에서 사용하는 CSS 파일


function FeaturedSection() {
    return (
        <section className="recent-posts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-rpost d-sm-flex align-items-center">
                            <div className="post-content text-sm-right">
                                <time dateTime="2019-04-06T13:53">출시일</time>
                                <h3><a href="#">Clear Rose</a></h3>
                                <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p>
                            </div>
                            <div className="post-thumb">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/post1.jpg'} alt="Post 1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-rpost d-sm-flex align-items-center">
                            <div className="post-thumb">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/post2.jpg'} alt="Post 2" />
                            </div>
                            <div className="post-content">
                                <time dateTime="2019-04-06T13:53">출시일</time>
                                <h3><a href="#">Pure Vitamin</a></h3>
                                <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-rpost d-sm-flex align-items-center" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <div className="post-content text-sm-right">
                                <time dateTime="2019-04-06T13:53">출시일</time>
                                <h3><a href="#">Essential Mist</a></h3>
                                <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p>
                            </div>
                            <div className="post-thumb">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/post3.jpg'} alt="Post 3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                            <div className="post-thumb">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/post4.jpg'} alt="Post 4" />
                            </div>
                            <div className="post-content">
                                <time dateTime="2019-04-06T13:53">출시일</time>
                                <h3><a href="#">Lightning Complex</a></h3>
                                <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
