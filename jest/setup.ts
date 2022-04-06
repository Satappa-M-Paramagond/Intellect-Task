import { shallow, mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jsdom from 'js';

configure({ adapter: new Adapter() });

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            [key: string]: any; // dynamic key
        }
    }
}

global.shallow = shallow;
global.mount = mount;

const { JSDOM } = require('jsdom');
const { document } = new JSDOM(``, {
    url: 'https://example.com' // or whatever
}).window;
global.document = document;
global.window = document.defaultView;
