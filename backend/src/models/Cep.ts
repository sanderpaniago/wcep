import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity('cep')
export class Cep {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    localidade: string;

    @Column()
    uf: string;

    @Column()
    ddd: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;
}