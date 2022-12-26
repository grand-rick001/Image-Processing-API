import { describe } from 'node:test';
import resizeImage from '../../../routes/utilities/resize';

describe('Testing resize utility', () => {
    it('Tests if the function returns a truthy value', () => {
        expect(resizeImage('/home/grand-rick001/Coding/Fullstack-js/Image-Processing-API/assets/images/fjord.jpg', '500', '500', '/home/grand-rick001/Coding/Fullstack-js/Image-Processing-API/assets/thumbs/fjord_500_500.jpg'));
    })
})