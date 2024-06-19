import {Images} from "@site/src/constants/images";

interface AppConfig {
		id: string;
		title: string;
		image: keyof typeof Images;
		description: string;
		version: string;
}


export const apps: AppConfig[] = [
		{
				id: "analytics-messenger",
				title: "Analytics Messenger",
				image: "analyticsMessenger",
				description: "A DHIS2 web application that allows sending of analytics data to messaging applications.",
				version: "v1.0.0",
		},
		{
				id: "pid",
				title: "Program Indicator Disaggregator",
				image: "pid",
				description: "A tool to automatically create disaggregation for program indicators",
				version: "v1.0.0",
		},
		{
				id: "random-data-generator",
				title: "Random Data Generator",
				image: "randomDataGenerator",
				description: "A tool to configure and generate a tracker program random data",
				version: "v1.0.0",
		},
]

