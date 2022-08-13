import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing GifGridItem with Enzyme and Jest', () => {

    const title = "Testing Component";
    const url = "https:testing.com";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should render the GifGridItem Component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render the title prop as p html element', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title)
    })

    test('should render the alt and url tags with the url and title props', () => {
        const img = wrapper.find('img');
        console.log(img);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('should have animate__fadeIn class style', () => {
        const div = wrapper.find('div');
        console.log(div)
        const style = div.prop('className')
        expect(style.includes('animate__fadeIn')).toBe(true);
    })
})