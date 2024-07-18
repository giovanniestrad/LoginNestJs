import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';
export declare class BreedsService {
    private readonly breedRepository;
    constructor(breedRepository: Repository<Breed>);
    create(createBreedDto: CreateBreedDto): Promise<CreateBreedDto & Breed>;
    findAll(): Promise<Breed[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateBreedDto: UpdateBreedDto): Promise<string>;
    remove(id: number): Promise<string>;
}
