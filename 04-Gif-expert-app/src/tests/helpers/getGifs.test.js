import { getGifs } from "../../helpers/getGifs"

describe('Testing getGifs Fetch', () => { 
    test('should return 10 items when a category is given', async () => { 

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
     })

     test('should not return anything when a category is not given', async () => { 

        const gifs = await getGifs('');
        expect(gifs.length).toBe(undefined);
     })
 })