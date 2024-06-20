import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import pidConfig from "./docs/pid/config.json"

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
		pid: pidConfig.sidebar
};


export default sidebars;
