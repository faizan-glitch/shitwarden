
const state = {
    items: [
        {
            name: 'HEllo world',
            username: "adsasd",
            password: 'asdasd'
        }
    ]
}


const getters = {
    getItems: (state: any) => state.items,
    getItemByName: (state: any) => (name: string) => state.items.find((item: any) => item.name == name) 
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