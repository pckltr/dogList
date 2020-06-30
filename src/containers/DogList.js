import { connect } from "react-redux";
import { addDog, removeDog } from "../actions";
import List from "../components/List/List";

const mapStateToProps = (state) => ({
    dogList: state.dogList
});

const mapDispatchToProps = (dispatch) => ({
    addDog: (type) => dispatch(addDog(type)),
    removeDog: (type) => dispatch(removeDog(type)),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(List);
