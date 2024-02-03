const addProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products");
    data = await data.json();
    console.log(data)

    if (data.success) {
        return data.result;

    } else {
        return { success: false }
    }
}

export default async function page() {
    const Products = await addProducts();
    console.log(Products)
    return (
        <div>
            <h1>
                Product list
            </h1>
            <table>
                <thead><tr>
                    <td>Name</td>
                    <td>price</td>
                    <td>color</td>
                    <td>category</td></tr>

                </thead>
                <tbody>
               


                </tbody>
            </table>
        </div>
    )
}
