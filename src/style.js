/*
 * @Date: 2019-12-29 23:01:13
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2019-12-29 23:31:31
 * @content: I
 */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, 
  img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i,
  center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output, ruby,section,
  summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  footer, header, hgroup, menu, nav, section, article, aside, details, figcaption,
  figure {
    display: block;
  }
  body {
    line-height: 1;
  }
  html, body {
    background: #f2f3f4;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  q:before, q:after, blockquote:before, blockquote:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color:#fff;
  }
`;
