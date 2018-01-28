import React, {Component, PropTypes} from "react";

const template_menuList = {
  "index": "",
  "name": "",
  "children": []
};

class Menu extends Component {    
  constructor(props) {
    super(props);
    this.state = {
      "active": ""
    };
    this.testFn = _testFn;
    this.testClickFn = _testClickFn;
    // this.testClickFn =_testClickFn.bind(this);
  };
  componentWillMount () {
  console.log(this.props);
    this.setState({
      "active" : this.props.defaultActicveStr
    });
  };
  
  render () {
    console.log("function test");
    this.testFn();
    /*
    console.log("array.map")
    let testArray = [
      {index:1,name:"a"},
      {index:2,name:"b"},
      {index:3,name:"c"},
      {index:4,name:"d"},
      {index:5,name:"e"},
      {index:6,name:"f"},
      {index:7,name:"g"},
      {index:8,name:"h"},
      {index:9,name:"i"}
    ];
    testArray.map((item,index)=>{
      console.log("item",item);
      console.log("index",index);
    })
    console.log("obj.map")
    let testObj = {
      a:{index:1,name:"a"},
      b:{index:2,name:"b"},
      c:{index:3,name:"c"},
      d:{index:4,name:"d"},
      e:{index:5,name:"e"},
      f:{index:6,name:"f"},
      g:{index:7,name:"g"},
      h:{index:8,name:"h"},
      i:{index:9,name:"i"}
    };
    Object.keys(testObj).map((item,index)=>{
      console.log("item",item);
      console.log("index",index);
    })
    */
    return (
      <div>
        <div className={`btb-name ${this.props.className}`} onClick={()=>{this.testClickFn()}}>
            function clink test
        </div>
        {
          (()=>{
            return "123456789 tttt"
          })()
        }
        {this.props.children}
      </div>
    );
  };
};

const _testFn = function () {
  console.log(this);
}
const _testClickFn = function () {
  console.log(this);
  console.log()
}

Menu.propTypes = {
  menuList: PropTypes.array.isRequired,
  defaultActicveStr: PropTypes.str,
  styleObj: PropTypes.obj,
  onClickItemFn: PropTypes.func 
};

Menu.defaultProps = {
  menuList: [],
  defaultActicveStr: "",
  styleObj: {},
  onClickItemFn: function(){}  
};

export default Menu;

export const defaultStyleObj = ()=>{
  return {
    
  };
};