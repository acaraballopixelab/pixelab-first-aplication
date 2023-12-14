import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CAR_SEED } from './data/cars.seed'
import { BRAND_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor( private carService: CarsService, private brandService: BrandsService){}

  populateDB(){
    this.carService.fellCarsWithSeedData(CAR_SEED)
    this.brandService.fellBrandsWithSeedData(BRAND_SEED)
    return 'seed excecuted'
  }
}
