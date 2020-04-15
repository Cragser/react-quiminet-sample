import React from 'react';
import WrapperConsumer from '../store';

const Principal = ({ context: { user } }: any) => {
	return <div>Página principal {user.name}</div>;
};

export default WrapperConsumer(Principal);
