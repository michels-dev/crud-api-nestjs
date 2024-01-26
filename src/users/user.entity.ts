import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// menggunakan dekorator untuk memberi tahu typeorm bahwa ini adalah entitas
@Entity()
export class User {
    // menggunakan dekorator untuk memberi tahu typeorm bahwa ini adalah kunci utama dari table
    @PrimaryGeneratedColumn()
    id: number;

    // menggunakan dekorator untuk memberi tahu typeorm bahwa ini adalah kolom dari table
    @Column({length:500})
    name: string;

    @Column()
    email: string;
}