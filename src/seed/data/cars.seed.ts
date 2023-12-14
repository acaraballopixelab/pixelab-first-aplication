import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid'

export const CAR_SEED: Car[] = [
    {
        id: uuid(),
        name: 'Corolla',
        brand: 'Toyota',
        serial: 5544
    },
    {
        id: uuid(),
        name: 'Honda',
        brand: 'Civic',
        serial: 3343
    },
    {
        id: uuid(),
        name: 'Ford',
        brand: 'Fiesta Titanium',
        serial: 1122
    },
    {
        id: uuid(),
        name: 'Jeep',
        brand: 'Cherokee',
        serial: 2211
    }
]