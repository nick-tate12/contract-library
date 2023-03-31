import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  contractID: number;

  @Column({ unique: true })
  mill: string;

  @Column({ unique: true })
  marketer: string;

  @Column({ unique: true })
  farmer: string; // (name)

  @Column({ default: false })
  cropID: number;
}
