import {Preloader} from './preloader.js';
import {Loader} from './loader.js';
import {Navigation} from "./navigation.js";

new Navigation(new Loader(new Preloader()));