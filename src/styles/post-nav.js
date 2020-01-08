import styled from '@emotion/styled';

export const PostNavStyle = styled.nav`
  margin: 1.2rem 0;
  padding: 0 1.2rem;

  @media (min-width: 790px) {
    padding: 0;
    position: fixed;
    right: 0;
    left: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    pointer-events: none;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  a {
    background: #e9e9e9;
    border: none 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    position: relative;
    text-decoration: none;
    pointer-events: all;
    padding: 10px 20px;
    font-size: 0.8rem;
    margin: 0;
    width: 49%;
    line-height: 1.3;

    @media (min-width: 790px) {
      width: auto;
      transition: transform 0.25s linear;
    }

    span {
      display: inline-block;

      @media (min-width: 790px) {
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }
    }

    &.next {
      float: right;
      text-align: right;

      @media (min-width: 790px) {
        padding-left: 50px;
        padding-right: 15px;
        transform: translate3d(90%, 0, 0);
        span {
          left: 10px;
        }
      }
    }

    &.prev {
      float: left;

      @media (min-width: 790px) {
        padding-right: 80px;
        padding-left: 20px;
        transform: translate3d(-90%, 0, 0);
        span {
          right: 10px;
        }
      }
    }

    &:hover,
    &:focus {
      &.next {
        @media (min-width: 790px) {
          padding-right: 50px;
          padding-left: 10px;
          transform: translate3d(0, 0, 0);
          span {
            left: auto;
            right: 15px;
          }
        }
      }

      &.prev {
        @media (min-width: 790px) {
          padding-left: 40px;
          padding-right: 20px;
          transform: translate3d(0, 0, 0);
          span {
            right: auto;
            left: 15px;
          }
        }
      }
    }
  }
`;
