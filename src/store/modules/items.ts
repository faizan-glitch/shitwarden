const state = {
    items: [
        // {
        //     id: 0,
        //     name: 'Hello World!',
        //     username: "John Doe",
        //     password: 'fubar',
        //     type: 'login',
        //     urls: ['https://example.com'],
        //     note: 'HElloawe apowje '
        // }
    ]
}


const getters = {
    getItems: (state: any) => state.items,
    getItemByID: (state: any) => (id: string) => state.items.find((item: any) => item.id == id) 
}

const actions = {
    // TODO when we connect to a server for now we do this things via mutations
    // createItem: (state: any, data: any) => {
    // },
    // editItem: (state: any, data: any) => {

    // },
    // deleteItem: (state: any, data: any) => {
    // },
}

const mutations = {
    setItems: (state: any, data: any) => state.items = data, // replaces the whole items array with a new one
    pushItem: (state: any, data: any) => {
        // Pushes a single item to the whole items array
        state.items.push(data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}