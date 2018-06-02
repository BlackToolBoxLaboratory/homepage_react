import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import BTBMenu from 'blacktbox-menu';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-menu `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-menu'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `Example`;

const exampleTitle = `EXAMPLE`;
const exampleSubTitle_Notice = `Notice`;
const exampleSubTitle_Notice_Contnet = [
  `You can see the menuRef, clickEventObj and collapseEventObj from console.log, while triggering events.`,
  `To let the extensible menu items can be collapse/extend while clicked, please set the itemClickWithCollapseEnable true.`,
  `To mark which menu item is active. You will need to implement it by style(css) with the class group: activeTop, activeParent, active.`
];
const exampleButtonText = `Show menuRef to console.log`;

const rourceCodeTitle = `SOURCECODE`;
const rourceCodeSubTitle_Render = `Render`;
const rourceCodeSubTitle_List = `List`;
const rourceCodeSubTitle_Style = `Style`;
const rourceCodeSubTitle_DefaultActive = `Default Active`;

const ROURCECODE_RENDER_PRE = 
`<BTBMenu 
  menuArr={menuArr}
  styleObj={styleObj}
  inputRefFn={(ref)=>{this.menuRef=ref}}
  acticveIndex={acticveIndex}
  itemOnClickFn={this._itemOnClickFn}
  featureCollapsible= {{
    'enable': true,
    'itemClickWithCollapseEnable': falae,
    'defaultCollapse': false,
    'customCollapseButton': 'Collapsed',
    'customExtendButton': 'Extended',
    'itemOnCollapseFn': this._itemOnCollapseFn
  }}
/>`;
const ROURCECODE_LIST_PRE = 
`menuArr = [
{
  'index': 'M1',
  'name': 'Menu: 1',
  'children': [
  {
    'index': 'M1-1',
    'name': 'Menu: 1-1'
  },
  {
    'index': 'M1-2',
    'name': 'Menu: 1-2',
    'defaultCollapse': true,
    'children': [
    {
      'index': 'M1-2-1',
      'name': 'Menu: 1-2-1'
    },
    {
      'index': 'M1-2-2',
      'name': 'Menu: 1-2-2'
    }]
  },
  {
    'index': 'M1-3',
    'name': 'Menu: 1-3',
    'children': [
    {
      'index': 'M1-3-1',
      'name': 'Menu: 1-3-1'
    },
    {
      'index': 'M1-3-2',
      'name': 'Menu: 1-3-2'
    }]
  }]
},
{
  'index': 'M2',
  'name': 'Menu: 2',
  'defaultCollapse': true,
  'children': [
  {
    'index': 'M2-1',
    'name': 'Menu: 2-1',
    'children': [
    {
      'index': 'M2-1-1',
      'name': 'Menu: 2-1-1',
      'children': [
      {
        'index': 'M2-1-1-1',
        'name': 'Menu: 2-1-1-1'
      }]
    }]
  },
  {
    'index': 'M2-2',
    'name': 'Menu: 2-2'
  }]
}];`;
const ROURCECODE_STYLE_PRE = 
`styleObj = {
  'btb-menu': {
    'background-color': '#000',
    'padding': '1px',
    'font-weight': 'bold',
    'color': '#000'
  },
  'layer-0' : {
    'background-color': '#85a5ff'
  },
  'layer-1' : {
    'background-color': '#adc6ff'
  },
  'layer-2' : {
    'background-color': '#d6e4ff'
  },
  'layer-3' : {
    'background-color': '#f0f5ff'
  }
};`;
const ROUCECODE_DEFAULTACTIVE_PRE =
`acticveIndex = 'M2-1-1-1';`;

const menuArr = [
{
  'index': 'M1',
  'name': 'Menu: 1',
  'children': [
  {
    'index': 'M1-1',
    'name': 'Menu: 1-1'
  },
  {
    'index': 'M1-2',
    'name': 'Menu: 1-2',
    'defaultCollapse': true,
    'children': [
    {
      'index': 'M1-2-1',
      'name': 'Menu: 1-2-1'
    },
    {
      'index': 'M1-2-2',
      'name': 'Menu: 1-2-2'
    }]
  },
  {
    'index': 'M1-3',
    'name': 'Menu: 1-3',
    'children': [
    {
      'index': 'M1-3-1',
      'name': 'Menu: 1-3-1'
    },
    {
      'index': 'M1-3-2',
      'name': 'Menu: 1-3-2'
    }]
  }]
},
{
  'index': 'M2',
  'name': 'Menu: 2',
  'defaultCollapse': true,
  'children': [
  {
    'index': 'M2-1',
    'name': 'Menu: 2-1',
    'children': [
    {
      'index': 'M2-1-1',
      'name': 'Menu: 2-1-1',
      'children': [
      {
        'index': 'M2-1-1-1',
        'name': 'Menu: 2-1-1-1'
      }]
    }]
  },
  {
    'index': 'M2-2',
    'name': 'Menu: 2-2'
  }]
}];
const styleObj = {
  'btb-menu': {
    'background-color': '#000',
    'padding': '1px',
    'font-weight': 'bold',
    'color': '#000'
  },
  'layer-0' : {
    'background-color': '#85a5ff'
  },
  'layer-1' : {
    'background-color': '#adc6ff'
  },
  'layer-2' : {
    'background-color': '#d6e4ff'
  },
  'layer-3' : {
    'background-color': '#f0f5ff'
  }
};
const acticveIndex = 'M2-1-1-1';

class Example extends Component {
  constructor (props) {
    super(props);
    this.menuRef =[];
  };
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <AL.MainTitle>{mainTitle}</AL.MainTitle>
        <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
        <AL.Section>
          <AL.SectionTitle>{exampleTitle}</AL.SectionTitle>
          <AL.Content>
            <BTBMenu 
              menuArr={menuArr}
              styleObj={styleObj}
              inputRefFn={(ref)=>{this.menuRef=ref}}
              acticveIndex={acticveIndex}
              itemOnClickFn={this._itemOnClickFn}
              featureCollapsible= {{
                'enable': true,
                'itemClickWithCollapseEnable': false,
                'defaultCollapse': false,
                'customCollapseButton': 'Extend',
                'customExtendButton': 'Collapse',
                'itemOnCollapseFn': this._itemOnCollapseFn
              }}
            />
          </AL.Content>
          <AL.Item>
            <button onClick={()=>{this._consoleLogRef()}}>{exampleButtonText}</button>
          </AL.Item>
          <AL.Content>
            <AL.SectionSubtitle>{exampleSubTitle_Notice}</AL.SectionSubtitle>
            <AL.Content>
              <ul>
              {
                exampleSubTitle_Notice_Contnet.map((entry)=>(
                  <li>{entry}</li>
                ))
              }
              </ul>
            </AL.Content>
          </AL.Content>
        </AL.Section>
        <AL.Section>
          <AL.SectionTitle>{rourceCodeTitle}</AL.SectionTitle>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Render}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_RENDER_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Style}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_STYLE_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_List}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_LIST_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_DefaultActive}</AL.SectionSubtitle>
            <AL.Pre>{ROUCECODE_DEFAULTACTIVE_PRE}</AL.Pre>
          </AL.Content>
        </AL.Section>
      </div>
    );
    return content;
  };

  _itemOnClickFn (eventObj) {
    console.log('clickEventObj',  eventObj);
  };
  _itemOnCollapseFn (eventObj) {
    console.log('collapseEventObj',  eventObj);
  };
  _consoleLogRef () {
    let menuRef = ReactDOM.findDOMNode(this.menuRef);
    console.log('menuRef', menuRef)
  };
};

export default Example;
