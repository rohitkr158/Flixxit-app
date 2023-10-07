import React from "react";
import styled from "styled-components";

export default function Footer() {
  // eslint-disable-next-line
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About Flixxit</a>
          <a href="/copyright">Copyright</a>
          <a href="/term">Terms of Use</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact Us</a>
          <a href="/helpcenter">Help Center</a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2023_Flixxit. All rights reserved.</p>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  .footer {
    background-color: black;
    color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-links {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    padding-left: 20px;
  }

  .footer-links a {
    color: #fff;
    text-decoration: none;
  }

  .footer-copyright {
    flex: 1;
    text-align: right;
    padding-right: 20px;
  }
`;
