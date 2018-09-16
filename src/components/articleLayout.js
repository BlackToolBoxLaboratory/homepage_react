import React from 'react';

export const MainTitle = (props) => {
  let content = [];
  props.className = `btb-articleLayout mainTitle ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const MainDescription = (props) => {
  let content = [];
  props.className = `btb-articleLayout mainDescription ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Section = (props) => {
  let content = [];
  props.className = `btb-articleLayout section ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const SectionTitle = (props) => {
  let content = [];
  props.className = `btb-articleLayout sectionTitle ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const SectionSubtitle = (props) => {
  let content = [];
  props.className = `btb-articleLayout sectionSubtitle ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Content = (props) => {
  let content = [];
  props.className = `btb-articleLayout content ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Pre = (props) => {
  let content = [];
  props.className = `btb-articleLayout content-pre ${(props.className) ? props.className : ''}`;
  content.push(
    <pre {...props}>{props.children}</pre>
  );
  return content;
};
export const Item = (props) => {
  let content = [];
  props.className = `btb-articleLayout content-item ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Notice = (props) => {
  let content = [];
  props.className = `btb-articleLayout notice ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const BtnGroup = (props) => {
  let content = [];
  props.className = `btb-articleLayout buttonGroup ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Btn = (props) => {
  let content = [];
  props.className = `btb-articleLayout button ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};

export default { 
  MainTitle, 
  MainDescription,
  Section,
  SectionTitle,
  SectionSubtitle,
  Content,
  Pre,
  Item,
  Notice,
  BtnGroup,
  Btn
};
