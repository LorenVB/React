import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (<Fragment>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
        <hr />

        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                )
                )}
        </ol>
    </Fragment>
    )
}
