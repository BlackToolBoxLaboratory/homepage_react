import React from 'react';

export const Wrapper = (props) => {
  let content = [];
  props.className = `btb-exampleLayout wrapper ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Part = (props) => {
  let content = [];
  props.className = `btb-exampleLayout part ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Block = (props) => {
  let content = [];
  props.className = `btb-exampleLayout block ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const InlineBlock = (props) => {
  let content = [];
  props.className = `btb-exampleLayout inlineBlock ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};
export const Title = (props) => {
  let content = [];
  props.className = `btb-exampleLayout title ${(props.className) ? props.className : ''}`;
  content.push(
    <div {...props}>{props.children}</div>
  );
  return content;
};

export default { 
  Wrapper, 
  Part,
  Block,
  InlineBlock,
  Title
};
