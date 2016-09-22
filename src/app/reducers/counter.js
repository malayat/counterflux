function counter(state = {}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                "valor": state.valor + 1,
                statistics: {
                    "numClicks": state.statistics.numClicks + 1
                }
            };
        case 'DECREMENT':
            return {
                "valor": state.valor - 1,
                statistics: {
                    "numClicks": state.statistics.numClicks + 1
                }
            };
        case 'RESET':
            return {
                "valor": state.valor,
                statistics: {
                    "numClicks": 0
                }
            };
        default:
            return state;
    }
}

export default counter;
