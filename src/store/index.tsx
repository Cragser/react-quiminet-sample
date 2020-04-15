import React, { Component, createContext } from 'react';
// import ActionTypes from './ActionTypes';
import reducer from './Recucer';
const { Provider, Consumer } = createContext(null);

interface StorePropsInterface {
	store?: any;
	comp?: any;
}
interface StoreStateInterface {
	dispatch: Function;
	store?: any;
	user?: UserInterface;
}

interface UserInterface {
	name: string;
}
class ContextStore extends Component {
	props: StorePropsInterface;
	state: StoreStateInterface;
	constructor(props: StorePropsInterface) {
		super(props);
		this.props = props;
		this.state = {
			dispatch: async (action: any) => {
				const response = await reducer(this.state, action);
				if (response !== undefined) this.setState(response);
			},
			user: {
				name: 'Agrega tu nombre de usuario en /store/index.js'
			}
		};
	}
	render() {
		const data: any = this.state;
		const { store } = this.props;
		const { dispatch } = this.state;
		return <Provider value={store ? { [store]: data[store], dispatch } : data}>{this.props.comp}</Provider>;
	}
}

const WrapperConsumer = (Component: any) => {
	return (props: any) => <Consumer>{(context) => <Component {...props} context={context} />}</Consumer>;
};

export default WrapperConsumer;

export { ContextStore };
