import React, { Component, FC } from 'react';
import Slider from 'react-slick';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const StoriesSlider: FC = ({ children }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return <Slider {...settings}>{children}</Slider>;
};

export default StoriesSlider;
