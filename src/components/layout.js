import React from 'react';

export const MainTitle = (props) => {
  let content = [];
  props.className = 'btb-layout mainTitle ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const MainDescription = (props) => {
  let content = [];
  props.className = 'btb-layout mainDescription ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Section = (props) => {
  let content = [];
  props.className = 'btb-layout section ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const SectionTitle = (props) => {
  let content = [];
  props.className = 'btb-layout sectionTitle ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const SectionSubtitle = (props) => {
  let content = [];
  props.className = 'btb-layout sectionSubtitle ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Content = (props) => {
  let content = [];
  props.className = 'btb-layout content ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Pre = (props) => {
  let content = [];
  props.className = 'btb-layout content-pre ' + ((props.className) ? props.className : '');
  content.push(
    <pre {...props}>{props.children}</pre>
  );
  return content;
};
export const Item = (props) => {
  let content = [];
  props.className = 'btb-layout content-item ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Notice = (props) => {
  let content = [];
  props.className = 'btb-layout notice ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const BtnGroup = (props) => {
  let content = [];
  props.className = 'btb-layout buttonGroup ' + ((props.className) ? props.className : '');
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Btn = (props) => {
  let content = [];
  props.className = 'btb-layout button ' + ((props.className) ? props.className : '');
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
