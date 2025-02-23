import { render, screen } from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid'
import { useFechGifs } from '../../src/hooks/useFechGifs';


jest.mock('../../src/hooks/useFechGifs');

describe('Pruebas en <GifGrid/>', () => { 
    
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFechGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category}/>);
        //screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     });


     test('debe de mostrar items cuando se cargan las imágenes useFechGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            }
        ];

        useFechGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category}/>);
        screen.debug();
        
      })

 })