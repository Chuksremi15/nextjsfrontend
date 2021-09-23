import styled from "styled-components";

function Blockquote({ text }) {
  return (
    <>
      <BlockquoteContain>
        <img src="/quoteIcon.png" alt="" className="h-6 mr-4" />
        <p>{text}</p>
      </BlockquoteContain>
    </>
  );
}

const BlockquoteContain = styled.div`
  & {
    position: relative;
    padding: 2rem 2.5rem;
    margin: 0;
    color: #001f1d;
    display: flex;
    background: #f8fcfc;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    max-width: 640px;
    overflow: visible;
    margin-bottom: 18px;
  }
  &:before {
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -38px;
    left: 240px;
    border-width: 0 20px 20px 0px;
    border-style: solid;
    border-color: transparent #f8fcfc;
    display: block;
    width: 0;
    margin-bottom: 18px;

    @media screen and (max-width: 420px) {
      left: 60px;
    }

    @media screen and (max-width: 640px) {
      left: 120px;
    }
  }
  p {
    font-style: Manrope;
    font-weight: 400;
  }
`;

export default Blockquote;
