import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Cep')
export default class Cep {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cep: string;

    @Column()
    logadouro: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    localidade: string;

    @Column()
    uf: string;

    // @Column()
    // latitude: string;

    // @Column()
    // longitude: string;
}