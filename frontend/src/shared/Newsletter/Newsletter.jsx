import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../../assets/images/mg.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>
                Hãy đăng ký ngay để nhận được thông tin hữu ích về du lịch.
              </h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Địa chỉ email của bạn" />
                <button className="btn newletter__btn">Subsctibe</button>
              </div>
              <p>
                Với nhiều năm kinh nghiệm trong ngành du lịch, chúng tôi tự
                tin khẳng định rằng chúng tôi sẽ làm hài lòng các khách hàng
                của mình.
                Chúng tôi hiểu rằng mỗi chuyến du lịch là một trải nghiệm độc
                đáo, và chúng tôi cam kết sẽ tạo ra những trải nghiệm tuyệt
                vời cho bạn.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
