import { connect } from 'react-redux';

import leftListAction from '../actions/leftListAction.js';
import rightListAction from '../actions/rightListAction.js';
import UserAdder from '../components/userAdder.js';

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
      '_addUserLeftHandler' : (source) => {
        dispatch(leftListAction.add(source));
      },
      '_addUserRightHandler' : (source) => {
        dispatch(rightListAction.add(source));
      }
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAdder);
