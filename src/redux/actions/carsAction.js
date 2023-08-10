import {carService} from "../../services";

const carsActionsTypes = {
    SET_CARS: 'SET_CARS',
    CREATE_CAR: 'CREATE_CAR',
    UPDATE_CAR: 'UPDATE_CAR',
    DELETE_CAR: 'DELETE_CAR',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE'
}

const carsActions = {
    set: (payload) => ({type: carsActionsTypes.SET_CARS, payload}),
    create: (payload) => ({type: carsActionsTypes.CREATE_CAR, payload}),
    update: (payload) => ({type: carsActionsTypes.UPDATE_CAR, payload}),
    delete: (payload) => ({type: carsActionsTypes.DELETE_CAR, payload}),
    setCarForUpdate: (payload) => ({type: carsActionsTypes.SET_CAR_FOR_UPDATE, payload}),
}

const getCarsThunk = () => (dispatch) => {
    carService.getAll().then(({data}) => dispatch(carsActions.set(data)))
}

const createCarsThunk = (car) => (dispatch) => {
    carService.create(car).then(({data}) => dispatch(carsActions.create(data)));
}

const updateCarThunk = (id, car) => (dispatch) => {
    carService.updateById(id, car).then(({data}) => dispatch(carsActions.update(data)));
}

const deleteCarThunk = (id) => (dispatch) => {
    carService.deleteById(id);
    dispatch(carsActions.delete(id));
}

export {
    carsActionsTypes,
    carsActions,
    getCarsThunk,
    createCarsThunk,
    updateCarThunk,
    deleteCarThunk
}
