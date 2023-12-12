import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  cars: Car[] = []

  createCar(createCarDto: CreateCarDto) {
    createCarDto.id = uuid()
    this.cars.push(createCarDto)

    return createCarDto;
  }

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find( x => x.id === id )
    if(!car){
      throw new NotFoundException(`El carro con id ${id} no ha sido encontrado`)
    }
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    this.getCarById(id)
    let i = this.cars.findIndex( x => x.id === id)
    this.cars[i] = { id, ...updateCarDto }

    return this.cars
    
  }

  deleteCar(id: string) {
    this.getCarById(id)
    this.cars = this.cars.filter( car => car.id !== id);

    return this.cars
  }
}
