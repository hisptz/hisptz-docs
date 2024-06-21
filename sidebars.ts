import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import pidConfig from "./docs/pid/config.json"
import analyticsMessengerConfig from "./docs/analytics-messenger/config.json"
import dataGeneratorConfig from "./docs/data-generator/config.json";
import uiConfig from "./docs/libs/ui/config.json"
import utilsConfig from "./docs/libs/utils/config.json"
import flutterToolsConfig from "./docs/flutter-tools/config.json"

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
		pid: pidConfig.sidebar,
		analyticsMessenger: analyticsMessengerConfig.sidebar,
		dataGenerator: dataGeneratorConfig.sidebar,
		uiConfig: uiConfig.sidebar,
		utilsConfig: utilsConfig.sidebar,
		flutterToolsConfig: flutterToolsConfig.sidebar,
};


export default sidebars;
