import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';



class Container extends Component {
   render() {
    return (
        <div>
             <button onClick={() => console.log(this.props.stateprop)  }> Get State Value </button>
             <button onClick={() => this.props.action1() } > Dispatch Action 1 </button>
             <button onClick={() => this.props.action2() } > Dispatch Action 2 </button>
             <button onClick={() => this.props.action_middleware1() } > Dispatch Async Middleware Action 1 </button>
             <button onClick={() => this.props.action_middleware2() } > Dispatch Async Middleware Action 2 </button>
       </div>
    )
  }
}


function mapStateToProps(state) {
    return {
        stateprop: state.stateprop
    };
}

function mapDispatchToProps (dispatch) {
  return {
    action1: () => dispatch({type: ACTION_TYPES.SUCCESS}),
    action2: () => dispatch({type: ACTION_TYPES.FAILURE}),
    action_middleware1: () => dispatch(ACTIONS.success()),
    action_middleware2: () => dispatch(ACTIONS.failure())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container);
