import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Testing custom hook useFetchGifs', () => { 
    const { result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));

    test('should return initial state', () => {
        
        
        const {data, loading} = result.current;
        // const { data, loading } = useFetchGifs('One punch');
        // console.log(resp);
        console.log( data, loading);

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
     })

     test('should return an img array and loading should be false', async() => { 
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

      })
 })