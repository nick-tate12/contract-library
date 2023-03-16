import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Crop {
  @PrimaryGeneratedColumn('uuid')
  cropID: number;

  @Column({ default: false })
  yield: boolean; // Might not be boolean.

  @Column({ default: false })
  price: boolean; // Might not be boolean.

  @Column({ default: false })
  primaryKey: string; // (id)

  @Column({ unique: true })
  status: string;
}
