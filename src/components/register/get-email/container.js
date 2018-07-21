import View from './view';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { postUserInfo } from './actions';

const mapStateToProps = state => ({
  userInfo: state.getIn(['getEmailReducer', 'userInfo']),
});

const mapDispatchToProps = dispatch => ({
  postUserInfo: user => {
    dispatch(postUserInfo(user));
  }
});

const Container = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(View);

export default Container;
