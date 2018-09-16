import { connect } from 'react-redux';

import leftListAction from '../actions/leftListAction.js';
import rightListAction from '../actions/rightListAction.js';
import LeftList from '../components/leftList.js';

const mapStateToProps = (state) => {
  return ({
    'data' : {
      'leftList'  : state.leftList,
      'rightList' : state.rightList
    }
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    'handler' :
    {
      '_changeUserHandler' : (source) => {
        dispatch(leftListAction.remove(source));
        dispatch(rightListAction.add(source));
      },
      '_removeUserHandler' : (source) => {
        dispatch(leftListAction.remove(source));
      }
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftList);
