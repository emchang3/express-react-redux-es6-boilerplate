import React from 'react';
import { connect } from 'react-redux';
import { addOne } from './actions';

const App = ({ count, addOne }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{count}</div>
            <div>
                <button onClick={() => addOne(count + 1)}>+1</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: (newCount) => dispatch(addOne(newCount))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
