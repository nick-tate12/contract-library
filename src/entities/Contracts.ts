import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Employee } from './Employee';
import { Mill } from './Mill';
import { Farmer } from './Farmer';
import { Crop } from './Crop';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  contractID: string;

  @Column(() => Employee)
  employee: Employee | null;

  @Column(() => Mill)
  mill: Mill | null;

  @Column(() => Farmer)
  farmer: Farmer | null;

  @Column(() => Crop)
  crop: Crop | null;

  @CreateDateColumn()
  createdOn: Date;
}
