"use client";

import Slider from "react-slick";

export default function ProjectsSlider({ settings, children }: any) {
	return <Slider {...settings}>{children}</Slider>;
}
