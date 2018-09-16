import { connect } from 'react-redux';

import leftListAction from '../actions/leftListAction.js';
import rightListAction from '../actions/rightListAction.js';
import RightList from '../components/rightList.js';

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
        dispatch(rightListAction.remove(source));
        dispatch(leftListAction.add(source));
      },
      '_removeUserHandler' : (source) => {
        dispatch(rightListAction.remove(source));
      }
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightList);
