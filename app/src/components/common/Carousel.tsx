import React, { Component, useRef, useState } from 'react';
import BikeView from '../pages/BikeBuilder/bikeView/BikeView';

import { BikeConfig } from '../../types/index';

interface Props {
	bikeConfigs: BikeConfig[];
	index: number;
}

const Carousel = ({ bikeConfigs, index }: Props) => {
	const numberOfObjects = bikeConfigs.length;

	console.log(bikeConfigs);

	// return <BikeView bikeConfig={bikeConfigs[0]} />;

	return (
		<div className=" flex justify-center items-center w-full h-4/6">
			<div className="w-1/4 h-3/6 px-2 animate-bounce">
				{index > 0 ? <BikeView bikeConfig={bikeConfigs[index]} /> : ''}
			</div>

			<div className="w-2/4 px-2 h-80">
				<BikeView bikeConfig={bikeConfigs[index]} />
			</div>

			<div className="w-1/4 h-3/6 px-2 animate-bounce">
				{index < numberOfObjects - 1 ? (
					<BikeView bikeConfig={bikeConfigs[index]} />
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Carousel;
