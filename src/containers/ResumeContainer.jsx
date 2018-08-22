import { connect } from 'react-redux';

const mapStateToProps = state => (state && state.resumeContent) || {};

export default connect(mapStateToProps);
